class BottleSplash extends MovableObject{
    width = 70;
    height = 70;

    offset = {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
    }



    IMAGE_BOTTLES_SPLASH = [
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png"
    ];
    
    currentImage = 0;
    bottleSplashSound = new Audio("./audio/bottle_splash.mp3");

    constructor(x, y){
    super().loadImage(this.IMAGE_BOTTLES_SPLASH[0])
    this.loadImages(this.IMAGE_BOTTLES_SPLASH);
    this.x = x;
    this.y = y;
    this.animate()
    this.playSplashSound();
    }





    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGE_BOTTLES_SPLASH);
        }, 200);
    }

    playSplashSound(){
        this.bottleSplashSound.playbackRate = 2.5;
        this.bottleSplashSound.play();
        this.bottleSplashSound.volume = 0.5;
    }
}