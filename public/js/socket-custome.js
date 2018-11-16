     //es el mismo objecto que se crea en el servidor
     // aqui esta toda la configuracion del socket
     var socket = io();
     //conectando al servidor
     socket.on('connect', function() {
         console.log('conectado al servidor')
     });
     // perdida de conexion con servidor
     socket.on('disconnect', function() {
         console.log('conexion perdida con servidor')
     });
     socket.emit('enviarMensaje', {
         usuario: 'Ezequiel',
         mensaje: 'Hola mundo'
     }, function(resp) {
         console.log('respuesta del server ', resp)
     });
     socket.on('enviarMensaje', function(mensaje, callback) {
         console.log('Servidor ', mensaje);
     });