import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

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
