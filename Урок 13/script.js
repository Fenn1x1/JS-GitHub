/*  Кол-во повторений
+ - от 1 до бесконечности {1,}
? - от 0 до 1 {0,1}
* - от 0 до бесконечности {0,} */

/* let html = `
<b>my text</b>
<img src='222.jpg'>
<span>else.if</span>
<img src='fgt222.png'>
<img src='rdfgd2.png'>
<img src='ewr.gif'>
`;
let exp = /\w+\.(jpg|png|gif|jpeg|bmp)/ig;
document.write(html.match(exp) + "<br>"); */

/* let html = 'Дмитрий Васильев'
let exp = /(Дмитрий) Васильев/
document.write(html.match(exp) + "<br>") */

//document.write("aaa".replace('a','b') + "<br>")
//document.write("aaa".replace(/a/g,'b') + "<br>")

/* let text = "I kill you black dog";
document.write(text + "<br>");
let exp = / (Kill|Die)/ig
text = text.replace(exp, "****");
document.write("<p>"+text+ "</p>") */

/* let str = "John smith";
let re = /(\w+)\s(\w+)/
document.write(str.replace(re, "$2 && $1")) */

/* let text = "red color: #F00 and green : #090";
let exp= /(#[a-f0-9]{3})/ig
text=text.replace(exp,"<span style='color:$1'>$1</span>")
document.write("<p>"+text +"</p>") */


/* let text = "I love yandex.ru";
let exp= /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/i;
text = text.replace(exp,"<a href=' http://$1'>$1</a>")
document.write("<p>"+text +"</p>") */

/* let but = document.querySelector("#but");
but.addEventListener("click", smsUser);
function smsUser(){
    let name = document.getElementsByName("yn")[0].value
    let sms = document.getElementsByName("ym")[0].value
    let regExpBBmail = /([0-9a-z_.]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig
    sms = sms.replace(regExpBBmail, "<span style='color:red'>$1</span>")
    document.write(`
        <fieldset>
        <legend>${name}</legend>
        <div>${sms}</div>
        </fieldset>
    `);
} */

/* let str = "  текст  "
str = str.replace(/^\s+|\s+$/g, "");
alert(">" + str + "<"); */

/* let str = "25-1-2022, 12.03.2022, 30/12/2022"
let re = str.split(/ [-./,]/);
console.log(re) */



/* let num = 123456
console.log(num)
let str = String(num)
console.log(str)
let arr = str.split('')
console.log(arr) */




/* // Объекты

let car = new Object() // Конструктор объекта (объектно-ориентированые)
let car1 = {}; // Литерал объекта */

/* let car = new Object();
car["type"]= "BMW"
car['color']= "white"
console.log(car);
document.write(car["type"] + " " +car['color'] + "<br>")

let car1  = new Object();
car1.type = "BMW";
car1.color = "white";
document.write(car.type + " " + car.color + "<br>") */

/* let menu1 ={}
menu1.width = 300
menu1.height = 200
menu1.title = "Menu"
console.log(menu1);
document.write(menu1.title + ": "+ menu1.width + " x " + menu1.height + "<br>")

let menu = {
    width: 300,
    height: 200,
    title: "Menu"
};
delete menu.width
menu.age=25;
console.log(menu);
// document.write(menu.title + ": "+ menu.width + " x " + menu.height + "<br>")



for(let i in menu){
    document.write("<br>Ключ: " + i + ", Значение: " + menu[i])
} */