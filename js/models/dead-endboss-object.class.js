class DeadEndboss extends MovableObject {
    x; 
    y;
    height = 300;
    width = 500;

    IMAGES_DEAD_ENDBOSS = [
    "./img/4_enemie_boss_chicken/5_dead/G24.png",
    "./img/4_enemie_boss_chicken/5_dead/G25.png",
    "./img/4_enemie_boss_chicken/5_dead/G26.png"
];


currentImage = 0;
    constructor(x, y) {
        super().loadImage("./img/4_enemie_boss_chicken/5_dead/G24.png");
        this.loadImages(this.IMAGES_DEAD_ENDBOSS);
        this.x = x;
        this.y = y;
        this.deathAnimation();
    }

  
  /**
   * @function
   * plays the death animation of the boss when its dead.
   */
  deathAnim;
  deathAnimation() {
    this.deathAnim = setInterval(() => {
      this.playAnimation(this.IMAGES_DEAD_ENDBOSS);
      this.y -= 80;
      this.endAnim();
    }, 150);
  }


  /**
   * @function
   * stops the deathanimation and moves the boss to its final position
   */
  endAnim() {
    setTimeout(() => {
      clearInterval(this.deathAnim);
      this.y +=80;
    }, 350);
  }



    // animateDead() {
    //             this.playAnimation(this.IMAGES_DEAD_ENDBOSS);
    // }

}