import { Client } from 'discord.js';
import Message from './events/Message';

class App {
    constructor() {
        this.client =  new Client();
        this.onMessage();
    }
    onMessage(){
        // this.client.on('message', msg => Message.send);
        this.client.on('message', msg => Message.send(msg));
    }
}

export default new App().client;