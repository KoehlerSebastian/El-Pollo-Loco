class World {
    character = new Character();
    throwObjects = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    };

    run(){
        setInterval(() => {
            this.checkCollisions()
            this.checkThrowObjects()
        }, 200);
    }

    checkCollisions(){
        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy)){

                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
                console.log("Collision with Character", enemy, "Engergie = ", this.character.energy);
            }
    
        });
    }

    checkThrowObjects(){
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 60);
            this.throwObjects.push(bottle);
        }
    }

    draw() {
        // Canvas wird gelöscht
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        // ------ Space for fixed objects ------
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);




        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwObjects);
        this.ctx.translate(-this.camera_x, 0);



        let self = this;
        // Draw() wird immer wieder aufgerufen
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}