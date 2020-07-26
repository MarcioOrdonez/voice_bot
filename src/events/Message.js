import Greetings from '../commands/Greetings';
import Voice from '../commands/Voice';

class Message{
    async init(msg){
        if(msg.content.split(' ')[0] == '!bot'){
            if (msg && msg.content.split(' ')[1].toLowerCase().includes('greetings')){
                return await Greetings.content(msg);
            }
            else if (msg && msg.content.split(' ')[1].toLowerCase().includes('voice')){
                return await Voice.listening(msg);
            }
        }
        else{
            return null
        }
    }

}

export default new Message();