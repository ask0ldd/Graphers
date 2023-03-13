class Freelancer {

    #infos
    #works

    constructor(freelancerInfos, freelancerWorks){
        console.log(freelancerInfos)
        this.#infos = photographerFactory(freelancerInfos) // passer juste les infos pas besoin de new car l'instanciation doit se faire dans la factory
        
        let mediaLibrary = []
        freelancerWorks.forEach( m => mediaLibrary.push(mediaFactory(m)) )

        this.#works = [...mediaLibrary]
    }

    buildDOMfor(page, galleryContainerSelector){

        const { host, hostname, href, origin, pathname, port, protocol, search } = window.location

        if(page === "index"){
            //this.#infos.buildDOMRepresentation()
        }

        if(page === "photographer"){
            const gallerySection = document.querySelector(galleryContainerSelector)
            this.#works.forEach(work => 
                {
                    const mediaDOM = work.buildDOMRepresentation()
                    gallerySection.appendChild(mediaDOM)
                })
        }
    }

}