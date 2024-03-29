const defaultNotes = [
	{ name: 'C0', frequency: 16.35 },
	{ name: 'C#0/Db0', frequency: 17.32 },
	{ name: 'D0', frequency: 18.35 },
	{ name: 'D#0/Eb0', frequency: 19.45 },
	{ name: 'E0', frequency: 20.60 },
	{ name: 'F0', frequency: 21.83 },
	{ name: 'F#0/Gb0', frequency: 23.12 },
	{ name: 'G0', frequency: 24.50 },
	{ name: 'G#0/Ab0', frequency: 25.96 },
	{ name: 'A0', frequency: 27.50 },
	{ name: 'A#0/Bb0', frequency: 29.14 },
	{ name: 'B0', frequency: 30.87 },
	{ name: 'C1', frequency: 32.70 },
	{ name: 'C#1/Db1', frequency: 34.65 },
	{ name: 'D1', frequency: 36.71 },
	{ name: 'D#1/Eb1', frequency: 38.89 },
	{ name: 'E1', frequency: 41.20 },
	{ name: 'F1', frequency: 43.65 },
	{ name: 'F#1/Gb1', frequency: 46.25 },
	{ name: 'G1', frequency: 49.00 },
	{ name: 'G#1/Ab1', frequency: 51.91 },
	{ name: 'A1', frequency: 55.00 },
	{ name: 'A#1/Bb1', frequency: 58.27 },
	{ name: 'B1', frequency: 61.74 },
	{ name: 'C2', frequency: 65.41 },
	{ name: 'C#2/Db2', frequency: 69.30 },
	{ name: 'D2', frequency: 73.42 },
	{ name: 'D#2/Eb2', frequency: 77.78 },
	{ name: 'E2', frequency: 82.41 },
	{ name: 'F2', frequency: 87.31 },
	{ name: 'F#2/Gb2', frequency: 92.50 },
	{ name: 'G2', frequency: 98.00 },
	{ name: 'G#2/Ab2', frequency: 103.83 },
	{ name: 'A2', frequency: 110.00 },
	{ name: 'A#2/Bb2', frequency: 116.54 },
	{ name: 'B2', frequency: 123.47 },
	{ name: 'C3', frequency: 130.81 },
	{ name: 'C#3/Db3', frequency: 138.59 },
	{ name: 'D3', frequency: 146.83 },
	{ name: 'D#3/Eb3', frequency: 155.56 },
	{ name: 'E3', frequency: 164.81 },
	{ name: 'F3', frequency: 174.61 },
	{ name: 'F#3/Gb3', frequency: 185.00 },
	{ name: 'G3', frequency: 196.00 },
	{ name: 'G#3/Ab3', frequency: 207.65 },
	{ name: 'A3', frequency: 220.00 },
	{ name: 'A#3/Bb3', frequency: 233.08 },
	{ name: 'B3', frequency: 246.94 },
	{ name: 'C4', frequency: 261.63 },
	{ name: 'C#4/Db4', frequency: 277.18 },
	{ name: 'D4', frequency: 293.66 },
	{ name: 'D#4/Eb4', frequency: 311.13 },
	{ name: 'E4', frequency: 329.63 },
	{ name: 'F4', frequency: 349.23 },
	{ name: 'F#4/Gb4', frequency: 369.99 },
	{ name: 'G4', frequency: 392.00 },
	{ name: 'G#4/Ab4', frequency: 415.30 },
	{ name: 'A4', frequency: 440.00 },
	{ name: 'A#4/Bb4', frequency: 466.16 },
	{ name: 'B4', frequency: 493.88 },
	{ name: 'C5', frequency: 523.25 },
	{ name: 'C#5/Db5', frequency: 554.37 },
	{ name: 'D5', frequency: 587.33 },
	{ name: 'D#5/Eb5', frequency: 622.25 },
	{ name: 'E5', frequency: 659.25 },
	{ name: 'F5', frequency: 698.46 },
	{ name: 'F#5/Gb5', frequency: 739.99 },
	{ name: 'G5', frequency: 783.99 },
	{ name: 'G#5/Ab5', frequency: 830.61 },
	{ name: 'A5', frequency: 880.00 },
	{ name: 'A#5/Bb5', frequency: 932.33 },
	{ name: 'B5', frequency: 987.77 },
	{ name: 'C6', frequency: 1046.50 },
	{ name: 'C#6/Db6', frequency: 1108.73 },
	{ name: 'D6', frequency: 1174.66 },
	{ name: 'D#6/Eb6', frequency: 1244.51 },
	{ name: 'E6', frequency: 1318.51 },
	{ name: 'F6', frequency: 1396.91 },
	{ name: 'F#6/Gb6', frequency: 1479.98 },
	{ name: 'G6', frequency: 1567.98 },
	{ name: 'G#6/Ab6', frequency: 1661.22 },
	{ name: 'A6', frequency: 1760.00 },
	{ name: 'A#6/Bb6', frequency: 1864.66 },
	{ name: 'B6', frequency: 1975.53 },
	{ name: 'C7', frequency: 2093.00 },
	{ name: 'C#7/Db7', frequency: 2217.46 },
	{ name: 'D7', frequency: 2349.32 },
	{ name: 'D#7/Eb7', frequency: 2489.02 },
	{ name: 'E7', frequency: 2637.02 },
	{ name: 'F7', frequency: 2793.83 },
	{ name: 'F#7/Gb7', frequency: 2959.96 },
	{ name: 'G7', frequency: 3135.96 },
	{ name: 'G#7/Ab7', frequency: 3322.44 },
	{ name: 'A7', frequency: 3520.00 },
	{ name: 'A#7/Bb7', frequency: 3729.31 },
	{ name: 'B7', frequency: 3951.07 },
	{ name: 'C8', frequency: 4186.01 },
	{ name: 'C#8/Db8', frequency: 4434.92 },
	{ name: 'D8', frequency: 4698.63 },
	{ name: 'D#8/Eb8', frequency: 4978.03 },
	{ name: 'E8', frequency: 5274.04 },
	{ name: 'F8', frequency: 5587.65 },
	{ name: 'F#8/Gb8', frequency: 5919.91 },
	{ name: 'G8', frequency: 6271.93 },
	{ name: 'G#8/Ab8', frequency: 6644.88 },
	{ name: 'A8', frequency: 7040.00 },
	{ name: 'A#8/Bb8', frequency: 7458.62 },
	{ name: 'B8', frequency: 7902.13 },
];

