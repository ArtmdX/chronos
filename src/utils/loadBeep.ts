import gravitationalBeep from '../assets/audio/gravitational_beep.mp3';

export function loadBeep() {
  const beep = new Audio(gravitationalBeep);
  beep.load();

  return () => {
    beep.currentTime = 0;
    beep.play().catch(error => {
      console.error('Erro ao tocar audio:', error);
    });
  };
}
