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
        h2.textContent = photographer.name
        article.appendChild(img)
        article.appendChild(h2)
        return (article)
    }
    return { name, picture, getUserCardDOM }
}