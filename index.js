document.addEventListener("DOMContentLoaded", () =>{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(resp => resp.json())
    .then(data => console.log(data))
})