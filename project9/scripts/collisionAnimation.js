export class CollisionAnimation {
    constructor(game, x, y ) {
        this.game = game;
        this.image = document.getElementById('collisionAnimation');
        this.spirteWidth = 100;
        this.spriteHeight = 90;
        this.sizeMod = Math.random() + 0.5;
        this.width = this.spirteWidth * this.sizeMod;
        this.height = this.spriteHeight * this.sizeMod;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.frameX = 0;
        this.maxFrame = 4;
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 5;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spirteWidth, 0, this.spirteWidth,
        this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x -= this.game.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
}