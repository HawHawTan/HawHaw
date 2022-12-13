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

function closeHamburger(){
   document.getElementById("toggle").checked = false;
}

function on() {
   let contact = document.getElementById("contact")
   document.getElementById("toggle").checked = false;
   contact.style.opacity = "1";
   contact.style.zIndex = "1";

   contact.style.animation = 'none';
   contact.offsetHeight; /* trigger reflow */
   contact.style.animation = null; 
 }
 
 function off() {
   let contact = document.getElementById("contact");
   contact.style.transition = "all 1s ease-in-out";
   contact.style.opacity = "0";
   contact.style.zIndex = "-1";
 

 }

 function knowOrDont_on() {
    document.getElementById("knowOrDont-details").classList.toggle("move-down");
    document.getElementById("knowOrDont").classList.toggle("shrink-img");
    // document.getElementById("overlay").style.zIndex = "1";
 }
 