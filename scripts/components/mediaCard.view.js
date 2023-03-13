
const imgGalleryCardComponent = ({src, title, likes}) => {
    const DOMStringified = 
    `<article>
        <img src='${src}'>
        <div class='mediaInfos'>
            <h2>${title}</h2>
            <p>>${likes}</p>
        </div>
    </article>`
}