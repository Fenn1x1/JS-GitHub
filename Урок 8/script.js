"use strict"
/* let st = "I\'m a JavaScript \"programmer\"";
let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
st = st.concat(st2);
document.write(st + "<br>");

// document.write(st.indexof("JavaScript") + "<br>")  Возвращает индекс на котором находится подстрока или "-1" , если ничего не найдено

document.write(st.slice(0, 3)+ "<br>")  //возвращает подстроку начиная с начальной позиции до конечной (не включая её)

document.write(st.slice(6) + "<br>") 
document.write(st.slice(-23) + "<br>")

document.write(st.substring(0, 3)+ "<br>") // Возвращает подстроку начиная с начальной позиции жо конечной позиции (не включая её)

document.write(st.substring(-23)+ "<br>") // отрицательный индекс будет браться как значение 0

let a = st.split("JavaScript");
console.log(a);
document.write(a.join("C++")); */


/* let style = prompt("Введите свойство CSS", "background-color");
alert(def(style));

function def(str) {
    let arr = str.split("-")  // arr = ['background' , 'color']
    for(let i =1; i< arr.length; i++){
        arr[i] = arr[i][0].toUpperCase()  + arr[i].slice(1)  ;       
    }
    return arr.join('');
} */



// События


/* function loadStr(){
    alert("Страница была загружена")
} */


/* let m = document.getElementById("mes");

function over(){
m.style.color = 'red'
}

function out(){
    m.style.color = 'black'
    }

    function change(){
        let id = document.getElementById('h');
        id.style.color='blue'
    } */


/*  function randomBg() {
     let r = Math.floor(Math.random() * 256);
     let b = Math.floor(Math.random() * 256);
     let g = Math.floor(Math.random() * 256);
     document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
 } */

/*  let nb = document.getElementById('ni');
 function on(){
     ni.src = 'night.png';
 }
 function off(){
     ni.src = 'day.png';
 } */


/* function a (id){
    id.innerHTML = "нет, два"
}
function b (id){
    id.innerHTML = "нет, три"
}
function c (id){
    id.innerHTML = "нет, четыре"
} */


/* function setColor(color){
    document.body.style.background = color.className;
} */


/* let q = document.getElementById("but"); */

/* q.onclick = function(){
    alert("Забайтил марионетку")
} */

/* function hello(){
    alert("Спасибо")
}

but.onclick = hello; */

/* let el = document.querySelector("#elem");

el.addEventListener('click', function(){
    el.innerHTML = "new text";
});

el.addEventListener("contextmenu", function(){
    el.style.color = 'green'
    el.style.background = 'yellow'
}) */

/* let c = document.querySelector("#ev");

document.addEventListener('mousemove', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    c.textContent = "X = " + x + ", Y = " + y;

    c.addEventListener('dblclick', function(event){
        event.target.style.background = 'red'
    })
}) */

/* let input = document.querySelector('#but');
input.addEventListener('click', handle);

function handle(){
    alert("Спасибо")
    input.removeEventListener('click', handle);
}

// setTimeout(Функция, задержка);

// setTimeout("", 3000) 


setTimeout(hello, 3000)

function hello(){
    alert('Текст')
} */





document.write("<div id ='dt'>Анимация текста</div>")

let txt = document.querySelector("#dt").innerHTML;

let i = 0;

window, addEventListener('load', animText);

function animText() {
    let tag = document.querySelector("#dt")
    tag.innerHTML = txt.substring(0, i);
    i++;
    if (i > txt.length) {
        i = 0
    }
    setTimeout(animText, 100)
}