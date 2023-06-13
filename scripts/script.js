fetch(`https://rickandmortyapi.com/api/character`)
.then( persons =>  persons.json())
.then( persons => {
    persons.forEach(person => {
        const main = document.querySelector(".persons")
        const box = document.createElement("div")
        main.appendChild(box)
        const img = document.createElement("img")
        img.setAttribute("src", person.image)
        box.appendChild(img)
        const name = document.createElement("h1")
        name.textContent = person.name
        box.appendChild(name)
        const place = document.createElement("h2")
        place.textContent = person.origin.name
        box.appendChild(place)
    });
})
