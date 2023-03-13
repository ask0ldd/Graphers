/*

		{
			"id": 7324238,
			"photographerId": 82,
			"title": "18th Anniversary",
			"image": "Event_18thAnniversary.jpg",
			"likes": 33,
			"date": "2019-06-12",
			"price": 55
		},
		{
			"id": 8328953,
			"photographerId": 82,
			"title": "Wooden sculpture of a horse",
			"video": "Art_Wooden_Horse_Sculpture.mp4",
			"likes": 24,
			"date": "2011-12-08",
			"price": 100
		  }

*/


// creer un media sans video et image puis etendre class Image / class Video

class Media {
    #id
    #owner
    #title
    #likes
    #date
    #price
    #liked
    constructor(media){
        if(!media.id || !media.photographerId || !media.title || !media.date || !media.price) throw new Error('Cant create the requested object with such datas')
        this.#id = media.id
        this.#owner = media.photographerId
        this.#likes = media.likes
        this.#title = media.title
        this.#date = media.date
        this.#price = media.price
        this.#liked = false
    }

    get id()    { return this.#id }
    get owner() { return this.#owner }
    get likes() { return this.#likes }
    get title() { return this.#title }
    get date()  { return this.#date }
    get price() { return this.#price+'$' }
    get liked() { return this.#liked }
    switchLiked() { 
        this.#liked === false ? this.#liked++ : this.#liked--
        this.#liked = !this.#liked 
    }
}

class Image extends Media{
    #src
    constructor(media){
        super(media)
        this.#src = './assets/works/'+media.image
        //needs firstname of the owner to reconstruct the full image path
    }

    get src() { return this.#src }

    buildDOMRepresentation(){
        const mediaContainer = document.createElement( 'article' )
        const img = document.createElement( 'img' )
        const datasContainer = document.createElement( 'div' )
        datasContainer.classList.add("mediaInfos")
        const heading = document.createElement( 'h2' )
        const likes = document.createElement( 'p' )

        img.setAttribute("src", this.#src)
        mediaContainer.appendChild(img)

        heading.textContent=this.title
        likes.textContent=this.likes
        datasContainer.appendChild(heading)
        datasContainer.appendChild(likes)
        mediaContainer.appendChild(datasContainer)

        return mediaContainer
    }
}

class Video extends Media{
    #src
    constructor(media){
        super(media)
        this.#src = './assets/works/'+media.video // verifier bien mp4 ou erreur
    }

    get src() { return this.#src }

    buildDOMRepresentation(){
        const mediaContainer = document.createElement( 'article' )
        const video = document.createElement( 'video' )
        const datasContainer = document.createElement( 'div' )
        datasContainer.classList.add("mediaInfos")
        const heading = document.createElement( 'h2' )
        const likes = document.createElement( 'p' )

        video.setAttribute("src", this.src)
        video.setAttribute("controls", true)
        mediaContainer.appendChild(video)

        heading.textContent=this.title
        likes.textContent=this.likes
        datasContainer.appendChild(heading)
        datasContainer.appendChild(likes)
        mediaContainer.appendChild(datasContainer)

        return mediaContainer
    }
}













/*class Media {
    #id
    #owner
    #title
    #type
    #src
    #likes
    #date
    #price
    constructor(media){
        if(!media.id || !media.photographerId || !media.title || !media.date || !media.price || (!media.video && !media.image)) throw new Error('Cant create the requested object with such datas')
        this.#id = media.id
        this.#owner = media.photographerId
        this.#title = media.title
        this.#date = media.date // a formater
        this.#price = media.price+'$'
        if(media.video) {
            this.#type = 'video'
            this.#src = media.video
        }else{
            this.#type = 'image'
            this.#src = media.image
        }
    }
}*/