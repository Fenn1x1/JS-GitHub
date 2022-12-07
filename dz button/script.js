let spans = document.querySelectorAll(".remove-button");

for(let i=0;i<spans.length;i++){
    spans[i].addEventListener("click", function(){
        spans[i].parentNode.remove();
    })
}