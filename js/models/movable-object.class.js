class MovableObject extends DrawableObject {

    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    bottles = 0;

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
        }    

         else {


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
        this.energy -= 5;

        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

 
    pickUp(){
        if (this.bottles <= 4){
        this.bottles += 1;
        console.log(this.bottles);
        }else{
            console.log("full");
        }
    }


    pickUpCoins(){
        this.coins ++;
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

    moveLeft(speedX) {
        this.x -= speedX;
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