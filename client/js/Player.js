class Player {
    constructor(scene){
        this.scene = scene
        this.socket = io();
        
        this.x = this.getRandom(0, scene.game.config.width)
        this.y = this.getRandom(0, scene.game.config.height)

        this.circle = null
        this.radius = 10

        this.bindEventHandlers(this.socket);
    }

    create(){
        this.createCircle();
    }

    bindEventHandlers(socket){
        socket.on('player leave', function(){
            console.log('iemand heeft het spel verlaten')
        });
    }

    createCircle(){
        this.circle = new Phaser.Geom.Circle(this.x, this.y, this.radius);
        
        let graphics = this.scene.add.graphics({ fillStyle: { color: 0xff0000 } });
        graphics.fillCircleShape(this.circle);
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}