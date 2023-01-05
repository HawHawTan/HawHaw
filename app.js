"use strict"

// study this
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
hidden.forEach((element) => observer.observe(element));

function check(){
   let toggle = document.getElementById("toggle").checked;
   document.getElementById("header").style.zIndex = "1";
   if(!toggle){
      document.getElementById("header").style.zIndex = "0";
   }
}


function closeHamburger(){
   document.getElementById("toggle").checked = false;
   document.getElementById("header").style.zIndex = "0";
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
 
 function close_contact() {
   let contact = document.getElementById("contact");
   contact.style.transition = "all 1s ease-in-out";
   contact.style.opacity = "0";
   contact.style.zIndex = "-1";
   document.getElementById("header").style.zIndex = "0";
 }

 function knowOrDont_on() {
    document.getElementById("card_content").classList.toggle("card_turn");
 }

