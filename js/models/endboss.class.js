class Endboss extends MovableObject {

    IMAGES_HEAD_CHICKEN = [
        "./img/4_enemie_boss_chicken/2_alert/G5.png",
        "./img/4_enemie_boss_chicken/2_alert/G6.png",
        "./img/4_enemie_boss_chicken/2_alert/G7.png",
        "./img/4_enemie_boss_chicken/2_alert/G8.png",
        "./img/4_enemie_boss_chicken/2_alert/G9.png",
        "./img/4_enemie_boss_chicken/2_alert/G10.png",
        "./img/4_enemie_boss_chicken/2_alert/G11.png",
        "./img/4_enemie_boss_chicken/2_alert/G12.png"
    ];

    currentImage = 0;

    constructor(){
        super().loadImage(this.IMAGES_HEAD_CHICKEN[0]);
        this.loadImages(this.IMAGES_HEAD_CHICKEN);
        this.x = 700;
        this.animate(this.IMAGES_HEAD_CHICKEN);

    }

    animate(IMAGES){
        setInterval(() => {
            this.playAnimation(IMAGES);
        }, 450);
    }



}