class Synthesiser {
    constructor({ 
        notes = defaultNotes,
        waveform = 'sine'
    } = {}) {
        this.context = new AudioContext();
        this.notes = {};
        notes.forEach(({ 
            frequency,
            name, 
            type = waveform
        } = {}) => {
            const oscillator = this.context.createOscillator();
            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);
            oscillator.start();
            const gainEffect = this.context.createGain();
            gainEffect.gain.setValueAtTime(0, this.context.currentTime);
            oscillator.connect(gainEffect).connect(this.context.destination);
            this.notes[name] = {oscillator, gainEffect}; 
        })
    }

    startNote(name) {
        if(this.notes[name]) {
            this.notes[name].gainEffect.gain.setValueAtTime(
                1, 
                this.context.currentTime
            );
        }
    }

    stopNote(name) {
        if(this.notes[name]) {
            this.notes[name].gainEffect.gain.setValueAtTime(
                0, 
                this.context.currentTime
            );
        }
    }

    setWaveForm(type) {
        Object.keys(this.notes).forEach(
            str => this.notes[str].oscillator.type = type
        )
    }

}

const synth = new Synthesiser();

const keys = {
    KeyA: 'C4',
    KeyW: 'C#4/Db4',
    KeyS: 'D4',
    KeyE: 'D#4/Eb4',
    KeyD: 'E4',
    KeyJ: 'F4',
    KeyI: 'F#4/Gb4',
    KeyK: 'G4',
    KeyO: 'G#4/Ab4',
    KeyL: 'A4',
    KeyP: 'A#4/Bb4',
    Semicolon: 'B4',
}

Object.keys(keys).map(
    (name) => {
        document.getElementById(name).onmousedown = () => { 
            synth.startNote(keys[name])
        };
        document.getElementById(name).onmouseup = () => {
            synth.stopNote(keys[name]);
        }
    }
)


document.onkeydown = event => {
    if(keys[event.code]) {
        document.getElementById(event.code).classList.add('keyActive');
        synth.startNote(keys[event.code])
    }
};

document.onkeyup = event => {
    if(keys[event.code]) {
        document.getElementById(event.code).classList.remove('keyActive');
        synth.stopNote(keys[event.code])
    }
};

document.querySelectorAll('[name=waveform]').forEach(
    element => {
        element.oninput = event => {
            if(event.target.checked) {
                synth.setWaveForm(event.target.value);
            }
        }
     }
)