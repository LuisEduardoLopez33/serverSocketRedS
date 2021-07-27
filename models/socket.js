class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', client => {
            console.log('se ha conectado un nuevo usuario');
            client.on('msj-input-server', (data) => {
                console.log(data);

                this.io.emit('msj-output-client', data);
            })

        });
    }

}

module.exports = Sockets;