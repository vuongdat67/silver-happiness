import { initUI } from './ui.js';
import { initAudio, loadAudioLibrary } from './audio.js';
import { initPiano } from './piano.js';
import { initCat } from './cat.js';
import { initVisualizer } from './visualizer.js';

initUI();
initAudio();
initPiano();
initCat();
initVisualizer();

loadAudioLibrary();
