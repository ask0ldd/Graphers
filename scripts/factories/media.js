function mediaFactory(media){
    if(media.video){
        return new Video(media)
    }
    if(media.image){
        return new Image(media)
    }
}