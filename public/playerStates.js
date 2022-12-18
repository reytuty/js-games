import { Keys } from './inputHandler.js'
const states = {
    IDLE: 0,
    SITTING: 1,
    RUNNING: 2,
    JUMPING: 3,
    FALLING: 4
}
export class FrameInfo{
    constructor(x, y, w, h, image){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = w;
        this.h = h;
    }
}
export class State {
    constructor(state , playerAnimation){
        this.state = state;
        this.animation = playerAnimation;
        this.player = player;
    }
    animate(){
        this.animation.animate();
    }
    enter(){
        this.animation.enter();
    }
    handlerInput(input){
        //
    }
}
export class PlayerAnimation{
    /**
     * 
     * @param {FrameInfo[]} frames 
     */
    constructor(frames){
        this.frames = frames;
        this.currentFrameIndex = 0;
        this.frame = frames[0];
    }
    enter(){
        this.currentFrameIndex = 0;
        this.frame = this.frames[this.currentFrameIndex] ;
    }
    animate(){
        this.currentFrameIndex++;
        if(this.currentFrameIndex > this.frames.length){
            this.currentFrameIndex = 0;
        }
    }
}
export class Sitting extends State{
    constructor(player){
        super('SITTING', new PlayerAnimation([
            new FrameInfo(0, 0, 100, 100)
        ]));
        this.player = player;
    }
    /**
     * 
     * @param {Keys} input 
     */
    handlerInput(input){
        if(input.ArrowLeft || input.ArrowRight){
            this.player.setState(states.RUNNING);
        }
    }
}
export class Running extends State{
    constructor(player){
        super('RUNNING', new PlayerAnimation([
            new FrameInfo(0, 0, 100, 100)
        ]));
        this.player = player;
    }
    /**
     * 
     * @param {Keys} input 
     */
    handlerInput(input){
        if(input.ArrowDown){
            this.player.setState(states.SITTING);
        }
    }
}
export class Jumping extends State{
    constructor(player){
        super('JUMPING', new PlayerAnimation([
            new FrameInfo(0, 0, 100, 100)
        ]));
        this.player = player;
    }
    /**
     * 
     * @param {Keys} input 
     */
    handlerInput(input){
        if(input.ArrowDown){
            //TODO: power to down quickly
        }
    }
}
export class Falling extends State{
    constructor(player){
        super('FALLING', new PlayerAnimation([
            new FrameInfo(0, 0, 100, 100)
        ]));
        this.player = player;
    }
    /**
     * 
     * @param {Keys} input 
     */
    handlerInput(input){
        if(input.ArrowDown){
            //TODO: power to down quickly
        }
    }
}
export class Idle extends State{
    constructor(player){
        super('IDLE', new PlayerAnimation([
            new FrameInfo(0, 0, 100, 100)
        ]));
        this.player = player;
    }
    /**
     * 
     * @param {Keys} input 
     */
    handlerInput(input){
        if(input.ArrowLeft || input.ArrowRight){
            this.player.setState(states.RUNNING);
            return;
        }
        if(input.ArrowDown){
            this.player.setState(states.SITTING);
        }
    }
}