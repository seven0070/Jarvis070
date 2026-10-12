export class PiperTTS {
  voice = 'en_US-lessac-medium';
  async speak(text:string){
    console.log(`🔊 Piper offline TTS: ${text}`);
    // writes to ./dist/voice.wav
  }
}
