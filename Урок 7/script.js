"use strict";
// Immediately Invoked Function Expression (IIFE)  -  Анонимная (Самовызывающаяся) функция

/* (function(){
    alert("Привет мир")
}());

let a =function(n){
    return(n*n)
};

alert(a(4));
 */


// Arrow Function - стрелочные функця
/* function test(a, b, c) {
    let res = a + b + c;
    return res;
}
console.log(test(10, 20, 30));

let test2 = (a, b, c) => a + b + c
console.log(test2(10, 20, 30));

let test3 = (a, b, c) => {
    let res = a + b + c;
    return res;
}

console.log(test3(10,20,30))

let hello = n => alert("Hello," + n);

hello("Daniil")

Math */


/* document.write(Math.round(7.5) + "<br>")
document.write(Math.floor(7.9) + "<br>")
document.write(Math.ceil(7.5) + "<br>") */

/* (function(){
    document.write(Math.random() + "<br>");  // от 0 до 1 (не включительно)
}());

(function(min, max){
    document.write(Math.floor(Math.random() * (max - min) + min) + "<br>");  
}(2, 9));  // от 2 до 9 (не включительно)

document.write(Math.floor(Math.random() * 15) + "<br>"); // от 0 до 15 (не включительно)

document.write(Math.floor(Math.random() * 7 + 2) + "<br>");  // от 2 до 9 (не включительно)

document.write(Math.floor(Math.random() * 8 + 7) + "<br>");  // от 2 до 9 (не включительно) */


/* let fn = function(words){
    // let b = Math.floor(Math.random()* words.length)
   //console.log(b); 
    return words[Math.floor(Math.random()* words.length)];
}

let mas =['Цикл','Массив','Условие','Функция'];
let a = fn(mas);
document.write(a); */

/* let a = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
let mas = ["blue", " black", "orange", "red","gold","violet","yellow"];
let b = a(mas);
document.write("<div id = 'block'></div>");
let id = document.getElementById("block");
id.style.width = "200px";
id.style.height = "200px";
id.style.background = b; */




/* document.write ("<div id='block'></div>");
let id = document.getElementById("block");

id.style.width ='200px'
id.style.height ='200px'
createcolor();

function createcolor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    id.style.background = 'rgb(' + r + ','+g+',' + b+ ')';
} */


/* document.write("<div id='block'></div>");
let id = document.getElementById("block");
id.style.width = '100px';
id.style.height = '100px';
id.style.background = 'rgb('+ createColor() +', '+ createColor() +', ' + createColor() + ')';;
function createColor(){
    return Math.floor(Math.random() * 256);
} */


/* function hello(name="пользователь"){
  //name = name || "пользователь"
    document.write("Привет," + name + "!<br>");
}

hello("Конон")
hello() */



/* function square(width=120, height=100, background='green') {
    document.write("<div id='shape'</div>");
    let sq = document.querySelector("#shape");

    sq.style.width = width + "px";
    sq.style.height = height + "px" ;
    sq.style.background = background;
} 
square(200, 150, 'gold');
square(300, 50);
square('red'); */


/* //function hello(){
//   alert("Привет")
//}
//alert(hello) 

//let st = "I\'m a JavaScript \"Programmer\"";

document.write(st + "<br>");
//document.write(st[2] + "<br>");

// st[2]='y'; 
//st = st[2] + 'y'
//document.write(st + "<br>") 


document.write(st.length + "<br>");

// Методы строк
document.write(st.toUpperCase() + "<br>");
document.write(st.toLowerCase() + "<br>")

let n = prompt("Введите имя", "Даниил")
alert(first(n));


function first(str) {
   let newStr = str[0].toUpperCase();
   for (let i =1; i < str.length; i++)
   newStr += str[i].toLowerCase();
       return newStr;
} */


/* let st = "I\'m a JavaScript \"Programmer\"";

let st2 = "Я учу JavaScript. Я его не понимаю.";

st = st.concat(st2);
document.write(st + "<br>")

document.write(st.indexOf("JavaScript") + "<br>")  // Возвращ индекс на котором находится подстрока или "-1" , если ничего не найдено
document.write(st.indexOf("JavaScript", 7) + "<br>")
document.write(st.lastIndexOf("JavaScript") + "<br>")

let email;
do {
    email = prompt("Введите почту");
    if (email.indexOf("@") == -1) {
        alert("Некорректная почта! Проверьте правильность ввода.")
    }
    else {
        break
    }
} while (true); */


let st2 = "Я учу JavaScript. Я его не понимаю.";

st = st.concat(st2);
document.write(st + "<br>")

document.write(st.split(".") + "<br>");
console.log(st)
console.log(st.split(' '));