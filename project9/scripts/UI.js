export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Creepster';
        this.livesImage = document.getElementById('lives');
        this.heartImage = document.getElementById('heart');
    }
    draw(context) {
        context.save();
        context.shadowOffsetX = 1.5;
        context.shadowOffsetY = 1.5;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'Left';
        context.fillStyle = this.game.fontColor;
        //score
        context.fillText('Score: ' + this.game.score, 20, 50);
        //timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        //lives
        for (let i = 0; i < this.game.lives; i++) {
            context.drawImage(this.heartImage, 30 * i + 20, 95, 25, 20);
        }
        //game over mess
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 1.5 + 'px ' + this.fontFamily;
            context.fillText('Game over', this.game.width * 0.5, this.game.height * 0.5 - 20);
            context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
            context.fillText('Better like next time!',
            this.game.width * 0.5, this.game.height * 0.5 + 20)
        } else {
                if (this.game.score > this.game.winningScore) {
                    context.textAlign = 'center';
                    context.font = this.fontSize * 1.5 + 'px ' + this.fontFamily;
                    context.fillText('WIN!!!', this.game.width * 0.5, this.game.height * 0.5 - 20);
                    context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                    context.fillText('Your great killer!',
                    this.game.width * 0.5, this.game.height * 0.5 + 20);
                    this.game.gameWin = true; 
            }
            }
            context.restore();
        }
}