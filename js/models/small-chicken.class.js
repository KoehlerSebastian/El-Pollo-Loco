class SmallChicken extends MovableObject {

    width = 50;
    height = 65;
    x;
    y = 360;
    random;
    offset = {
        top: 0,
        bottom: 30,
        left: 10,
        right: 10
    }


    currentImage = 0;

    IMAGES_SMALL_CHICKEN = [
        "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png"

    ]










    constructor() {
        super().loadImage(this.IMAGES_SMALL_CHICKEN[0])
        this.loadImages(this.IMAGES_SMALL_CHICKEN);

        this.x = 1000 + Math.floor(Math.random() * 600);

        this.speed = 0.1 + Math.random() * 1.55;
        this.random = (2000 + Math.random() * 4999);

        this.animate(this.IMAGES_SMALL_CHICKEN);
        this.applyGravity();
        this.chickenJump();
    }




    animate(IMAGES) {
        setInterval(() => {
            this.moveLeft(this.speed);
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(IMAGES);
        }, 200);

    }


    chickenJump(){
        setInterval(() => {
            this.speedY = 15;
        }, this.random);
    }


}


