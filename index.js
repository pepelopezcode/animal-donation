document.addEventListener("DOMContentLoaded", () =>{
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/8')
    .then(resp => resp.json())
    .then(data => {
        iterateAnimalArray(data)
    })
   
 const footer = document.createElement('div');
footer.id = 'footer'

const randomButton = document.createElement('button');
randomButton.id = 'random-button'
randomButton.textContent = 'Choose from different animals'

footer.append(randomButton)
const resetAnimals = document.getElementById('reset')

randomButton.addEventListener('click', reload, false)

resetAnimals.append(footer)




})


function iterateAnimalArray(animalArray){
    //iterates through the array of animals given from the json
    animalArray.forEach( animalObject => {
        renderAnimal(animalObject)
    });
}

function renderAnimal(animalObject){
    //creates the div for the animal and all its coresponding elements
    const animalCard = document.createElement('div');
    const animalContain = document.getElementById('animalContainer');
    const animalName = document.createElement('h2');
    const animalInfo1 = document.createElement('h3');
    const moneyDonated = document.createElement('h3');

    const animalImage = document.createElement('img');
    const donateButton = document.createElement('button');
    let money = animalObject.id;
    donateButton.addEventListener('click', () => {
        money += 10;
        moneyDonated.innerText = `Dontaions $${money}`;
    })
    moneyDonated.setAttribute('class', "child");
    donateButton.setAttribute('class', "child");
    moneyDonated.innerText = `Dontaions $${money}`
    animalInfo1.innerText = `Habitat: ${animalObject.habitat} 
    Animal Type: ${animalObject.animal_type}`
    animalCard.setAttribute('class', 'card');
    animalImage.setAttribute('class', 'animalImage')
    donateButton.innerText = 'Donate $10'
    animalName.innerText = animalObject.name;
    animalImage.src = animalObject.image_link;
    animalContain.append(animalCard);
    animalCard.append(animalName, animalImage, animalInfo1, moneyDonated, donateButton)

}

function reload() {
    reload = location.reload();
}