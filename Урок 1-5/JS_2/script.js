"use strict"

// УРОК 1




/* console.log("Третий скрипт"); */

/* let massage; // let, const, var 
massage = "hello"; // Текст всегда в ковычках 
console.log(massage);

let a = 10; //Инициализация
a = 3.5;
console.log(a);

let b, c;
b = "Строка";

a=5;
console.log(a); */
/* let NameNew$ = ""; */
/* const Week = 7; */
/* let a = 10;
console.log(a);
console.log(typeof a);
console.log(typeof (a));
a = 3.5;
console.log(a);
console.log(typeof (a)); */

/* let str1 = "Двойные квычки"
let str2 = 'Одинарные кавычки'
let str3 = `обратные кавычки ${ str1 }
3 + 2 = ${ 3 + 2 }`;
console.log(str1);
console.log(str2);
console.log(str3); */
/* console.log(typeof (str3)); */

/* let firstName ="Daniil"
alert(`Hello, ${firstName}`); */
/* let tri =365;
let earth ="Земля";
let mlrd ="7 млрд";
let sun ="Солнца";
alert(`Мы живем на планете ${earth},она делает один оборот вокруг ${sun} за ${365}. Население нашей
планеты составляет примерно${mlrd} человек`); */
/* let a = true;
console.log(a);
let b = false;
console.log(b)
console.log(typeof (b))

let res = confirm("Ты пукнул");
if (res)(
    alert("Пора занюхнуть")
)
else(
    alert("чё закрыл, стыдно?")
) */

/*
Типы данных:
Number
String
Boolean
Undefind
Null
Object
 */
/* let res;
alert(res); //Undefind */

/* let res = null;
alert(res);
alert(typeof(res)); */
/* res = 5;
alert(res); */
/* let firstName = prompt("Ваше имя:", "Даниил");
console.log(firstName);
alert(`Добро жопаловать на сайт, ${firstName}`) */
/* let a = 12;
let b = 2;
console.log('+:', a + b);
console.log('-:', a - b);
console.log('*:', a * b);
console.log('/:', a / b);
console.log('%:', a / b);
console.log('**:', a ** b);
 */
/* let st1 = "Hello"
let st2 = "World"
console.log(st1 + " " + st2) //Конкатенация строк
let c = 23;
let d = 6;
console.log(c + d); */
/* let login = prompt("login","Admin");
let password = prompt("Password","qwe");
alert ("***Данные для входа ***\nВаш логин:" +login + "\nВаш пароль:" + password);

let st = "\tИнструкция:\nДокумент \"script.js\" файлы лежат \rв папке D:\\programs\\script.js";
alert(st); */
/* alert("6" + 2) */


/* let a =parseInt  (prompt("Введите первое число:","2.5"));
let b = +prompt("Введите второе число:", "2.5");
console.log(typeof(a + b));
a= parseInt(a);
b=+b;
alert("Сумма:" + (a + b)); */


/* console.log(parseInt("21.84"));
console.log(parseFloat("21.84"));
console.log(parseFloat("21.84323").toFixed(3));
console.log(Number("21.84"));
console.log(-2*"21.84");
console.log(+true);
console.log(+false); */

/* let a = parseInt(prompt("Любое число: ", 4));

alert("Квадрат: " + a ** 2+ "\nКуб: " + a ** 3 + "\nВ четвёртой: " + a ** 4); */

/* let num = +prompt("Введите пятизначное число:", "39671");
let n = num;
let a, b, c, d, e;
a = num % 10;  // 5
console.log(a);
num = parseInt(num / 10);  // 1234
// console.log(num);
b = num % 10;  // 4
console.log(b);
num = parseInt(num / 10);
// console.log(num);
c = num % 10;
console.log(c);
num = parseInt(num / 10);
// console.log(num);
d = num % 10;
console.log(d);
num = parseInt(num / 10);
// console.log(num);
e = num % 10;
console.log(e);
let proizv = a * b * c * d * e;
let averange = (a + b + c + d + e) / 5
alert("Произведение цифр " + n + ": " + proizv + "\nСреднее арифметическое: " + averange); */

