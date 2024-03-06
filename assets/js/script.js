
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let title = document.getElementById('title');


window.addEventListener('scroll' ,function(){
   var value = window.scrollY ;
   moon.style.left = -value * 0.5 + 'px';
   mountain.style.top = -value *0.15 + 'px';
   road.style.top = value *0.15 + 'px';
   title.style.top = value + 'px';
} )