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

export const playWelcomeSound = () => {
  // Play a pleasant ascending arpeggio
  const frequencies = [400, 500, 600];
  frequencies.forEach((freq, index) => {
    setTimeout(() => {
      const { oscillator } = createOscillator(freq, 0.3);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);
    }, index * 200);
  });
  // Return total duration of the welcome sound
  return frequencies.length * 200;
};

export const playCorrectSound = () => {
  const { oscillator } = createOscillator(800, 0.2);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
};

export const playWrongSound = () => {
  const { oscillator } = createOscillator(300, 0.3);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.3);
};

export const playGameOverSound = () => {
  const { oscillator } = createOscillator(400, 1);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1);
};