let pagPrincipal = 0;
//Para seleccionar todos los elementos con las misma clase querySelectorAll('')
let pages = document.querySelectorAll ('.form-page');
//Para seleccionar elementos por un unico id querySelector('')
let botonSig = document.querySelector ('#botonSig');
let botonAnt = document.querySelector ('#botonAnt');
// Función para avanzar o retroceder, recibe 1 (avanzar) o -1 (retroceder)
function mostrarPagina (action){
/////////// Página a mostrar según el valor recibido
      pagPrincipal += action;
////////// establecer un requisito para que solo avance hasta la ultima pagina
      if(pagPrincipal < 0){
        pagPrincipal = 0;}
      if (pagPrincipal >= pages.length){ 
        pagPrincipal = pages.length - 1;
      }
/////////////Requisito para mostrar u ocultar las paginas
      pages.forEach((page, index) => {
        if(index == pagPrincipal) {
// En JavaScript, el atributo classList representa la lista de clases CSS de un elemento HTML. Este atributo está disponible en la mayoría de los navegadores modernos, excepto en Internet Explorer 9 y versiones anteriores.
// La propiedad classList tiene métodos como add, remove y toggle que facilitan la manipulación de las clases de un elemento HTML.
//////////////para que se muestre la pagina
      page.classList.add('active');
        } else {
///////////// Para que las demás se oculten
          page.classList.remove('active');
      }
      });
///////Habilitar o deshabilitar botones
      botonSig.disabled = (pagPrincipal == 0);
      botonAnt.disabled = (pagPrincipal == pages.length - 1);
};
botonSig.addEventListener('click', e => mostrarPagina(-1));
botonAnt.addEventListener('click', e => mostrarPagina(1));



////////////////////funcion tabs//////////
const tabLinks= document.querySelectorAll('.tab-link');
const tabPanes= document.querySelectorAll('.tab-pane');


tabLinks.forEach(
  function(link,index){

    link.addEventListener('click',function(){
      tabPanes.forEach(function(pane,indice){
        pane.style.display='none';
      });
      tabPanes[index].style.display='block';
    })
    
  }
);

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
//////////////////////////////////////////////////////////////
function generarQR() {
  var color = document.getElementById("color").value;
  var size = document.getElementById("size").value;
  var extension = document.getElementById("extension").value;

  var qrcode = new QRCode("qrcode", {
      text: color + ',' + size + ',' + extension,
      width: 128,
      height: 128,
  });
}