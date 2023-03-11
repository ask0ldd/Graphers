//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer() {
    try{
        const response =  await fetch("../data/photographers.json")
        const datas = await response.json()
        console.log(datas)
        const params = URL.searchParams
        const id = params.get('id')
        console.log('id:',id)
        //datas.filter()
        //return {photographer: datas.photographers}
    }
    catch(error){
        console.error(error)
    }
}




async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographer();
    if(photographers) displayData(photographers); // doit display une error dans le cas contraire ou plutot dans le catch?
};

init();