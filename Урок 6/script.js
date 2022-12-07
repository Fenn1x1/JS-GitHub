"use strict"


/* // Методы массива

let js = ['нужно', 'учить', 'JavaScript'];

js.reverse();  // Меняет следования элементов на обратный

document.write(js + "<br>");


let a = js.pop();
document.write(a + "<br>");  // Удаляет последний элемент из массива и возвращает удалённый элемент
document.write(js + "<br>");

js.push("JavaScript", "!");
document.write(js + "<br>");  // Добавляет элемент в конец массива


document.write(js.shift() + "<br>")   // Удаляет первый элемент из массива и возвращает удалённый элемент
document.write(js + "<br>");

js.unshift("Почему", "нужно");
document.write(js + "<br>")   //  Добавляет элемент в начало массива


js.splice(0, 1);
document.write(js + "<br>");   // Удаляет из масива указанное число элементов начиная с заданной позиции (первый параметр), второй параметр указывает количество для удаления


js.splice(0, 2, "Мы","изучаем" );
document.write(js + "<br>")

js.splice(2, 0, "сложный","язык" );
document.write(js + "<br>")

js.splice(-2, 0, "но","очень","интересный" );
document.write(js + "<br>")

let st1 = js.join(" ")
document.write(st1+ "<br>")

console.log(js)
console.log(st1) */


/* let st=['Фамилия','Имя','Отчество']
let fio = new Array(3);

for (let i = 0; i < fio.length; i++){
    fio[i] = prompt("Введите данные:" + st[i]);
}
console.log(fio);

let st2 = fio.join(" ")

document.write(st2) */





//  Работа с функциями

// Function delaration

/* 


function имя (аргументы){
    тело функции;
}



 */


/* function hello(firstname){    // Аргументы
    alert("Hello," + firstname + "!");
}

hello("Паша");   // Параметры
hello("Даня"); */




/* function test(a, b, c) {
    alert(a + b + c);
}

let n1 = 10, n2 = 20, n3 = 30,   m1=5,m2=2,m3=3;
test(n1,n2, n3);
test(m1, m2, m3); */



/* function test(a, b, c) {
    let res = a + b + c;
    return res ;
}

let n1 = 10, n2 = 20, n3 = 30;
let q = test(n1,n2, n3);
alert("Возвращаемое значение: " + q) */


/* let s = 1;
if (s < 5) {
   let s = 5
    // s += i 
   //  document.write(i + " ") 
}
document.write("<br>s= " + s + " ") */



/* function test2(n, m) {
    if(m==0){
        alert("hello")
    return "на 0 делить нельзя"
    
}
//else{  Можно не писать
    return n / m;
//}
}

let a1 = test2(10, 2);
console.log(a1)

let a2 = test2(10,0)
console.log(a2) */





/* 
function showArrayContent(arrayToShow) {
    if (arrayToShow.length == 1) {           // Тут идёт код функции.
        return arrayToShow;
    }
    else {
        let a = arrayToShow.pop();
        let st = arrayToShow.join(", ")
        let b = st + " и " + a;
        arrayToShow.push(a);
        return b;
    }
}
// Определяем массивы.
let a = new Array('Текст');
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лето', 'осень');
alert(showArrayContent(a));             // Выводим содержимое массивов,
alert(showArrayContent(b));            // используя созданную выше функцию.
alert(showArrayContent(c)); */




// Function Expression

/* 
let func = function(Аргументы){
    тело функции
}

*/



/* function sum1(a, b) {
    return a + b;
}


let sum2 = function (a, b) {
    return a + b
}

console.log(sum1(2,3));
console.log(sum2(2,3)); */




let kolkop = function (k) {
    let kop = k;
    if(k>0 && k<=99){
    if (kop >= 11 && kop <= 14) {
        alert(k + " копеек ");
    }
    else {
        kop = kop % 10;
        if(kop == 1){
            alert(k + " копейка ")
        }
        else if(kop>=2 && kop<=4){
            alert(k+ " копейки ")
        }
        else{
            alert(k + " копеек ")
        }
    }
    
    }
    else{
        alert("Вы ввели некорректное значение")
    }2321
}

let a = +prompt("Введите число от 1 до 99");
kolkop(a);