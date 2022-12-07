let slides = document.querySelectorAll(".slide")
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', () => {
        CAC();
        slides[i].classList.add('active')
       // slides[i].classList.remove('active')
    });
}

function CAC() {
    for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active')
    }
}