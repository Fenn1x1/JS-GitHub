/* let form = document.form1;
form.addEventListener("submit",function(event){
    event.preventDefault();
}) */

/* let form = document.form1;
form.addEventListener("submit",event =>{
    event.preventDefault();
    let title = form.title.value;
    let text = form.text.value;
    let description = form.description.value;
    console.log(title);
    console.log(text);

    saveForm({title,text,description});  // title: title, text: text, description: description
}) */

// Spred
/* function saveForm(obj){   // {title, text, description}
    //let {title, text , description} = obj;
    let formData ={
        date: new Date().toDateString(),
        obj        // title,text,description
        // Оператор Spred
    }
    console.log("Form data:", formData);
} */


/* // Rest
function saveForm(...obj){
    console.log("Аргументы:", obj)
    let[{title, text, description}] = obj

    let formData ={
        date: new Date().toDateString(),
        obj
    }
    console.log("Form data:", formData);
}
 */



/* class User{
    constructor(name){
        this.name = name;  // Свойство (ключ)
    }
    sayHi(){
        document.write("Hello" + this.name + " ! ");  // Метод
    }
}
let user = new User("Иван")
console.log(user);

document.write(user.name+ "<br>")
user.name = "Мария"
document.write(user.name+ "<br>")
console.log(user) */
/* user.sayHi(); */

/* console.log(typeof(User));
console.log(typeof(user)); */

/* class User{
    constructor(login){
        this.login = login;
    }
    get login(){  // Получаем логин
        return this._login;
    }
    set login(value){
        if(value.length<6){
            alert("Логин слишком короткий")
            return
        }
        this._login = value
    }
}

let user = new User("Administrator")
console.log(user.login);
user.login = "admin-admin";
console.log(user.login); */

/* class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName
    }
    set fullName(value){
       [this._firstName, this._lastName]= value.split( /\s+/g);
    }
}
let people = new Person("John", "Dou")
document.write(people._firstName + "<br>")
document.write(people.fullName + "<br>")
people.fullName = "Anna        Petrova";
document.write(people.fullName + "<br>") */


/* class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    run(speed){
        this.speed = speed
        document.write(`${this.name} бежит со скоростью ${this.speed}км/ч.<br>`)
    }
    stop(){
        this.speed = 0;
        document.write(`${this.name} стоит.<br>`)
    }
}
class Rabbit extends Animal{  // дочерний класс
    constructor(name, earLength){
        super(name,);
        this.earLength = earLength
    }
    hide(){
        document.write(`${this.name} прячется!<br>`)
    }
    stop(){
        super.stop();
        this.hide();
    }
}
let animal = new Animal("Мой питомец");
animal.run(80)
animal.stop();

let rabbit = new Rabbit("Белый кролик", 10)
console.log(rabbit);
rabbit.run(5);
rabbit.hide();
rabbit.stop();
document.write(rabbit.name + "<br>");
document.write(rabbit.earLength + "<br>") */

class Header {
    constructor(img, h1, h2) {
        this.src = img
        this.h1 = h1
        this.h2 = h2
        this.out="";
    }
    render(id) {
        this.out = `
            <img src="${this.src}" alt="">
            <h1>${this.h1}</h1>      
            <h2>${this.h2}</h2>      
        `;
        document.querySelector(`#${id}`).innerHTML = this.out
    } 
}

class HeaderExt extends Header{
        constructor(img, h1, h2, tel='+7 777 111 22 33'){
            super(img,h1,h2);
            this.tel = tel
        }
        get tel(){
            return this._tel;
        }
        set tel(t='+7 777 111 11 11'){
            let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            if(reg.test(t)){
                this._tel=t;
            }
            else{
                alert("Номер некорректен")
                return
            }
        }
        renderExt(id){
            super.render(id)
            this.out += `
                <p>${this.tel}</p>
            `;
            document.querySelector(`#${id}`).innerHTML = this.out;
        }
    }

let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
let header = new Header(img, "Заголовок", "Описание");
header.render("header");

let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png"
let header2 = new Header(img2, " 2 Заголовок", "2 Описание");
header2.render("header2");

let img3 = "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-512.png"
let header3 = new HeaderExt(img3, " Дочерний класс", "он наследствует все свойства и методы дочернего класса", "+7 777 777 77 77");
/* header3.tel = "Hello" */

header3.renderExt("ext");


