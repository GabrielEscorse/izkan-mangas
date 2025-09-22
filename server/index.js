import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/mangas', async (req, res) => {
  const result = await pool.query('SELECT * FROM mangas');
  res.json(result.rows);
});

// outras rotas...

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
