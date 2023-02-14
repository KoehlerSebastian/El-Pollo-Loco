class MovableObject extends DrawableObject {

    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    lastHit = 0;
    bottles = 0;
    coins = 0;

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
            return this.y <= 360;
        }

        else if(this instanceof SmallChicken) 
            {
                return this.y <= 360;
            }else
            {

            return this.y <= 270;
        }
    }


    isColliding(object) {
        return this.rightBorder() > this.leftObjectBorder(object) &&
            this.bottomBorder() > this.topObjectBorder(object) &&
            this.leftBorder() < this.rightObjectBorder(object) &&
            this.topBorder() < this.bottomObjectBorder(object);
    }



    rightBorder() {
        return this.x + this.width - this.offset.right;
    }


    leftBorder() {
        return this.x + this.offset.left;
    }


    topBorder() {
        return this.y + this.offset.top;
    }


    bottomBorder() {
        return this.y + this.height - this.offset.bottom;
    }


    rightObjectBorder(object) {
        return object.x + object.width - object.offset.right;
    }


    leftObjectBorder(object) {
        return object.x + object.offset.left;
    }


    topObjectBorder(object) {
        return object.y + object.offset.top;
    }


    bottomObjectBorder(object) {
        return object.y + object.height - object.offset.bottom;
    }

    hit() {
        if (this instanceof Endboss) {
            this.energy -= 20;
            console.log("treffer");

        }
        else if ((this instanceof Character) && (this.energy >= 10 && !this.isHurt())) 
        {
            console.log(this.isHurt())
            this.energy -= 10;
            this.lastHit = new Date().getTime();
        }
        
        else if (this instanceof Character && this.energy <= 0){
            this.energy = 0;
        }

        else if(this instanceof Chicken || this instanceof SmallChicken){
        console.log("LOOOSER")
    }
        
        this.lastHit = new Date().getTime();
        console.log("ELSE HIT")
    }

    bottleHitEnemy() {
        this.energy -= 25;
    }


    pickUp() {
        if (this.bottles <= 4) {
            this.bottles += 1;
        } else {
            return false;
        }
    }


    pickUpCoins() {
        this.coins ++;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 0.5;
    }


    isDead() {
        return this.energy == 0;
    }



    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft(speedX) {
        if(runWorld){
            this.x -= speedX;
        }

    }


    playAnimation(IMAGES) {
        this.IMAGES = IMAGES;
        let i = this.currentImage % IMAGES.length
        let path = IMAGES[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    playAnimationHead(IMAGES) {
        this.IMAGES = IMAGES;
        let i = this.currentImageHead % IMAGES.length
        let path = IMAGES[i];
        this.img = this.imageCache2[path];
        this.currentImagHead++;
    };


    jump() {
        this.speedY = 15;
    }











}