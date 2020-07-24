import client from './app';
import { config } from 'dotenv';

config();
client.login(process.env.TOKEN || '');


