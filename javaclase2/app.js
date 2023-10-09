document.addEventListener("DOMContentLoaded", function(){
    
const cuerpo=document.body;


for(let i=1; i<=35;i++) {
    const parrafo= document.createElement("p");
    parrafo.textContent=i;
    cuerpo.appendChild(parrafo);
}
});