export class WhisperLocal {
  model = './public/models/ggml-base.en.bin';
  async transcribe(audioPath:string){
    console.log(`🎤 Whisper local transcribing ${audioPath} offline`);
    return "transcribed text";
  }
}
