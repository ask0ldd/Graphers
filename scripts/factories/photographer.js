function photographerFactory(photographer) {

    const picture = photographer.portrait
    const name = photographer.name

    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", name + ' picture')
        // img.style.objectFit="cover" // ADDED
        const h2 = document.createElement( 'h2' )
        h2.textContent = photographer.name // ADDED

        const location = document.createElement( 'p' ) // ADDED
        location.textContent = photographer.location // ADDED

        const quote = document.createElement('p') // ADDED
        quote.textContent = photographer.quote // ADDED

        const fees = document.createElement('p') // ADDED
        fees.textContent = photographer.dailyfees // ADDED

        article.appendChild(img)
        article.appendChild(h2)
        article.appendChild(location)// ADDED
        article.appendChild(quote)// ADDED
        article.appendChild(fees)// ADDED
        return (article)
    }
    return { name, picture, getUserCardDOM }
}