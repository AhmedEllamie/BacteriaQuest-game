const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (frequency: number, duration: number) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  
  return { oscillator, gainNode };
};

export const playCorrectSound = () => {
  const { oscillator, gainNode } = createOscillator(800, 0.2);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
};

export const playWrongSound = () => {
  const { oscillator, gainNode } = createOscillator(300, 0.3);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.3);
};

export const playGameOverSound = () => {
  const { oscillator, gainNode } = createOscillator(400, 1);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1);
};
