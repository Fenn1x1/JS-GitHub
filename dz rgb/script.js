let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
for (let i = 0; i < 12; i++){
    document.write("<div>" +month[i] + "</div>");
    let id = document.querySelectorAll("div")[i];
    console.log(id)
    col()
    function col(){
        let r = (Math.random() * 256)
        let g = (Math.random() * 256)
        let b = (Math.random() * 256)
        id.style.background = 'rgb(' + r +','+ g +',' + b +')';
        return col;
    }
}
