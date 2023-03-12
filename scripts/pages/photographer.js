async function fetchPhotographersnMedias(){
    try{
        const response =  await fetch("../data/photographers.json")
        const datas = await response.json()
        return {photographers : datas.photographers, medias : datas.media}
    }
    catch(error){
        console.error(error)
    }
}

async function displayPhotographer(photographer) {

    // manque la somme des likes dans le model pour la sticky bar
    const photographersSection = document.querySelector(".photograph-header");

    const photographerModel = photographerFactory(new Photographer(photographer));
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}

async function displayMedias(medias){
    const gallerySection = document.querySelector(".gallery");
    console.log('medias : ', medias)
    medias.forEach(m => {
        const media = mediaFactory(m)
        console.log(media)
        const mediaDOM = media.buildDOMRepresentation()
        console.log(mediaDOM)
        gallerySection.appendChild(mediaDOM)
    });
}


async function init() {
    // Récupère les datas des photographes
    const {photographers, medias} = await fetchPhotographersnMedias()

    const params = (new URL(document.location)).searchParams
    const currentPhotographerId = parseInt(params.get('id'))
    const photographer = photographers.filter(photographer => photographer.id === currentPhotographerId)[0]
    // console.log(photographer)
    if(photographer) displayPhotographer(photographer) // doit display une error dans le cas contraire ou plutot dans le catch?
    const filteredMedias = medias.filter(media => media.photographerId === currentPhotographerId)
    if(filteredMedias.length) displayMedias(filteredMedias)
};

init();