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
   document.getElementById("overlay").style.opacity = "1";
   document.getElementById("overlay").style.zIndex = "1";
 }
 
 function off() {
   document.getElementById("overlay").style.opacity = "0";
   document.getElementById("overlay").style.zIndex = "-1";
 }

 document.get


 function knowOrDont_on() {
    document.getElementById("knowOrDont-details").classList.toggle("move-down");
    document.getElementById("knowOrDont").classList.toggle("shrink-img");
    // document.getElementById("overlay").style.zIndex = "1";
 }
 