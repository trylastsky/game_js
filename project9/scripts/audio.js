export class Sound {
    constructor() {
        //fire
        this.fireSound = new Audio();
        this.fireSound.src = './audio/fireSound.wav';
        //hit
        this.hitSound = new Audio();
        this.hitSound.src = './audio/hitSound.wav';
    }
}