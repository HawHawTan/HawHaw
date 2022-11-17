const observer = new IntersectionObserver((lists) =>{
    lists.forEach((list) => {
     console.log(list);
     if(list.isIntersecting){
        list.target.classList.add('show');
     } else{
        list.target.classList.remove('show');
     }
    });
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

function on() {
   // document.getElementById("overlay").style.left = "0";
   // document.getElementById("overlay").style.bottom = "0";
   document.getElementById("overlay").style.opacity = "1";
   document.getElementById("overlay").style.zIndex = "1";
 }
 
 function off() {
   document.getElementById("overlay").style.opacity = "0";
   document.getElementById("overlay").style.zIndex = "-1";
   // document.getElementById("overlay").style.zIndex = "none";
   // document.getElementById("overlay").style.zIndex = "unset";
   // document.getElementById("overlay").style.left = "100%";
   // document.getElementById("overlay").style.bottom = "100%";
   // document.getElementById("overlay").style.animation = "reverse-pop-contact 1s ease-in-out";
   // document.getElementById("overlay").style.transform = "scale(0)";

 }