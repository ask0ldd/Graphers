//renommer en freelancer infos

class Photographer {
	#name
	#id
	#city
	#country
	#tagline
	#fees
	#portrait

    constructor(userDatas){
        this.#name = userDatas.name
		this.#id = userDatas.id
		this.#city = userDatas.city
		this.#country = userDatas.country
		this.#tagline = userDatas.tagline
		this.#fees = userDatas.price
		this.#portrait = userDatas.portrait
    }

	get id(){
		return this.#id
	}
	get portrait(){
		return "./assets/photographers/"+this.#portrait
	}

	get name(){
		return this.#name
	}

	get dailyfees(){
		return this.#fees+'€/jour'
	}

	get quote(){
		return this.#tagline
	}

	get location(){
		return this.#city + ', ' + this.#country
	}

	buildDOMRepresentation(){
		const photographerCard = document.createElement( 'article' )
        const anchor = document.createElement('a')

        anchor.setAttribute("href", 'photographer.html?id=' + this.#id)
        const img = document.createElement( 'img' )
        img.setAttribute("src", this.portrait)
        img.setAttribute("alt", this.name + ' picture')

        anchor.appendChild(img)
        // img.style.objectFit="cover" // ADDED
        const h2 = document.createElement( 'h2' )
        h2.textContent = this.name // ADDED

        // h2 dans figcaption / img + figcaption dans figure?

        const location = document.createElement( 'p' ) // ADDED
        location.textContent = this.location // ADDED
        location.className="location" // ADDED

        const quote = document.createElement('p') // ADDED
        quote.textContent = this.name // ADDED
        quote.className="quote" // ADDED

        const fees = document.createElement('p') // ADDED
        fees.textContent = this.dailyfees // ADDED
        fees.className="fees" // ADDED

        photographerCard.appendChild(anchor)
        photographerCard.appendChild(h2)
        photographerCard.appendChild(location)// ADDED
        photographerCard.appendChild(quote)// ADDED
        photographerCard.appendChild(fees)// ADDED
        return photographerCard
	}


	/* utiliser setter pour total likes? */
}

/*

			"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "Voir le beau dans le quotidien",
			"price": 400,
			"portrait": "MimiKeel.jpg"

 */