class Endboss extends MovableObject {
    characterIsNearby = false;
    AttackCharacter = false;
    endbossEnrage = false;
    endbossIsAlive = true;
    energy = 100;
    speed = 1.0;
    x;
    y = 150;
    height = 300;
    width = 500;



    offset = {
        top: 50,
        bottom: 30,
        left: 100,
        right: 100
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

    IMAGES_ATTACK_ENDBOSS = [
        "./img/4_enemie_boss_chicken/3_attack/G13.png",
        "./img/4_enemie_boss_chicken/3_attack/G14.png",
        "./img/4_enemie_boss_chicken/3_attack/G15.png",
        "./img/4_enemie_boss_chicken/3_attack/G16.png",
        "./img/4_enemie_boss_chicken/3_attack/G17.png",
        "./img/4_enemie_boss_chicken/3_attack/G18.png",
        "./img/4_enemie_boss_chicken/3_attack/G19.png",
        "./img/4_enemie_boss_chicken/3_attack/G20.png"
    ]


    IMAGES_ENDBOSS_DEAD = [
        "./img/4_enemie_boss_chicken/5_dead/G24.png",
        "./img/4_enemie_boss_chicken/5_dead/G25.png",
        "./img/4_enemie_boss_chicken/5_dead/G26.png",
    ]

    currentImage = 0;
    currentImageHead = 0;

    endbossDeadSound = new Audio("./audio/winSound.mp3");
    constructor() {
        super().loadImage(this.IMAGES_HEAD_CHICKEN[0]);
        this.loadingImages();
        this.x = 2000;
        this.animateHead(this.IMAGES_HEAD_CHICKEN);
        this.animateWalk(this.IMAGES_WALKING_ENDBOSS);
        this.animateDead(this.IMAGES_ENDBOSS_DEAD);
        this.checkStatus();
    }



    loadingImages() {
        this.loadImages2(this.IMAGES_HEAD_CHICKEN);
        this.loadImages(this.IMAGES_WALKING_ENDBOSS);
        this.loadImages(this.IMAGES_HURT_ENDBOSS);
        this.loadImages(this.IMAGES_ATTACK_ENDBOSS);
        this.loadImages(this.IMAGES_ENDBOSS_DEAD);
    }


    checkStatus() {
        this.checkCharacterisNearby();
        this.checkEndbossEnrage();
        this.checkEndbossIsHurt();
        this.checkEndbossCanAttack();
        this.checkEndbossIsAlive();
    }



    checkCharacterisNearby() {
        setInterval(() => {
            if (this.characterIsNearby && !this.isDead()) {
                this.moveLeft(this.speed);

            }
        }, 1000 / 60);
    }

    checkEndbossEnrage() {
        setInterval(() => {
            if (this.energy <= 100) {
                this.speed = 1.8;
            }
        }, 250);
    }

    checkEndbossIsHurt() {
        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_ENDBOSS);
            }
        }, 150);
    }

    checkEndbossCanAttack() {
        setInterval(() => {
            if (this.AttackCharacter) {
                this.playAnimation(this.IMAGES_ATTACK_ENDBOSS);
            }
        }, 150);
    }

    checkEndbossIsAlive() {
        setInterval(() => {
            if (this.energy <= 0) {
                this.endbossIsAlive = false;
                if (soundActive) {
                    this.endbossDeadSound.playbackRate = 2.5;
                    this.endbossDeadSound.play();
                }
            } else {
                this.endbossIsAlive = true;
            }
        }, 150);
    }




    animateHead(ImagesHead) {
        if (!this.isDead()) {
            setInterval(() => {
                this.playAnimationHead(ImagesHead);
            }, 550);
        }

    }

    animateWalk(ImagesWalking) {
        if (!this.isDead()) {
            setInterval(() => {
                this.playAnimation(ImagesWalking)
            }, 250);
        }
    }

    animateDead(ImagesDead) {
        setInterval(() => {
            if (!this.endbossIsAlive) {
                this.playAnimation(ImagesDead);
            }
        }, 150);

    }

}