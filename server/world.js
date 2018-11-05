class World {
    constructor(io){
        this.io = io

        this.bindEventHandlers();
    }

    bindEventHandlers(){
        this.io.on('connection', function(socket){
            console.log('Player joined the World');

            socket.on('disconnect', function(){
                socket.broadcast.emit('player leave');
                console.log('Player leaves the World');
            });
        });
    }


}

module.exports = World;