/* let a = 0, b = 0;
++a; //a = a + 1
console.log(a); // 1
b++;
console.log(b) //1 */

/* let a = 0, b = 0;
let c = a++ + 2;
let d = ++b + 2;
console.log(a); // 1
console.log(b); // 1
console.log(c); // 2
console.log(d); // 3
*/
/* let a = 1;
let b = ++a;
console.log(b)
let c = b + 5 + a; // 2 + 5 + 1
console.log(c); //9 */

/* let sum = +prompt("Введите первое число:", 5);
console.log(sum);
sum += +prompt("Введите второе число", 4);
console.log(sum);
sum += +prompt("Введите третье число:",6);
console.log(sum) */

/* let st ="строка";
st = "Добавленная строка";
console.log(st) */

/* console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 == `5`);
console.log(5 != 3);
console.log(5 === 5); */

/*  3 > 7  ? alert("7") : alert("3") */

/* let ch = +prompt("Угадай число от 1 до 10");
//ch == 7 ? alert("Угадали") : alert("Не угадали")
let num =7;
ch ==num ? alert("Угадали") : ch < num ? alert("Больше") : alert("Число меньше") */

//Операторы логического ветвления
/*

if(Условие){
    истина
}

else{
    ложь (false)
}

*/

/* if(3 > 7){
    alert("7")
}
else(
    alert("3")
) */

//alert(+false);

// false - 0, false
/* let a = ""
if (a) {
    alert(true);
} */

/* let a = 12;
let b = 6;
if (b != 0) {
    let res = a / b
    alert("Результат" + res)
}
else{
    alert("Делить на 0 нельзя!")
} */

/* let a = 12;
let b = 12;
if (a > b) {
    alert(a + ">" + b)
}
if(a < b) {
    alert(a + "<" + b)
}
if(a == b) {
    alert(a + "=" + b)
} */


/* let a = prompt("Введите день недели(Цифрами: ");
if(a == 1){
    alert("День недели - Понедельник");
}
else if(a == 2){
    alert("День недели - Вторник");
}
else if(a == 3){
    alert("День недели - Среда");
}
else if(a == 4){
    alert("День недели - Четверг");
}
else if(a == 5){
    alert("День недели - Пятница");
}
else if(a == 6){
    alert("День недели - Суббота");
}
else if(a == 7){
    alert("День недели - Воскресенье");
}
else{
    alert("Такого дня недели не существует")
} */

/* if (5  && 5 > 7){
    console.log("True");
}
else{
    console.log("False");
} */


/* let age = prompt("Возраст");
if(age >= 18 && age < 70){
    alert("Вы можете получать права")
}
else{
    alert("Вы не можете получить права")
}
 */

/* let age = prompt("Возраст:");
if(age < 18 || age > 69){
    alert("Вы можете получать права")
}
else{
    alert("Вы не можете получить права")
} */
/* let age = prompt("Введите возраст");
if(age < 18 || age > 69){
    alert("Права не давать")
}
else{
alert("Вы можете получить права")
} */

// Конструктор выбора switch


/* 


    Switch(Условие){
        case значение_1;
            Код;
            Break;


        case значение_2;
            Код;
            Break; 
        default:
            код;

*/


/* let a = +prompt("Введите число:");
switch(a){ // a === 1
    case 1:{
        alert("Код 1");
    }break
    case 2:{
        alert("Код 2");
    }break
    case 3:{
        alert("Код 3");
    }break
    default:{
        alert("Я таких значений не знаю");
    }11
} */


/* let a = +prompt("Введите результат `2 + 2`");
switch(a){ // a === 1
    case 4:
        alert("Верно");
    break
    case 3:
    case 5:
        alert("Не верно");
        break;
    default:
        alert("Я таких значений не знаю");
} */


