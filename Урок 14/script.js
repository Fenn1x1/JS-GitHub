/* let menu = {
    width:300,
    height:200,
    title: "Menu"
}
let counter =0;
for(let key in menu){
    document.write("<br>Ключ:" + key + ", значение:" + menu[key]);
    counter++;
}
document.write("<br>Всего свойств" + counter + "<br>")
document.write("<br>Имена ключей: " + Object.keys(menu) + "<br>");

document.write("<br>Всего ключей: " + Object.keys(menu).length + "<br>");

Object.keys(menu).forEach(function(key){
    document.write("<br>" + key + ": " + menu[key]);
})
 */

/* let car = {
    name: "Volvo",
    year: 2013
};
console.log(car); */

/* let obj = {
    name: "Гомер",
    colors: {
        first: "yellow",
        second: "blue"
    },
    color: [
        "Black",
        "white",
        "red",
        "blue"
    ],
    hello: function () {
        document.write("Привет");
    }
} */
/* document.write(obj.name +" "+ obj.color[1]+" " + obj.colors.first + "<br>")
obj.hello(); */

/* let fil = obj.color.filter(function (elem) {
    return elem.length < 5;
})
document.write("<br>" + fil + "<br>")

let mas = obj.color.map(function(elem){
    return "color:" + elem + "<br>"
})
document.write("<br>" + mas + "<br>")

let mas1 = obj.color.map(elem => elem.toUpperCase())
document.write("<br>" + mas1 + "<br>")


let mas2 = obj.color.map(function(elem, index, all){
    return elem + " " + index +"Массив:"+ all + "<br>"
})
document.write("<br>" + mas + "<br>"); */

/* let obj = {
    name: "Гомер",
    colors: {
        first: "yellow",
        second: "blue"
    },
    color: [
        "Black",
        "white",
        "red",
        "blue"
    ],
    hello: function () {
        document.write("Привет");
    }
}

let mas = Object.keys(obj.colors).map(function(elem){
    return elem + ": " + obj.colors[elem] + "<br>"
})
document.write("<br>" + mas + "<br>") */

/* let calc ={
    num1:5,
    num2:5,
    computer: function(){
        this.result = this.num1 * this.num2;
    }
}

calc.computer();
document.write(calc.result); */


/* let x = 15, y = 10
let coords = {
    x: x,  // Свойство (ключ)
    y:y,
    calc: function(){  // Метод
        document.write(this.x * this.y);
    }
}

coords.calc(); // метод */

/* let x = 15, y = 10

let coords = { x,y,
    calc(){  
        document.write(this.x * this.y);
    }
}

coords.calc(); */

// Деструктуризация

/* let user = {
    login: {
        firstName: 'Ivan',
        lastName: 'Fenya'
    },
    passw: 'qwerty',
    role:'guest'
}

let a = user.login
document.write(a + "<br>")
let {login, passw, role} = user;
document.write(login + " " +  passw + " "+ role + " " +"<br>") */

/* let {login: {firstName: f,lastName}, passw:p, role} = us+er;
document.write(f + " " + lastName+ " " +p + " "+ role + " " +"<br>")


/* let number = [3,5,6];
let [a,b,c] = number;
document.write(b); */

/* let pers ={
    name: "Феня",
    colors:[" красный"," белый"," синий"],
    brand: "Bentley",
    start: function(){
        let{name,colors,brand}= this;
        let color = Math.floor(Math.random()* 3)
        document.write(name + " имеет " + colors[color] + " " + brand)
    }
}
pers.start(); */



// Функция конструктор



/* function Car(name, year){
    this.n = name;
    this.y = year;
}
Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.y;
}

Car.prototype.color = "black";

let ford = new Car("Ford", 2019)
console.log(ford);
console.log(ford.color);
console.log(ford.getAge());

let bmw = new Car("BMW", 2017);
bmw.color = "red"
console.log(bmw)
console.log(bmw.color)
console.log(bmw.getAge()) */



/* function User(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + ", возраст: " + this.age + "<br>" );
    }
}

let tom = new User("Tom", 26);
document.write(tom.name+ "<br>")
tom.displayInfo();

let kate = new User("Kate", 24)
kate.displayInfo(); */
