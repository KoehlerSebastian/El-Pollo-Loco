class Chicken extends MovableObject{
    width = 50;
    height = 35;
    x;

    offset = {
        top: 0,
        bottom: 30,
        left: 10,
        right: 10
    }

y = 380;
IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
]

currentImage = 0;

    constructor(){
        super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.IMAGES_WALKING);
        this.x = 500 + Math.floor(Math.random() * 200);

        this.speed = 0.1 + Math.random() * 1.55;

        this.animate(this.IMAGES_WALKING);
    }





    animate(IMAGES){
        setInterval(() => {
            this.moveLeft();
        }, 1000/60);




        setInterval(() =>{
this.playAnimation(IMAGES);
        },200);

    }

}