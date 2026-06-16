// icon
lucide.createIcons();


// menu hp

const btn =
document.getElementById("mobile-menu-btn");

const menu =
document.getElementById("mobile-menu");


if(btn){

btn.onclick=function(){

menu.classList.toggle("hidden");

}

}


// slider

const slides =
document.querySelectorAll(".hero-slide");


let current=0;


function goTo(i){

slides[current]
.classList.remove("active");


current=i;


slides[current]
.classList.add("active");

}



setInterval(()=>{

goTo(
(current+1)%slides.length
);

},5000);





// animasi scroll

const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(item=>{


if(item.isIntersecting){


item.target.classList.add("visible");


}


});


});


document
.querySelectorAll(".fade-in")
.forEach(el=>{

observer.observe(el);

});





// form

const form =
document.getElementById("contact-form");


if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();


alert(
"Pesan berhasil dikirim!"
);


}

);


}