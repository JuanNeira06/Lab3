class fichas extends Phaser.Physics.Arcade.Sprite{
    costructor(scene,x,y){
        super.Phaser.Physics.Arcade.Sprite(scene,x,y,'Sficha')
        scene.add.existing(this)
        scene.physics.world.enable(this)
    }
    
    init(){
        this.setActive(true)
        this.setVisible(true)
    }
}

export default fichas