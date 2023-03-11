class Photographer {
	#name
	#id
	#city
	#country
	#tagline
	#price
	#portrait

    constructor(userDatas){
        this.#name = userDatas.name
		this.#id = userDatas.id
		this.#city = userDatas.city
		this.#country = userDatas.country
		this.#tagline = userDatas.tagline
		this.#price = userDatas.price
		this.#portrait = userDatas.portrait
    }

	get portrait(){
		return "./assets/photographers/"+this.#portrait
	}

	get name(){
		return this.#name
	}

	get dailyfees(){
		return this.#price+'€/jour'
	}

	get quote(){
		return this.#tagline
	}

	get location(){
		return this.#city + ', ' + this.#country
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