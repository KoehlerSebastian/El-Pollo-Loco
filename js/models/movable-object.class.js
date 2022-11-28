class MovableObject {
    x = 60;
    y = 270;
    img;
    height = 150;
    width = 100;

    imageCache = [];






    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    moveRight() {
        console.log("Moving right");
        
    }

    moveLeft(){
        console.log("Chicken move Left");
    }

}