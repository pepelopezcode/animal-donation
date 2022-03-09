document.addEventListener("DOMContentLoaded", () =>{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/6')
    .then(resp => resp.json())
    .then(data => {console.log(data)
        //iterateAnimalArray(data)
    })
})


function iterateAnimalArray(animalArray){
    //iterates through the array of animals given from the json
    animalArray.forEach( animalObject => {
        renderAnimal(animalObject)
    });
}

function renderAnimal(animalObject){
    //creates the div for the animal and all its coresponding elements
}