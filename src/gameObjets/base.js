
 class base extends Phaser.Physics.Arcade.Sprite {
   
    costructor(scene,x,y){
        super.Phaser.Physics.Arcade.Sprite(scene,x,y,'Sbase')
        scene.add.existing(this);
        scene.physics.world.enable(this);
        
    }
    
}
export default base