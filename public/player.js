import { Sitting, Running, Jumping, Falling } from './playerStates.js'
import { Keys } from './inputHandler.js'
export class Player{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.image = new Image();
        this.image.src = './assets/players.jpeg';
        this.x = 0;
        this.y = this.game.height - this.height;
        this.lastDrawSquare = {x:0, y:0, w:this.width, h: this.height}
        this.framePos = {x:0, y:0, width: this.width, height: this.height}

        this.states = [ new Sitting(this), new Running(this), new Jumping(this), new Falling(this) ];
        this.currentState = this.states[0];
        this.currentState.enter();

        this.speedY = 0;
        this.weight = 1;
        this.speedX = 0;
        this.maxSpeed = 10;
    }
    /**
     * 
     * @param {Keys} input 
     */
    update(input){
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX = 0;
        if(input.ArrowRight){
            this.speedX = this.maxSpeed;
        } else if(input.ArrowLeft){
            this.speedX = -this.maxSpeed;
        }
        this.x = Math.max(0, this.x)
        this.x = Math.min(this.x, this.game.width - this.width);
        if(input.ArrowUp && this.onGround()){
            this.speedY = -20;
        }
        if(!this.onGround()){
            this.speedY += this.weight;
        } else {
            this.speedY = 0;
        }
    }
    draw(context){
        this.currentState.animate();
        const frameInfo = this.currentState.animation.frame;
        context.clearRect( this.lastDrawSquare.x, this.lastDrawSquare.y, this.lastDrawSquare.w, this.lastDrawSquare.h);
        this.lastDrawSquare = {x:this.x, y:this.y, w:this.width, h: this.height}
        context.drawImage( frameInfo.image, frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height, this.x, this.y, this.width, this.height)
        
    }
    setState(state){
        this.currentState = this.states[state];
    }
    onGround(){
        return this.y >= this.game.height - this.height;
    }
}