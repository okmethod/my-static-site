export const waveTypes: OscillatorType[] = ["sine", "square", "sawtooth", "triangle"];

export const labelTypes = ["none", "ja", "en"] as const;
export type LabelType = (typeof labelTypes)[number];

interface Note {
  name: { ja: string; en: string };
  octave: number;
  frequency: number;
  isSharp: boolean;
}

export const baseNotes: Note[] = [
  { name: { ja: "ド", en: "C" }, octave: 4, frequency: 261.63, isSharp: false },
  { name: { ja: "ド#", en: "C#" }, octave: 4, frequency: 277.18, isSharp: true },
  { name: { ja: "レ", en: "D" }, octave: 4, frequency: 293.66, isSharp: false },
  { name: { ja: "レ#", en: "D#" }, octave: 4, frequency: 311.13, isSharp: true },
  { name: { ja: "ミ", en: "E" }, octave: 4, frequency: 329.63, isSharp: false },
  { name: { ja: "ファ", en: "F" }, octave: 4, frequency: 349.23, isSharp: false },
  { name: { ja: "ファ#", en: "F#" }, octave: 4, frequency: 369.99, isSharp: true },
  { name: { ja: "ソ", en: "G" }, octave: 4, frequency: 392.0, isSharp: false },
  { name: { ja: "ソ#", en: "G#" }, octave: 4, frequency: 415.3, isSharp: true },
  { name: { ja: "ラ", en: "A" }, octave: 4, frequency: 440.0, isSharp: false },
  { name: { ja: "ラ#", en: "A#" }, octave: 4, frequency: 466.16, isSharp: true },
  { name: { ja: "シ", en: "B" }, octave: 4, frequency: 493.88, isSharp: false },
  { name: { ja: "ド", en: "C" }, octave: 5, frequency: 523.25, isSharp: false },
];

export function generateFrequencies(octaveShift: number = 0): Note[] {
  const multiplier = Math.pow(2, octaveShift); // オクターブ変更の倍率
  return baseNotes.map(({ name, octave: baseOctave, frequency, isSharp }) => ({
    name,
    octave: baseOctave + octaveShift,
    frequency: frequency * multiplier,
    isSharp: isSharp,
  }));
}

export const frequencies = generateFrequencies(0); // C4 オクターブ

export function startBeep(
  audioContextProvider: () => AudioContext,
  waveType: OscillatorType,
  frequency: number,
): AudioContext {
  const audioCtx = audioContextProvider();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = waveType;
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);

  oscillator.start();

  return audioCtx;
}

export function stopBeep(audioCtx: AudioContext) {
  audioCtx.close();
}

export function playBeep(
  audioContextProvider: () => AudioContext,
  waveType: OscillatorType,
  frequency: number,
  duration: number = 0.2,
) {
  const audioCtx = startBeep(audioContextProvider, waveType, frequency);
  setTimeout(() => stopBeep(audioCtx), duration * 1000);
}
