/* "use strict"

class Div {
    constructor(img, p) {
        this.src = img;
        this.p = p;
    }
    plus(id){
        let bas =`
        <img src="${this.src}" alt="">
        <p>${this.p = p}</p>
        `;
        document.querySelector(`#${id}`).innerHTML = bas;
    }
}

let img = "https://cdn2.iconfinder.com/data/icons/thin-business-1/24/thin-1089_deal_money_business-2-512.png";
let p = "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году"

let div = new Div(img,p);
div.plus("element")

let img2 = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png";
let p2 = "Нет географических границ"

let div2 = new Div(img2,p2);
div2.plus("element2")

let img3 = "https://cdn1.iconfinder.com/data/icons/material-core/20/language-256.png";
let p3 = "Ассортимент"

let div3 = new Div(img3,p3);
div3.plus("element3")

let img4 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_security_48px-256.png";
let p4 = "<Безопасность>"

let div4 = new Div(img4,p4);
div4.plus("element4")

let img5 = "https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/aami15-20-256.png";
let p5 = "Сокращение расходов на аренду и персонал"

let div5 = new Div(img5,p5);
div5.plus("element5")

let img6 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_network_wifi_48px-64.png";
let p6 = "Партнёрские отношения"

let div6 = new Div(img6,p6);
div6.plus("element6")

let img7 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_phone_iphone_48px-512.png";
let p7 = "Продавец всегда на связи"

let div7 = new Div(img7,p7);
div7.plus("element7")

let img8 = "https://cdn3.iconfinder.com/data/icons/all-for-shop-free-samples/128/shop_email-512.png";
let p8 = "Комфортный выбор"

let div8 = new Div(img8,p8);
div8.plus("element8")

let img9 = "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-256.png";
let p9 = "Комфортный выбор"

let div9 = new Div(img9,p9);
div9.plus("element9") */

class Header {
    constructor(img,p) {
        this.src = img
        this.p = p
        this.out="";
    }
    render(id) {
        this.out = `
            <img src="${this.src}" alt="">
            <p>${this.p}</p>       
        `;
        document.querySelector(`#${id}`).innerHTML = this.out
    } 
}

class HeaderExt extends Header{
        constructor(img,p){
            super(img,p);
        }
        renderExt(id){
            super.render(id)
            this.out += `
                <p>${this.tel}</p>
            `;
            document.querySelector(`#${id}`).innerHTML = this.out;
        }
    }

let img = "https://cdn2.iconfinder.com/data/icons/thin-business-1/24/thin-1089_deal_money_business-2-512.png"
let header = new Header(img, "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году");
header.render("header");

let img2 = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png"
let header2 = new Header(img2, "Нет географических границ");
header2.render("header2");

let img3 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_security_48px-256.png"
let header3 = new Header(img3, "Безопасность");
header3.render("header3");

let img4 = "https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/aami15-20-256.png"
let header4 = new Header(img4, "Сокращение расходов на аренду и персонал");
header4.render("header4");

let img5 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_network_wifi_48px-64.png"
let header5 = new Header(img5, "Партнёрские отношения");
header5.render("header5");

let img6 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_phone_iphone_48px-512.png"
let header6 = new Header(img6, "Продавец всегда на связи");
header6.render("header6");

let img7 = "https://cdn3.iconfinder.com/data/icons/all-for-shop-free-samples/128/shop_email-512.png"
let header7 = new Header(img7, "Комфортный выбор");
header7.render("header7");

let img8 = "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-256.png"
let header8 = new Header(img8, "Оплата");
header8.render("header8");

let img9 = "https://cdn1.iconfinder.com/data/icons/material-core/20/language-256.png"
let header9 = new Header(img9, "Ассортимент");
header9.render("header9");