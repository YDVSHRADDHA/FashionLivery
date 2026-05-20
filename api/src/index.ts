import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Production-ready strict CORS configuration
const allowedOrigins = [
  'http://localhost:3000', // Next.js dev server
  'https://fashion-livery.vercel.app', // Your primary live Vercel domain
  'https://fashion-livery-vtwo.vercel.app' // Optional secondary domains
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy (Access Denied)'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Verify JWT_SECRET security configuration on startup
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET && process.env.NODE_ENV === 'production') {
  console.error('[CRITICAL SECURITY ERROR]: JWT_SECRET is not defined in production!');
  process.exit(1);
}

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'LIVERY Core API' });
});

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to LIVERY API', 
    version: '1.0.0',
    documentation: '/docs' 
  });
});

app.listen(port, () => {
  console.log(`[server]: LIVERY API is running at http://localhost:${port}`);
});
