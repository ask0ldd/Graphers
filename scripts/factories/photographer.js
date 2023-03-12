function photographerFactory(photographer) {

    const picture = photographer.portrait
    const name = photographer.name
    const id = photographer.id

    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        const anchor = document.createElement('a')

        anchor.setAttribute("href", 'photographer.html?id=' + id)
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", name + ' picture')

        anchor.appendChild(img)
        // img.style.objectFit="cover" // ADDED
        const h2 = document.createElement( 'h2' )
        h2.textContent = photographer.name // ADDED

        // h2 dans figcaption / img + figcaption dans figure?

        const location = document.createElement( 'p' ) // ADDED
        location.textContent = photographer.location // ADDED
        location.className="location" // ADDED

        const quote = document.createElement('p') // ADDED
        quote.textContent = photographer.quote // ADDED
        quote.className="quote" // ADDED

        const fees = document.createElement('p') // ADDED
        fees.textContent = photographer.dailyfees // ADDED
        fees.className="fees" // ADDED

        article.appendChild(anchor)
        article.appendChild(h2)
        article.appendChild(location)// ADDED
        article.appendChild(quote)// ADDED
        article.appendChild(fees)// ADDED
        return (article)
    }
    return { name, picture, getUserCardDOM }
}