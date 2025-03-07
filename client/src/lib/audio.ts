const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (frequency: number, duration: number, volume: number = 0.5) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

  return { oscillator, gainNode };
};

export const speakWelcome = (text: string) => {
  // Check if speech synthesis is supported
  if ('speechSynthesis' in window) {
    // Split text into paragraphs for better pacing
    const paragraphs = text.split('\n\n').filter(p => p.trim());

    // Queue each paragraph for speaking
    paragraphs.forEach((paragraph, index) => {
      const utterance = new SpeechSynthesisUtterance(paragraph);
      utterance.rate = 0.9; // Slightly slower rate for clarity
      utterance.pitch = 1;
      utterance.volume = 1;

      // Add a small delay between paragraphs
      utterance.onstart = () => {
        if (index > 0) {
          setTimeout(() => {}, 500);
        }
      };

      window.speechSynthesis.speak(utterance);
    });
  }
};

export const playWelcomeSound = () => {
  // Play a pleasant ascending arpeggio
  const frequencies = [400, 500, 600];
  frequencies.forEach((freq, index) => {
    setTimeout(() => {
      const { oscillator } = createOscillator(freq, 0.5, 0.6);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
    }, index * 300);
  });
  return frequencies.length * 300;
};

export const playCorrectSound = () => {
  // Play a happy chord
  const frequencies = [500, 600, 750];
  frequencies.forEach((freq, index) => {
    setTimeout(() => {
      const { oscillator } = createOscillator(freq, 0.4, 0.6);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.4);
    }, index * 100);
  });
};

export const playWrongSound = () => {
  // Play a descending error sound
  const frequencies = [300, 250, 200];
  frequencies.forEach((freq, index) => {
    setTimeout(() => {
      const { oscillator } = createOscillator(freq, 0.4, 0.6);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.4);
    }, index * 100);
  });
};

export const playGameOverSound = () => {
  // Play a dramatic ending sound
  const frequencies = [400, 300, 200];
  frequencies.forEach((freq, index) => {
    setTimeout(() => {
      const { oscillator } = createOscillator(freq, 0.6, 0.7);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.6);
    }, index * 200);
  });
};