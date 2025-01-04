import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import bookRoutes from './routes/bookRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});