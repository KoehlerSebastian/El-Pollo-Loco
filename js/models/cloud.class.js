class Cloud extends MovableObject{
y = 0;
height = 200;
width = 300



    constructor(){
        super().loadImage("./img/5_background/layers/4_clouds/1.png");
        this.x = 250 + Math.floor(Math.random() * 1500);

        this.animate();

    }


    animate() {
        this.moveLeft();
    }

}