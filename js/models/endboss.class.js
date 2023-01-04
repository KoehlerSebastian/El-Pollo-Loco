class Endboss extends MovableObject {
    characterIsNearby = false;
    endbossEnrage = false;
    energy = 150;
    speed = 1.0;
    offset = {
        top: 20,
        bottom: 30,
        left: 20,
        right: 20
    }
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

    IMAGES_WALKING_ENDBOSS = [
        "./img/4_enemie_boss_chicken/1_walk/G1.png",
        "./img/4_enemie_boss_chicken/1_walk/G2.png",
        "./img/4_enemie_boss_chicken/1_walk/G3.png",
        "./img/4_enemie_boss_chicken/1_walk/G4.png"
    ]


    IMAGES_HURT_ENDBOSS = [
        "./img/4_enemie_boss_chicken/4_hurt/G21.png",
        "./img/4_enemie_boss_chicken/4_hurt/G22.png",
        "./img/4_enemie_boss_chicken/4_hurt/G23.png"
    ]

    currentImage = 0;
    currentImageHead = 0;

    constructor() {
        super().loadImage(this.IMAGES_HEAD_CHICKEN[0]);
        this.loadImages2(this.IMAGES_HEAD_CHICKEN);
        this.loadImages(this.IMAGES_WALKING_ENDBOSS);
        this.loadImages(this.IMAGES_HURT_ENDBOSS);
        this.x = 600;
        this.animateHead(this.IMAGES_HEAD_CHICKEN);
        this.animateWalk(this.IMAGES_WALKING_ENDBOSS);
        this.checkCharacterisNearby();
        this.checkEndbossEnrage();
        this.checkCharacterIsHurt();
    }



    checkCharacterisNearby(){
        setInterval(() => {
            if(this.characterIsNearby){
                this.moveLeft(this.speed);

        }
        }, 1000/60);
    }

    checkEndbossEnrage(){
        setInterval(() => {
            if(this.energy <= 100){
                this.speed = 1.5;
            }
        }, 250);
    }

    checkCharacterIsHurt(){
        setInterval(() => {
            if(this.isHurt()){
                this.playAnimation(this.IMAGES_HURT_ENDBOSS);
            }
        }, 150);
    }


    animateHead(ImagesHead){
        setInterval(() => {
            this.playAnimationHead(ImagesHead);
        }, 550);

    }

    animateWalk(ImagesWalking){
        setInterval(() => {
            this.playAnimation(ImagesWalking)
        }, 250);
    }


}