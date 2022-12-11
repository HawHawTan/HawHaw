"use strict"

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

function changeName(){
   let name = ["Front-end", "React Native"];
}

function on() {
   document.getElementById("contact").style.opacity = "1";
   document.getElementById("contact").style.zIndex = "1";
   document.getElementById("toggle").checked = false;
 }
 
 function off() {
   document.getElementById("contact").style.opacity = "0";
   document.getElementById("contact").style.zIndex = "-1";
 }

 function knowOrDont_on() {
    document.getElementById("knowOrDont-details").classList.toggle("move-down");
    document.getElementById("knowOrDont").classList.toggle("shrink-img");
    // document.getElementById("overlay").style.zIndex = "1";
 }
 