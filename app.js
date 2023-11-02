import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import indexRouter from './routes/index.js'
import { errorHandler, errorNotFound } from './middlewares/error.js'
import { __dirname } from './utils.js'
import cors from "cors"

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter)

app.use(errorNotFound)
app.use(errorHandler)

export default app