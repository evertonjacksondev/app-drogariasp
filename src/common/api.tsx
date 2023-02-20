import axios from "axios";
import * as dotenv from 'dotenv'

dotenv.config()

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:2530',
    timeout: 20000,
    headers: { 'X-Custom-Header': 'foobar' }
});