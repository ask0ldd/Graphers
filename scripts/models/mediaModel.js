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
}