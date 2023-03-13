const jsonUrl = "../data/photographers.json"

const fetchFreelancer = async (id) => {
    try{
        const response =  await fetch(jsonUrl)
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

const fetchAllFreelancersInfos = async () => {
    try{
        const response =  await fetch("../data/photographers.json")
        const datas = await response.json()
        // et bien retourner le tableau photographers seulement une fois récupéré
        let photographers = []
        datas.photographers.array.forEach(photographer => photographers.push({photographerInfos : photographer}));
        return photographers
    }
    catch(error){
        console.error(error)
    }
}