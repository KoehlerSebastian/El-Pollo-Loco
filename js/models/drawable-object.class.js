class DrawableObject{
    img;
    imageCache = [];
    imageCache2 = [];
    x = 60;
    y = 270;
    height = 150;
    width = 100;


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
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
    drawFrameChickenTop(ctx){
        if(this instanceof Chicken){
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeSytle = "yellow";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    loadImages2(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache2[path] = img;
        });

    }

}