/* fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json)) */


/*   document.querySelector("#load").addEventListener("click", load);

function load (){
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let ul = document.querySelector("#list")
            let html = data.map(function(item){
                return "<li>"+ item.id+"- " + item.name +" (" + item.email+")" + "</li>"
            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "));
        })
}
 */


let box = document.querySelector("div");
console.log(box.getBoundingClientRect());