class DeadSmallChicken extends MovableObject {
    width = 80;
    height = 60;
    y = 360;
    x;


IMAGES_DEAD_SMALL_CHICKEN = [
    "./img/3_enemies_chicken/chicken_small/2_dead/dead.png"
]

SOUND_DEAD_CHICKEN = new Audio("./audio/killedChickens.mp3");


    constructor(x, y) {
        super().loadImage(this.IMAGES_DEAD_SMALL_CHICKEN[0]);


        this.x = x;
        this.y = y;
        this.playSoundDeadChicken();
    }


        playSoundDeadChicken(){
            this.SOUND_DEAD_CHICKEN.play();
        }











}