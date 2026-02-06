import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import path from 'path';
import router from './routes/routes';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { PORT, DB_ADDRESS = 'mongodb://localhost:27017/weblarek' } = process.env;
mongoose.connect(DB_ADDRESS);
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте: ${PORT}`);
});
