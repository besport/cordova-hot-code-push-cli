(function(){
var mio = window.io; // Moving it to private namespace
delete window.io;

document.addEventListener("DOMContentLoaded", function(event) {
  var socket = mio();
  console.log('Mio: ', mio);
  socket.on('release', function(data){
    console.log('New release: ', data);
    window.chcp.fetchUpdate(data.config, function(err, resp) {
      if(err) {
        return console.error('An error occured with chcp.fetchUpdate: ', err);
      }
      console.log('fetchUpdate successful: ', resp);
      window.chcp.installUpdate(function(err){
        if(err) {
          return console.error('An error occured with chcp.installUpdate: ', err);
        }
      });
    });
  });
});
})();