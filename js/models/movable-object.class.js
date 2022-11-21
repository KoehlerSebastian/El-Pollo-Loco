class MovableObject {
    x = 60;
    y = 300;
    img;
    height = 150;
    width = 100;







    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("Moving right");
        
    }

    moveLeft(){
        console.log("Chicken move Left");
    }

}