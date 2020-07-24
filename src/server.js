import client from './app';
import { config } from 'dotenv';


client.login(process.env.TOKEN || '');


