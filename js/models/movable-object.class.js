class MovableObject {
    x = 60;
    y = 270;
    img;
    height = 150;
    width = 100;
    speed = 0.15;
    imageCache = [];
    otherDirection = false;





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
        setInterval(() => {
            this.x -= 0.3;
        }, this.speed);
    }


    playAnimation(IMAGES){
        this.IMAGES = IMAGES;
        let i = this.currentImage % this.IMAGES.length
        let path = this.IMAGES[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

}