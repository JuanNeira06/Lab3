import game from './game.js'
export default class menu extends Phaser.Scene{
    constructor(){
        super({key: 'menu'});
    }
    preload(){
      
    }
    create(){
        console.log('preload')
        var widht = this.sys.game.config.width/3
        var height = this.sys.game.config.height/2
        this.numero=this.add.text(widht,height,"Click Star",{font:'72px Courier'})
        this.scene.add('game', new game)    
        document.getElementById("state").addEventListener("click", () =>{
            this.scene.start('game')
          });
        
    }
   
    update(){
        
         }
}
