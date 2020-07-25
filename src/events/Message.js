import Greetings from '../commands/Greetings';

class Message{
    async send(msg){
        if(msg.content.split(' ')[0] == '!bot'){
            if (msg && msg.content.split(' ')[1].toLowerCase().includes('greetings')){
                return await Greetings.content(msg);
            }
        }
    }

}

export default new Message();