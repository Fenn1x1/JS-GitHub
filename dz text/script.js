document.write("<div id= 'd_o'></div>");
let d1 = document.getElementById('d_o');
d_o.innerHTML = "Дюбель — конструктивный элемент, который используется для укрепления винта или предмета настене, на потолке или на полу в помещении или под открытым небом в различных материалах(бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. Снекоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одноцелое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различныхвеличинах, которые руководствуются диаметром дюбеля (и соответственно необходимымотверстием), измеренным в миллиметрах."

d1.style.background = '#f0f';
d1.style.color = '#99fff'
d1.style.width = "50%"
d1.style.outline = '10px dotted #000'


d1.className = 'resetfont'
let a = document.querySelector('.resetFont')
a.style.FontSize = '12px'
a.style.fontWeight ='bold'
a.style.textDecotarion = 'line-through'
console.log(a);