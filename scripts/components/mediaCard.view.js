
const imgGalleryCardView = ({src, title, likes}) => {
    const DOMStringified = 
    `<article>
        <img src='${src}'>
        <div class='mediaInfos'>
            <h2>${title}</h2>
            <p>>${likes}</p>
        </div>
    </article>`

    return {DOMStringified, buildParams : ['src', 'title', 'likes']}

    /*listBuildingParams(){
        return ['src', 'title', 'likes']
    }*/
}

class Component {
    #view
    #params
    constructor(view, buildingParams){ //buildingParams ou buildingParamsList?
        this.#view = view
        this.#params = buildingParams
        // DOM parser(view(buildingParams)
    }

    setParams(buildingParams){
        this.#params = buildingParams
    }

    render(){
        return this.#view(this.#params)
    }

    getParams(){
        return this.#params
    }
}

/*

return objet {param1 : vide, param2 : vide, param3: vide}
pr le rebuild il faut pouvoir lui passer de nouveaux params et dc il faut avoir conserve la view

*/