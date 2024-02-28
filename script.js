let  nclicks = 0;
const imagen= document.querySelector(".imagen");
const intruso = document.querySelector( "#intruso");
const click= document.querySelector(".click")
const alerta=document.querySelector(".alerta")
const alertaMensaje=document.querySelector(".alerta-mensaje")


intruso.style.backgroundColor = "rgba(0,0,0,0)";


intruso.addEventListener( "click", function () {
    imagen.style.border = "10px solid green";
    imagen.style.borderRadius = "5%";
    imagen.style.backgroundColor = "green";
    alerta.style.display = "flex";
    
    
    if (nclicks == 1) {
        alertaMensaje.textContent ="eres un crack, encontraste al impostor";
        
    } else if (click < 11)  {
        alertaMensaje.textContent=`buen trabajo, encontraste al impostor despues de ${nclicks}`;
    } else {
        alertaMensaje.textContent="eres un ciego, pero igual lo lograste"
    }
})

imagen.addEventListener("click", function() {
   nclicks = nclicks + 1;  
   if (nclicks == 1) {
   click.style.color="green";
   } else if (click < 11)  {
   click.style.color="yellon";
   } else {
    click.style.color="red";
       
   }

   click.textContent = `clicks: ${nclicks}`;
})
  
function recargar(){
    location.reload()
}
    
