//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer() {
    try{
        const response =  await fetch("../data/photographers.json")
        const datas = await response.json()
        console.log(datas)
        const params = (new URL(document.location)).searchParams
        const id = parseInt(params.get('id'))
        const photographers = datas.photographers
        const photographer = photographers.filter(photographer => photographer.id === id) // gerer si photographe inexistant ou si plusieurs photographes avec mm id
        console.log(photographer)
        return photographer[0]
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

async function displayMedias(photographer){
    
}


async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographer();
    if(photographer) displayPhotographer(photographer); // doit display une error dans le cas contraire ou plutot dans le catch?
};

init();