/* let m = +prompt("Введите номер месяца:");
let n = null;
switch (m) {
    case 1: n = "Январь."; break;
    case 2: n = "Февраль."; break;
    case 3: n = "Март."; break;
    case 4: n = "Апрель."; break;
    case 5: n = "Март."; break;
    case 6: n = "Июнь."; break;
    case 7: n = "Июль."; break;
    case 8: n = "Август."; break;
    case 9: n = "Сентябрь."; break;
    case 10: n = "Октябрь."; break;
    case 11: n = "Ноябрь."; break;
    case 12: n = "Декабрь."; break;
}
alert("Это " + n); */

//  То что можно использовать     +, -, *, /, % .
/* let operator = prompt("Действие: +, -, *, /, %");
let num1 = parseInt(prompt("Введите первое число"));
let num2 = parseInt(prompt("Введите второе число"));

switch (operator) {
    case "+":
        alert("Сумма " + (num1 + num2));
        break;
    case "-":
        alert("Сумма " + (num1 - num2));
        break;
    case "*":
        alert("Сумма " + (num1 * num2));
        break;
    case "/":
        alert("Сумма " + (num1 / num2));
        break;
    case "%":
        alert("Сумма " + (num1 % num2));
        break;
        default:{
            alert("Я таких значений не знаю(")
        }
} */


// Текст и картинки в JS
/* document.write("<P>Текст выведен <u>в окно браузера</u></p>")
document.write("<p> <img src=1.jpg> </p>") */


// Циклы
// Цикл do ... while (Цикл с постусловием)

/* 
    do{
        Тело цикла;
    }while(Условие);
    */


/* let i = 0;  // счётчик
do {
    document.write("Это номер: " + i + "<br>");
    i++; // i = i + 1

} while (i < 5); */

// Интерация - шаг цикла

/* let i = 1;
do {
    document.write("Квадрат " + ++i + "Равен" + i** 2 + "<br>");
        i++;

} while (i < 8); */

// Цикл while (цикл с предусловием)

/* 

    while(Условие){
        Тело цикла;
    }

*/

// Написать программу, выводящую чётные числа в диапазоне от 1 до 20 (Включительно)

/* let i = 1;
while (i <= 30) {
    if (i % 3 == 0) {
        document.write(i + " ");
    }

    i++;
} */

/* let start = 5;
let end = 10;
let i = start;
let sum = 0;
while (start <= end) {
    document.write(i + " ");
    sum += start
    i++;
}
document.write("<br>" + sum); */

/* let i = 3;
while(i != 0 ){  // i > 0    !|!     i != 0
    document.write(i + "<br>");
    i--;
} */


/* let a, res = 1;
do{
    a = +prompt("Введите число:", 10)
    if(a<=0){
        break;
    }
    res *= a;
}while(true);
alert("Сумма введённых чисел: " + res); */


/* let i = 0;
do {
    if(i==3){
        i++;
        continue;
    }
    if(i==6){
        break;
    }
    document.write(i + " ")
    i++
} while(i<10) */


// Написать программу , вычисляющую произведение нечётных чисел в диапазоне от 10 до 30

// пользователь вводит с клавиатуры любое количество чисел (чётные и нечётные) найти их среднее арифметическое значение | Условие выхода 0.



/*

For(иницилизация_переменной; проверка_условия; изменения_счётчика){
    тело цикла;
}

*/



/* for (let i = 1; i < 6; i++) {
    document.write(i + " ")
} */



/* for (let i = 1; i < 6; i++) {
    if(i==3){
        continue;
    }
    if(i==5){
    break;
    }
    document.write(i + " ")
} */



/* let start = +prompt();
let end = +prompt();
let sum = 0;
let p = 1;
for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
    else {
        p *= i;
    }

}
document.write(" Сумма чётных чисел в диапазоне от " + start + " до " + end + " = " + sum + "<br>");
document.write(" Произведение  нечётных чисел в диапазоне от " + start + " до " + end + " = " + p + "<br>"); */

