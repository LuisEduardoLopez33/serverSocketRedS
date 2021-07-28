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

            client.on('publicacion',(nombre, publicacion, imagen) =>{
                console.log(nombre + publicacion + imagen);
                this.io.emit('publicaciones', {nombre, publicacion, imagen});
            })

        });


    }

}

module.exports = Sockets;