class ThrowableObject extends MovableObject {
    throwSpeedX = 20;


    IMAGE_BOTTLES = [
        "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ]

    currentImage = 0;

    constructor(x, y) {
        super().loadImage("./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.IMAGE_BOTTLES);
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 60;
        this.throw();

    }


    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 8.5;
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGE_BOTTLES);
        }, 1000/10);

    }

}