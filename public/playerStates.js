const states = {
    SITTING: 0,
    WALKING: 1,
    RUNNING: 2,
    JUMPING: 3
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
    constructor(state){
        this.state = state;
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
        super('SITTING');
        this.animation = new PlayerAnimation([
            new FrameInfo(0, 0, 100, 100)
        ]);
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