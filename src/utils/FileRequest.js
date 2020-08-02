import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1'
import { IamAuthenticator } from 'ibm-watson/auth'
import fs from 'fs';
class FileRequest {
    async getRequest(path) {
        const params = {
            objectMode: true,
            contentType: 'audio/mp3'
        }
        const speechToText = new SpeechToTextV1({
            authenticator: new IamAuthenticator({
                apikey: process.env.TEXT_TO_SPEECH_APIKEY
            }),
            url: process.env.TEXT_TO_SPEECH_URL
        })
        // create the stream
        var recognizeStream = speechToText.recognizeUsingWebSocket(params);
        fs.createReadStream('/home/marcio/Code/discord_bot/voice_bot/temp/how_are_you.mp3').pipe(recognizeStream)
        recognizeStream.on('data', function (event) { onEvent('Data:', event); });
        recognizeStream.on('error', function (event) { onEvent('Error:', event); });
        recognizeStream.on('close', function (event) { onEvent('Close:', event); });

        // Display events on the console.
        function onEvent(name, event) {
            console.log(name, JSON.stringify(event, null, 2));
        };

    }

}


export default new FileRequest();