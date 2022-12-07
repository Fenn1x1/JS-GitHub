function multi ()
{
let themes = [];
let list_checkbox = document.querySelectorAll ('input[type="checkbox"]');
for (let i = 0, I = list_checkbox.length; i < I; i++)
if (list_checkbox[i].checked) themes.push (document.querySelector ('label[for=' + list_checkbox[i].id + ']').innerText);
 
if (themes.length) alert ('Выбран: ' + themes.join (', '));
}