export class Keys{
    constructor(){
        this.ArrowDown =  false;
        this.ArrowUp =  false;
        this.ArrowLeft =  false;
        this.ArrowRight =  false;
        this.Enter =  false;
    }
}
export class InputHandler{
    constructor(){
        this.keys = new Keys();
        window.addEventListener('keydown', (e)=>{
            console.log(e.key);
            try{
                this.keys[e.key] = true;
            } catch(e){}

        })
        window.addEventListener('keyup', (e)=>{
            try{
                this.keys[e.key] = false;
            } catch(e){}
        })

    }
}