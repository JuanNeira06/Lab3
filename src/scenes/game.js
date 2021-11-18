import base from '../gameObjets/base.js'
import ficha from '../gameObjets/ficha.js'
export default class game extends Phaser.Scene{
    constructor(){
        super({key: 'game'});
    }

    preload(){
        
        this.load.image('Sficha','../assets/ficha.png')
        this.load.image('Sficha2','../assets/ficha2.png')
        this.load.image('celda','../assets/celda.png')
        this.load.image('flecha','../assets/flecha.png')
        this.load.image('Sbase','../../assets/base.png')
       
    }
    create(){
        var turn = 1
        var p1='Sficha'
        var p2='Sficha2'
        var Nrows= document.getElementById('rows').value
        var Ncolumns = document.getElementById('columns').value
        var columns = new Array(Ncolumns)
        var rows = new Array(Nrows)
        var widht = this.sys.game.config.width
        var height = this.sys.game.config.height
        for(var i=1;i<=Nrows;i++){
            rows.push()
           
        }
        for(i=1;i<=Ncolumns;i++){
            columns.push(rows)
           
        }
        
        for (var i = 1; i<=Ncolumns;i++){
            var aux = 50
            

            
            
            
            
            for(var  j = 1; j<=Nrows;j++){
                this.celda=this.add.image(100*i,height-(aux),'celda')
                this.celda.setScale(.96)
                aux= aux + 96
            }
            this.numero=this.add.text(100*i,height-(aux+10),i,{font:'72px Courier'})
             
        }
        this.fichasGroup = this.physics.add.group({
            classType:ficha,
            runChildUpdate: true,
            maxSize:100,
            
            
            
        })
        this.physics.world.addCollider(this.fichasGroup,this.fichasGroup)
       

        this.input.keyboard.on('keyup-ONE',  () =>{
            if(columns[1][Nrows]===undefined){
            for(var i=0;i<=Nrows;i++){
                if(turn%2===0){
                    var skin = p1
                       
                        if(columns[1][i]===undefined){
                            //columns.get(0).get(i).
                            columns[1].push(1)
                            
                            break
                        }
                    
                }else{
                    var skin = p2          
                       
                        if(columns[1][i]===undefined){
                            //columns.get(0).get(i).
                            columns[1].push(2)
                            
                            break
                        }        
                                    
                }
                
            }
            
            
            let ficha = this.fichasGroup.get(100*1,99,skin)
            ficha.setCollideWorldBounds(true)
            ficha.setBounce(.35)
            ficha.setScale(.95)
            this.fichasGroup.setDepth(-1)
            turn++
            
        }
            
        });
        this.input.keyboard.on('keyup-TWO',  () =>{
            if(columns[2][Nrows]===undefined){
                for(var i=0;i<=Nrows;i++){
                    if(turn%2===0){
                        var skin = p1
                           
                            if(columns[2][i]===undefined){
                                //columns.get(0).get(i).
                                columns[2].push(1)
                                
                                break
                            }
                        
                    }else{
                        var skin = p2          
                           
                            if(columns[2][i]===undefined){
                                //columns.get(0).get(i).
                                columns[2].push(2)
                                
                                break
                            }        
                                        
                    }
                    
                }
                
                
                let ficha = this.fichasGroup.get(200*1,101,skin)
                ficha.setCollideWorldBounds(true)
                ficha.setBounce(.35)
                ficha.setScale(.95)
                this.fichasGroup.setDepth(-1)
                turn++
                
            }
            
        });
        this.input.keyboard.on('keyup-THREE',  () =>{
            if(columns[3][Nrows]===undefined){
                for(var i=0;i<=Nrows;i++){
                    if(turn%2===0){
                        var skin = p1
                           
                            if(columns[3][i]===undefined){
                                //columns.get(0).get(i).
                                columns[3].push(1)
                                
                                break
                            }
                        
                    }else{
                        var skin = p2          
                           
                            if(columns[3][i]===undefined){
                                //columns.get(0).get(i).
                                columns[3].push(2)
                                
                                break
                            }        
                                        
                    }
                    
                }
                
                
                let ficha = this.fichasGroup.get(300*1,102,skin)
                ficha.setCollideWorldBounds(true)
                ficha.setBounce(.35)
                ficha.setScale(.95)
                this.fichasGroup.setDepth(-1)
                turn++
                
            }
            
        });
        this.input.keyboard.on('keyup-FOUR',  () =>{
             if(columns[4][Nrows]===undefined){
                for(var i=0;i<=Nrows;i++){
                    if(turn%2===0){
                        var skin = p1
                           
                            if(columns[4][i]===undefined){
                                //columns.get(0).get(i).
                                columns[4].push(1)
                                
                                break
                            }
                        
                    }else{
                        var skin = p2          
                           
                            if(columns[4][i]===undefined){
                                //columns.get(0).get(i).
                                columns[4].push(2)
                                
                                break
                            }        
                                        
                    }
                    
                }
                
                
                let ficha = this.fichasGroup.get(400*1,103,skin)
                ficha.setCollideWorldBounds(true)
                ficha.setBounce(.35)
                ficha.setScale(.95)
                this.fichasGroup.setDepth(-1)
                turn++
                
            }
            
        });
        this.input.keyboard.on('keyup-FIVE',  () =>{
            if(Ncolumns>=5){
                if(columns[5][Nrows]===undefined){
                    for(var i=0;i<=Nrows;i++){
                        if(turn%2===0){
                            var skin = p1
                               
                                if(columns[5][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[5].push(1)
                                    
                                    break
                                }
                            
                        }else{
                            var skin = p2          
                               
                                if(columns[5][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[5].push(2)
                                    
                                    break
                                }        
                                            
                        }
                        
                    }
                    
                    
                    let ficha = this.fichasGroup.get(500*1,104,skin)
                    ficha.setCollideWorldBounds(true)
                    ficha.setBounce(.35)
                    ficha.setScale(.95)
                    this.fichasGroup.setDepth(-1)
                    turn++
                    
                }
        }
            
        });
        this.input.keyboard.on('keyup-SIX',  () =>{
               if(Ncolumns>=6){
                if(columns[6][Nrows]===undefined){
                    for(var i=0;i<=Nrows;i++){
                        if(turn%2===0){
                            var skin = p1
                               
                                if(columns[6][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[6].push(1)
                                    
                                    break
                                }
                            
                        }else{
                            var skin = p2          
                               
                                if(columns[6][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[6].push(2)
                                    
                                    break
                                }        
                                            
                        }
                        
                    }
                    
                    
                    let ficha = this.fichasGroup.get(600*1,105,skin)
                    ficha.setCollideWorldBounds(true)
                    ficha.setBounce(.35)
                    ficha.setScale(.95)
                    this.fichasGroup.setDepth(-1)
                    turn++
                    
                }
        }
        });
        this.input.keyboard.on('keyup-SEVEN',  () =>{
            if(Ncolumns>=7){
                if(columns[7][Nrows]===undefined){
                    for(var i=0;i<=Nrows;i++){
                        if(turn%2===0){
                            var skin = p1
                               
                                if(columns[7][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[7].push(1)
                                    
                                    break
                                }
                            
                        }else{
                            var skin = p2          
                               
                                if(columns[7][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[7].push(2)
                                    
                                    break
                                }        
                                            
                        }
                        
                    }
                    
                    
                    let ficha = this.fichasGroup.get(700*1,106,skin)
                    ficha.setCollideWorldBounds(true)
                    ficha.setBounce(.35)
                    ficha.setScale(.95)
                    this.fichasGroup.setDepth(-1)
                    turn++
                    
                }
            }
        });
        this.input.keyboard.on('keyup-EIGHT',  () =>{
            if(Ncolumns>=8){
                if(columns[8][Nrows]===undefined){
                    for(var i=0;i<=Nrows;i++){
                        if(turn%2===0){
                            var skin = p1
                               
                                if(columns[8][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[1].push(1)
                                    
                                    break
                                }
                            
                        }else{
                            var skin = p2          
                               
                                if(columns[8][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[8].push(2)
                                    
                                    break
                                }        
                                            
                        }
                        
                    }
                    
                    
                    let ficha = this.fichasGroup.get(800*1,107,skin)
                    ficha.setCollideWorldBounds(true)
                    ficha.setBounce(.35)
                    ficha.setScale(.95)
                    this.fichasGroup.setDepth(-1)
                    turn++
                    
                }
            }
        });
        this.input.keyboard.on('keyup-NINE',  () =>{
            if(Ncolumns>=9){
                if(columns[9][Nrows]===undefined){
                    for(var i=0;i<=Nrows;i++){
                        if(turn%2===0){
                            var skin = p1
                               
                                if(columns[9][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[9].push(1)
                                    
                                    break
                                }
                            
                        }else{
                            var skin = p2          
                               
                                if(columns[9][i]===undefined){
                                    //columns.get(0).get(i).
                                    columns[9].push(2)
                                    
                                    break
                                }        
                                            
                        }
                        
                    }
                    
                    
                    let ficha = this.fichasGroup.get(900*1,108,skin)
                    ficha.setCollideWorldBounds(true)
                    ficha.setBounce(.35)
                    ficha.setScale(.95)
                    this.fichasGroup.setDepth(-1)
                    turn++
                    
                }
            }
        });
       
       
        
    }

   
    update(){
        if(true){}
        
    }
    
}
