function User(pName, pAge, pJob){
    this.name = pName;
    this.age = pAge;
    this.pJob = pJob;
    this.displayInfo = function(){
        document.write("Я " + this.name + " мне " + this.age + " Лет." + " Я работаю "+ this.pJob + "<br>" );
    }
}

let dmitry = new User("Дмитрий", 26 , "дизайнером");
dmitry.displayInfo();

let stas = new User("Станислав", 29, "программистом")
stas.displayInfo();

let sergey = new User("Сергей", 35, "Менеджером")
sergey.displayInfo();