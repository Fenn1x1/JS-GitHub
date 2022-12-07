// JSON

// *.json

let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"marrid":true,"dog":null}';

document.write(info + "<br>")
console.log(info);
/* 
JSON.parse() - Преобразовывает объект JSON в объект JavaScript (Десериализация)
JSON.stringufy() - преобразовывает объект JavaScript в объект JSON (сериализация)
*/
let person = JSON.parse(info);
console.log(person);

person.first_name = "Daniil"
document.write(person.first_name + "<br>")


delete(person.age);

for(let i in person){
    document.write(i + ": " + person[i] + "<br>")
}

person.work = "programming"
for(let i in person){
    document.write(i + ": " + person[i] + "<br>")
}

delete (person.children[1])
document.write(person.children + "<br>")

person.children.splice(1,1)
document.write(person.children + "<br>")

person.children.push("Ira")
document.write(person.children + "<br>")

let personString = JSON.stringify(person)
console.log(personString);