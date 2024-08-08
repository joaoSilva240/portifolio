const button = document.getElementById('habilidades');
const Info = document.querySelector(".acordeon")
Info.style.display="none"
button.addEventListener('click',function(){
   if(Info.style.display=="none"){
    Info.style.display="flex"
   }
   else if(Info.style.display=="flex"){
    Info.style.display="none"
   }
})