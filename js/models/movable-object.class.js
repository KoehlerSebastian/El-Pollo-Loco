class MovableObject {
    x = 60;
    y = 270;
    img;
    height = 150;
    width = 100;
    speed = 0.15;
    imageCache = [];
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    offsetY = 0;
    energy = 100;
    lastHit = 0;

    applyGravity(){
        setInterval(() =>{
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
        },1000/25)
    }

    isAboveGround(){
        return this.y <= 270;
    }


    draw(ctx){
        ctx = ctx;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken){
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    }

    isColliding(obj) {
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height);
}

hit() {
    this.energy -= 5;

    if (this.energy <= 0) {
        this.energy = 0;
}else {
    this.lastHit = new Date().getTime();
}
}

isHurt(){
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; //Difference in s
    console.log("Passed");
    return timepassed < 1   ;
}


isDead() {
    return this.energy == 0;
}



    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft(){
        this.x -= this.speed;
    }


    playAnimation(IMAGES){
        this.IMAGES = IMAGES;
        let i = this.currentImage % IMAGES.length
        let path = IMAGES[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    jump(){
        this.speedY = 15;
    }

}