
//'use strict'; ECMAScript5  오직 바닐라js만 쓴다.
//성능 계선
'use strict';
const toggleBtn= document.querySelector('.navbar_toogleBtn');
const menu= document.querySelector('.navbar_menu');
const icons= document.querySelector('.navbar_icon');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');    //active가 있으면 뺴주고 없으면 엑티브 추가
    icons.classList.toggle('active');
})