/* let i = 1;
for ( ; ;) {
    if(i==6){
        break;
    }
    document.write(i + " ");
    i++;
} */

/* let ch = 132;
let num;
let sum = 0;
let p = 1;
let count = 0;
for (let i = 1; ; i *= 10) { // 10000
    let res = parseInt(ch / i); //12345  res = 1
    if (res == 0) {
        break;
    }
     document.write(res % 10); // 54321 
    num = res%10
    sum += num;
    p *= num;
    count++;
}
document.write("Сумма "+ sum + " <br> ");
document.write("Произведение: " + p + " <br>");
document.write("Колличество: " + count + " <br>");
document.write("Среднее: " + (sum / count).toFixed(2) + " <br>");  */


/* for (let i = 0; i < 4; i++) {
    document.write("+++ <br>");
    for (let j = 0; j < 2; j++){
        document.write("-- <br>")
    }

} */



/* for (let i = 0; i < 4; i++) {
    document.write(i + "<br>");
    for (let j = 0; j < 2; j++){
        document.write("&nbsp;&nbsp;&nbsp;&nbsp; =>" +j + "<br>")
    }

} */




// ПРИМЕР
/* 

<table border=`1`>
<tr>
    <td>*</td>
    <td>*</td>
    <td>*</td>
</tr>
<tr>
    <td>*</td>
    <td>*</td>
    <td>*</td>
</tr>

</table>

*/



/* // ТАБЛИЦА
let width =prompt("Введите ширину(в ячейках): ")
let height =prompt("Введите высоту(в ячейках):")
let symbol = prompt("Введите символ: ")
document.write(" <table border=`1`>");
for (let i = 0; i < height; i++) {
    document.write("<tr>")
    for (let j = 0; j < width2; j++){
        document.write("<td>" + symbol + "</td>");
    }
        document.write("</tr>")
}
document.write("</table> "); */



/* // ТАБЛИЦА УМНОЖЕНИЯ И ДЗ
document.write(" <table border='1' align='center' width='300' height='300'>");
for (let i = 1; i < 11; i++) {
    document.write("<tr align='center'>")
    for (let j = 1; j < 11; j++) {
        if (j % 2 == 0) {
            document.write("<td bgcolor='red'>" + i * j + "</td>");
        }
        else {
            document.write("<td bgcolor='yellow'>" + i * j + "</td>");
        }
    }
    document.write("</tr>")
}
document.write("</table> "); */


// Массивы


/* let arr = [2, 3, 4, 5, 6];
console.log(arr);
document.write(arr[1]) */


/* let arr = [2, 3, 4, 5, 6];   // массив на 5 элементов со значениями
let arr1 =[2]    // массив на 1 элемент со значением 2

let arr2 = new Array(2, 3, 4, 5, 6);   // массив на 5 элементов со значениями
let arr3 = new Array(2) // массив на 5 элементов , но пустой


console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3); */


/* let arr = [2, 3, 4, 5, 6];
document.write(arr + "<br>");
document.write(arr.length + "<br>");
arr.length = 3
document.write(arr + "<br>");
arr.length = 6
document.write(arr + "<br>");
arr.length = 0
document.write("Пустой массив" + arr + "<br>"); */


//  ЗАПОМНИТЬ!!!!!!!!!!!!!!!!!!!!!!!

// length = последний индекс массива + 1
// последний индекс массива = length - 1


// Заменить все отриц значения элементов массива их модулями
// Посчитать в массиве сумму всех отрицательных элементов
/* let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6,];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        // arr[i]= arr[i]*(-1)
        sum += arr[i]
        document.write(arr[i] + " <br>")
    }
    
}

console.table(arr); */




/* let mas = new Array();  // ИЛИ   let mas = []
mas[0] = 15;
mas[1] = 6;
mas[2] = 9;
mas[6] = 10;
mas[3] = 1;

document.write(mas + " <br>")
console.log(mas);
 */


