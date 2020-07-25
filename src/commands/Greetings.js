import { Message } from '../events/Message';
class Greetings{
    content(msg){
        return msg ? msg.reply('Bom dia meu caro amigo') : null;
    }
}

export default new Greetings();