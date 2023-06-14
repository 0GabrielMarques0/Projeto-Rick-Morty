const personsContanier = document.querySelector(".persons")

async function getPersons (){
    const response = await fetch(`https://rickandmortyapi.com/api/character`)

    const persons = await response.json
    return persons.results
}

async function render ({persons}){
    persons.forEach((person) => {

        return personsContanier.innerHTML += `
        <div>
            <img src="${person.image}" alt="">
            <div>
            <h2>${person.name}</h2>
            <h3>${person.origin}</h3>
            </div>
        </div>`
    });
}   

async function main (){
    const persons = await getPersons()
    render(persons)
}

main()