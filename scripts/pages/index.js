    async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        /*let photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]*/
        try{
            const response =  await fetch("../data/photographers.json")
            const datas = await response.json()
            console.log(datas)
            // et bien retourner le tableau photographers seulement une fois récupéré
            return {photographers: datas.photographers}
        }
        catch(error){
            console.error(error)
        }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(new Photographer(photographer));
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        // if(photographers) displayData(photographers); // display une error dans le cas contraire
        let photographersList = []
        const photographersSection = document.querySelector(".photographer_section")
        photographers.forEach(photographer => {
            const photographerInst = photographerFactory(photographer)
            photographersList.push(photographerInst)
            photographersSection.appendChild(photographerInst.buildDOMRepresentation());
        })
    };
    
    init();
    
