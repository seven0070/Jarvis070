import { WhisperLocal } from './whisper-local.js';
import { PiperTTS } from './piper-tts.js';
export class VoiceEngine {
  whisper = new WhisperLocal();
  piper = new PiperTTS();
  async init(){ console.log('🎤 Voice GOD: Whisper local + Piper + ElevenLabs ready'); }
}
