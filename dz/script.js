let name = prompt("Ваше имя:");
let lastname = prompt("Ваша фамилия:");
let city = prompt("Ваш город:");
let age = prompt("Ваш возраст:");

alert ("***Подтвердите данные ***\nВаше имя:" + name+ "\nВаша фамилия:" + lastname);
alert ("***Подтвердите данные ***\nВаш город:" + city+ "\nВаш возраст:" + age);
let res = confirm("Данные введены верно?");
if (res)(
    alert("Спасибо за подтверждение")
)
else(
    alert("Данные не подтверждены")
)
/* let restwo = confirm("Данные введены верно?")
elsetwo(
    alert("Данные не подтверждены")
);
let st = "Спасибо за подтверждение";
alert(st); */