/* // ЗАДОМ НАПЕРЁД
let mas = new Array(5);
for (let i = 0; i < mas.length; i++) {
    mas[i] = prompt("Введите " + (i + 1) + " элемент массива:")
}
document.write(mas + " <br>")
for (let i = mas.length - 1; i >= 0; i--){
    document.write(mas[i]+ " ");
} */






// УРОК 5

/* let arr =[2,6,7, "Ваня", 1.5,true];
console.table(arr) */


/* let mas = [[2,1,1],[6,3,7],[8,5,6]];
console.table(mas);
console.log(mas)
document.write(mas[0][0]) // Выведет 2
 */



/* let vopros = ["На ноль делить можно?", "RTX 2060 лучше чем RTX 4090?", "Арбуз это фрукт?", "Дельфин это рыба?", "Меня зовут Иван?", "Моргенштерн иноагент?", "Last One последний альбом Моргенштерна?"];

let prav_otvet = [false, false, false, false, true, true, true]

let res = new Array();
let sum = 0;

for (let i = 0; i < vopros.length; i++) {
    let otvet = confirm(vopros[i]);
    if (otvet == prav_otvet[i]) {
        res[i] = 10;
        sum += res[i];
    }
    else {
        res[i] = 0;
    }
}
//document.write(res + "<br>");
//document.write(sum); 

document.write("<table border = '1' width='500'> ");
document.write("<tr>");
document.write("<th>Вопрос</th>");
document.write("<th>Баллы</th>");
document.write("</tr>");

for(let i=0; i<vopros.length;i++){
    document.write("<tr>")
    document.write("<td>" + vopros[i]+ "</td>")
    document.write("<td>" + res[i]+ "</td>")
    document.write("</tr>")
}

document.write("<tr>");
document.write("<th>Итого</th>");
document.write("<th>" + sum + "</th>");
document.write("</tr>");
document.write("</table>");
 */


/* let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent);

text1.textContent = "Новое <b>значение</b>";  // Не обрабатывает теги HTML


let text2 = document.getElementById("text_2");
text2.innerHTML = "Новое <b>содержимое</b>";   // Обрабатывает теги HTML */






/* let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
document.write("<div id='image'></div>")
let img =document.getElementById("image")

switch(res){
    case 1:
        img.innerHTML = "<img src='img/dog.jpg'>";
        break
    case 2:
        img.innerHTML = "<img src='img/cat.jpg'>";
        break
    case 3:
        img.innerHTML = "<img src='img/bird.jpeg'>";
        break
    case 4:
        img.innerHTML = "<img src='img/fish.jpeg'>";
        break
        default:
            alert("Такого изображения нет!")
} */





/* let tag = document.getElementsByTagName("p")[2];   // или так tag[2].innerHTML="Hello tag"
console.log(tag);
tag.innerHTML = "Hello tag"
tag.style.color = "blue"
tag.style.fontWeight = "bold"
tag.style.background = "Silver"
tag.style.padding = "10px 20px 20px"


// list-style-type ==> ListStyleType

tag.id ="test";
tag.className ="x"; */



/* let q =  document.getElementsByClassName("a");
console.log(q)
q[1].style.color = "red" */



/* let w = document.querySelector("#text_1");
console.log(w);
let r = document.querySelectorAll("#text_1");
console.log(r); */


/* let w = document.querySelector(".a");
console.log(w);
let r = document.querySelectorAll(".a");
console.log(r);
r[1].style.color="red";
 */


/* let el = document.querySelectorAll("li");
//  alert(el.length)

for(let i=0;i<el.length;i++){
    el[i].innerHTML += " !!!Фрукты"
}
let purple = document.querySelectorAll(".purple li");
for(let i = 0 ; i< purple.length; i++){
    purple[i].style.color   ='purple';
    purple[i].innerHTML += "???";
}

let red = document.querySelectorAll(".red li")[1];

red.style.color = 'red'; */