import { config } from 'dotenv';
import {genSaltSync} from 'bcrypt';
config();

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const SALT=genSaltSync(13);
export const JWT_KEY=process.env.JWT_KEY;