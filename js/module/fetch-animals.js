import initAnimateNumbers from './animate-numbers.js';

export default function initFetchAnimals() {
    async function fetchAnimals(url) {
        try {
            const animalsResponse = await fetch(url);
            const animalsJSON = await animalsResponse.json();
            const gridNumbers = document.querySelector('.grid-numbers');

            animalsJSON.forEach(animal => {
                const animalDiv = createAnimal(animal);
                gridNumbers.appendChild(animalDiv);
            });

            initAnimateNumbers();
        } catch(error) {
            console.log(error);
        }    
    }

    fetchAnimals('./apianimals.json');

    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('animal-number');
        
        div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

        return div;
    }
}