import { Player } from './player.js'
import { InputHandler, Keys } from './inputHandler.js'
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    
    class Game{
        constructor(w, h){
            this.width = w;
            this.height = h;
            this.input = new InputHandler()
            this.player = new Player(this)
            this.drawers = [
                this.player
            ]
        }
        /**
         * 
         * @param {Keys} keys 
         */
        update(keys){
            this.drawers.map((d)=>d.update(keys))
        }
        draw(context){
            this.update(this.input.keys);
            this.drawers.map((d)=>d.draw(context))
        }
    }
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    function animate(timestamp){
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        game.update(input, deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate)
    }
    animate(0);
})