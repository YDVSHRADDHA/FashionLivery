from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import numpy as np
from sentence_transformers import SentenceTransformer
import time
from collections import defaultdict
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse

app = FastAPI(title="LIVERY AI Recommendation Engine")

# 🛡️ CORS Protection Configuration
allowed_origins = [
    "http://localhost:3000",
    "https://fashion-livery.vercel.app",
    "https://fashion-livery-vtwo.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🛡️ Memory-based IP Rate Limiter Middleware (Max 60 requests per minute per IP)
RATE_LIMIT_WINDOW = 60  # seconds
MAX_REQUESTS_PER_WINDOW = 60
request_history = defaultdict(list)

class RateLimitMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        client_ip = request.client.host if request.client else "unknown"
        current_time = time.time()
        
        # Filter request timestamps within the active time window
        request_history[client_ip] = [
            t for t in request_history[client_ip]
            if current_time - t < RATE_LIMIT_WINDOW
        ]
        
        if len(request_history[client_ip]) >= MAX_REQUESTS_PER_WINDOW:
            return JSONResponse(
                status_code=429,
                content={"detail": "Too many requests. Rate limit exceeded (Max 60 req/min)."}
            )
            
        request_history[client_ip].append(current_time)
        return await call_next(request)

app.add_middleware(RateLimitMiddleware)

# Load a lightweight model for style embeddings
# In production, we'd use a custom CLIP model fine-tuned on fashion data
model = SentenceTransformer('all-MiniLM-L6-v2')

class StyleQuery(BaseModel):
    user_dna: Optional[List[float]] = None
    query_text: Optional[str] = None
    context: Optional[dict] = None

class Product(BaseModel):
    id: str
    name: str
    description: str
    aesthetic_vector: List[float]

@app.get("/")
async def root():
    return {"message": "LIVERY AI Service is online"}

@app.post("/recommend")
async def recommend_products(query: StyleQuery):
    """
    Simulate a recommendation engine.
    In a real scenario, this would query a Vector Database like Pinecone.
    """
    if query.query_text:
        query_vector = model.encode(query.query_text).tolist()
    elif query.user_dna:
        query_vector = query.user_dna
    else:
        raise HTTPException(status_code=400, detail="Missing query signals")
    
    return {
        "query_vector_preview": query_vector[:5],
        "message": "Recommendation pipeline active",
        "match_score": 0.984
    }

@app.get("/health")
async def health():
    return {"status": "healthy", "model": "all-MiniLM-L6-v2"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
