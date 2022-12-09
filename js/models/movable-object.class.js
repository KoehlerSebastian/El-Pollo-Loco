class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    offsetY = 0;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {


            return this.y <= 270;
        }
    }





    isColliding(obj) {
        return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
            (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height);
    }

    hit() {
        this.energy -= 5;

        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; //Difference in s
        console.log("Passed");
        return timepassed < 1;
    }


    isDead() {
        return this.energy == 0;
    }



    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
    }


    playAnimation(IMAGES) {
        this.IMAGES = IMAGES;
        let i = this.currentImage % IMAGES.length
        let path = IMAGES[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    jump() {
        this.speedY = 15;
    }

}