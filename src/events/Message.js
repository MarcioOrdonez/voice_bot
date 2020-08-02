import Greetings from '../commands/Greetings';
import Voice from '../commands/Voice';
import FileRequest from '../utils/FileRequest'

class Message{
    async init(msg){
        if(msg.content.split(' ')[0] == '!bot'){
            if (msg && msg.content.split(' ')[1].toLowerCase().includes('greetings')){
                return await Greetings.content(msg);
            }
            else if (msg && msg.content.split(' ')[1].toLowerCase().includes('voice')){
                return await Voice.listening(msg);
            }
            else if (msg && msg.content.split(' ')[1].toLowerCase().includes('file')){
                return await FileRequest.getRequest('/home/marcio/Code/discord_bot/voice_bot/temp/como_voce_esta.mp3');
            }
        }
        else{
            return null
        }
    }

}

export default new Message();