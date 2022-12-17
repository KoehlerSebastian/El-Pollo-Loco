class DeadSmallChicken extends MovableObject {
    width = 80;
    height = 60;
    y = 360;
    x;


IMAGES_DEAD_SMALL_CHICKEN = [
    "./img/3_enemies_chicken/chicken_small/2_dead/dead.png"
]





    constructor(x, y) {
        super().loadImage(this.IMAGES_DEAD_SMALL_CHICKEN[0]);


        this.x = x;
        this.y = y;
    }












}