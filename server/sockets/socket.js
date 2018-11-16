const { io } = require('../server')
    //las conexion que llegan del cliente
io.on('connection', (client) => {
    console.log('usuario conectado');
    client.on('enviarMensaje', (mensaje) => {
        console.log(mensaje);
    });
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'bienvenidos a esta aplicacion'
    }, function(resp) {
        console.log('respuesta->', resp)
    });
    // cliente desconectado
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log('data ', data)
        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
             callback({
                 resp: 'todo salio bien',

             });

         } else {
             callback({
                 resp: 'todo salio Mal !',

             });
         }*/
    })
});