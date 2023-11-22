document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("form").addEventListener('submit', validarFormulario); 
 });
 
 function validarFormulario(evento) {
   evento.preventDefault();
   var usuario = document.getElementById('name').value;
   if(name.length == 0) {
     alert('El campo está vacío');
     return;
   }
   var usuario = document.getElementById('usuario').value;
   if(usuario.length == 0) {
     alert('El campo está vacío');
     return;
   }
   var clave = document.getElementById('password').value;
   if (clave.length < 6) {
     alert('La clave no es válida');
     return;
   }
   this.submit();
 }