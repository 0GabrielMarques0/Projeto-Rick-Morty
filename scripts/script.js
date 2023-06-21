const personsContanier = document.querySelector(".mid")

async function getPersons (){
    const response = await fetch(`https://rickandmortyapi.com/api/character`)

    const persons = await response.json()
    return persons.results
}

async function render (persons){
    persons.forEach((person) => {

        return personsContanier.innerHTML += `
        <a href="" target="_blank" class='info'>
            <img src="${person.image}" alt="">
            <div>
            <h2>Nome:${person.name}</h2>
            <h3>Orig${person.origin.name}</h3>
            </div>
        </a>`
    });
}   

async function main (){
    const persons = await getPersons()
    await render(persons)
}

main()
