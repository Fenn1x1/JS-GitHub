/* let qwe = document.querySelector("#qwe");

console.log(qwe.id);
console.log(qwe.className);
console.log(qwe.src);
console.log(qwe.alt);
console.log(qwe.title);
console.log(qwe.getAttribute('data-img'));
console.log(qwe.getAttribute('src'));
console.log(qwe.setAttribute('src', 'png-transparent-spongebob-squarepants-patrick-star-birthday-maximum-overdrive-food-cartoon-music-download.png')); */




// ФОРМЫ

/* document.form1.style.background = 'silver';

document.forms[0].style.padding = '16px';
document.forms ['form1'].style.margin = '20px';
document.forms.form1.style.border = '8px dotted gray' */



/* document.form1.name1.style.color="blue"
document.form1["name1"].style.background='aque' */



/*  let txt = document.querySelector("#text1");
let but = document.querySelector("button");
console.log(txt.value)
but.addEventListener('click', content);

function content(){
    alert(txt.value)
} */


/* let input = document.querySelectorAll("input[type='checkbox']")
let form1 = document.forms.form1;
console.log(form1.length)

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', checkAll)
}

function checkAll() {
    let numCheck = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked && input[i].type == "checkbox") {
            numCheck++;
        }
    }
    if (numCheck == 3) {
        for (let i = 0; i < input.length; i++) {
            if (!input[i].checked && input[i].type == "checkbox") {
                input[i].disabled = true
            }
        }
    }
    else {
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false
        }
    }

    console.log(numCheck)
} */


/* let choose = document.querySelector("input[type='button']");

choose.addEventListener('click',Cc);

function Cc(){
    let f = document.form3;
    console.log(f.length);
    console.log(f.radio2.length);
    for(let i=0; i<f.radio2.length;i++){
        if(f.radio2[i].checked){
            document.body.style.background = f.radio2[i].value
        }
    }
} */




/*  Свойства select:
options - коллекция из псевдоэлементов <option>
value - значение выбранного <option>
selectedIndex - номер выбранного <option>
*/

/* let city = document.querySelector("#city");

city.addEventListener('change', setImage);
function setImage(){
    let cities = city.selectedIndex;
    let options = city.options;
   // console.log(options)
   let code = options[cities].value
   // -console.log(code)

  let div = document.querySelector("#images")
  div.innerHTML = "<img src='img/"+ code +".png'>"
} */