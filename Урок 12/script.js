/* let gas = document.querySelectorAll(".petrol");

for(let i=0; i<gas.length; i++){
    gas[i].addEventListener('click', function(){
        let gallons = document.querySelector('.gallons').value;
        let amout = this.getAttribute('data');
        let res = gallons * amout;
        let sum = document.querySelector('.sum')
        sum.innerHTML = res;
    })
} */


/* let reg = document.querySelector('.register');
reg.addEventListener('submit', function () {
    let log = reg.login.value;
    let pass = reg.password.value;
    let pass2 = reg.password2.value;
    let error = "";

    if (log == "" || pass == "" || pass2 == "") {
        alert("Все поля должны быть заполнены");
    }
    if (pass.length < 6) {
            error += "Пароль слишком кароткий";
    }
    if (pass != pass2) {
        error += "\nПароли не совпадают";
    }
    if(error==""){
        alert("Вы успешно прошли регистрацию")
    }
    else{
    alert(error); 
    }
    
})   */



/* МЕТОДЫ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ

 1. search - возвращает позицию(index) на которой регулярное выражение совпадает с вызывающей строкой, или значение "-1"  если совпадений нет

 2.  match - возвращает все совпадения с регулярным  выражением

 3. replace - заменят совпадения с регулярным выражением на новую подстроку

 4. split - делит строку на массив, разбивая её по указанной подстроке

 5. test - выполняет поиск совпадений рагулярного выраженния со строкой. Возвращает значение true или false

*/


/* let regexp = new RegExp("Шаблон")
let reqexp = /шаблон/ */


let str = "Я ищу совпадения в 2023 году 7892 ё";
/* let regexp = /ищу/; */

document.write(str + "<br>")


/* document.write(str.search(regexp) + "<br>")
document.write(str.match(regexp) + "<br>")
document.write(regexp.test(str) + "<br>") */


// [....] - искать любой из заданных символов, но только один раз
/* let regexp = /[203]/g;
document.write(str.match(regexp) + "<br>") */

/* флаги 
g - (global) - исчет все совпадения с шаблоном поиска (Глобальный поиск)
i - (ignoreCase) - регистронезависимый поиск
m - (multiline) - многострочный поиск
*/

/* let regexp = /я/gi;
document.write(str.match(regexp) + "<br>") */


/* Диапазоны 
    [0-9] - любая цифра от 0 до 9, Пример: [3-6]
    [A-Z] - Заглавные буквы(англ)
    [a-z] - Строчные буквы(англ)
    [А-Я] - Заглавные буквы(Рус)
    [а-я] - Строчные буквы(Рус)
*/


// [^abc] - исключающий диапазон, ни один из символов не отобразится
/* let regexp = /[^0-9]/g;
document.write(str.match(regexp) + "<br>") */


/* Количесвто повторений

{3} - Количество симсволов идущих подряд
{1,} - от одного до бесконечного количества повторений 
{2,5} - от 2 до 5 повторений

*/
/* let regexp = /[0-9]{3,}/g;
document.write(str.match(regexp) + "<br>") */


/* let html = `
<table>
    <tr>
        <td bgcolor="#CCC">
        <img src="1f3.png"
    </td>
    <tr>
        <td bgcolor="#003399">
        <img src="222.png"
    </td>
    <tr>
        <td bgcolor="#00ccdd">
        <img src="fff.png"
    </td>
</table>
`; */

/* let exp = /#([0-9a-f]{3}){1,2}/gi;
document.write(html.match(exp) + "<br>") */


/* Символы классов
\d (digit) - любая цифра
\s (space) - пробельный символ, включая таюуляцию и перевод строки
\w (word) - любая цифра, буква (англ) или символ подчёркиваня
*/

/* let regexp = /\w/g;
document.write(str.match(regexp) + "<br>") */




/* Обратные символьные классы
\D - всё кроме цифр
\S - Всё кроме пробельных символов, включая таюуляцию и перевод строки
\W - Всё кроме любых цифр, букв (англ) или символ подчёркиваня
*/

// Точка - любой символ

/* let regexp = /.{3,5}/g;
document.write(str.match(regexp) + "<br>") */


/* 
    ^ - Начало строки (перед последовательностью ничего не должно быть)
    $ - Конец строки  (после последовательности ничего не должно быть)
*/
let html = 'aaa909'
let regexp = /^\d{3}$/g;
document.write(html.match(regexp) + "<br>")