const getIdParam = () => {
    const params = (new URL(document.location)).searchParams
    return parseInt(params.get('id'))
}

async function fetchPhotographerDatas(id){
    try{
        const response =  await fetch("../data/photographers.json")
        const datas = await response.json()
        /*return {photographers : datas.photographers, medias : datas.media}*/
        photographer = datas.photographers.filter(photographer => photographer.id === id)[0]
        medias = datas.media.filter(media => media.photographerId === id)
        return ({photographerInfos : photographer, medias : medias})
    }
    catch(error){
        console.error(error)
    }
}

/*async function displayPhotographer(photographer) {

    // manque la somme des likes dans le model pour la sticky bar
    const photographersSection = document.querySelector(".photograph-header");

    const photographerModel = photographerFactory(new Photographer(photographer));
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}*/

/*async function displayMedias(medias){
    const gallerySection = document.querySelector(".gallery");
    console.log('medias : ', medias)
    medias.forEach(m => {
        const media = mediaFactory(m)
        console.log(media)
        const mediaDOM = media.buildDOMRepresentation()
        console.log(mediaDOM)
        gallerySection.appendChild(mediaDOM)
    });
}*/


async function init() {
    // Récupère les datas des photographes
    const currentPhotographerId = getIdParam()
    const {photographerInfos, medias} = await fetchPhotographerDatas(currentPhotographerId)
    /*if(photographer) displayPhotographer(photographer) // doit display une error dans le cas contraire ou plutot dans le catch?
    if(medias.length) displayMedias(medias)*/
    const freelancer = new Freelancer(photographerInfos, medias)
    freelancer.buildDOMfor('photographer', '.gallery')
};

init();