import menu from './scenes/menu.js'
import game from './scenes/game.js'
const config = {
    width : 320*4,
    height: 180*4,
    parent: "container",
    type: Phaser.AUTO,
    backgroundColor: '#e0ecff',
    physics:{
        default:'arcade',
        
        arcade:{
            debug:true,
            gravity:{
                y:500
            }
        }
    },
    scene:[menu]
        

}

const juego = new Phaser.Game(config)
function preload(){
    
}
function create(){
    console.log("create")
}
function update(tiempo, delta){

}