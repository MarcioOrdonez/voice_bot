import fs from 'fs';

class Voice{
    listening(msg){
        if(!msg.member.voice.channel){
            return msg.reply('You must to connect to a voice channel before! ');
        }
        if(!msg.guild.voiceConnection){
            const voiceChannel = msg.member.voice.channel;
            voiceChannel.join().then(async conn => {
                msg.reply('Ready!');
                const receiver = conn.receiver;
                conn.on('startSpeaking', (user, speaking) =>{
                    console.log('esta me ovindo');
                    if(speaking){
                        msg.channel.sendMessage(`Listening to $(user)`);
                        const audioStream = receiver.createPCMStream(user);
                        const outputStream = generateOutputFile(voiceChannel, user);
                        audioStream.pipe(outputStream);
                        outputStream.on("data", console.log);
                        audioStream.on('end', () => {
                            msg.channel.sendMessage(`I'm no longer listening to ${user}`);
                            voiceChannel.leave();discor
                          });
                    }
                });
                const user = voiceChannel.members[0];
                const audio = receiver.createStream(user,{mode:'pcm', end:'manual'});
                audio.pipe(fs.createWriteStream('user_audio'));
                await setTimeout(()=>{console.log('tempo ')},10000);
                const { voiceStream,writeStream } = user;
                voiceStream.destroy();
			    writeStream.end();
                voiceChannel.leave();
            }).catch(console.log);
        }
    }
}

export default new Voice;