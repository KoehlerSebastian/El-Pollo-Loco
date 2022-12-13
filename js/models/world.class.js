class World {
    character = new Character();
    throwObjects = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();

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

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 50);
    };

    checkCollisions() {
        this.isCollidingChicken();
        this.isCollidingBottles();
        this.isCollidingCoins();
    };



    isCollidingChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                let i = this.level.enemies.indexOf(enemy);
                // this.level.enemies.splice(i, 1);
                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
                console.log("Collision with Character", enemy, "Engergie = ", this.character.energy);
            }else if(this.character.isColliding(enemy) && this.character.isAboveGround()){
                let i = this.level.enemies.indexOf(enemy);
               console.log("TOT")
               this.level.enemies.splice(i, 1);
            }
            
        });
    }


    isCollidingBottles() {
        this.level.bottles.forEach((bottles) => {
            if (this.character.isColliding(bottles) && this.character.bottles <= 4) {
                let i = this.level.bottles.indexOf(bottles);
                this.level.bottles.splice(i, 1);
                this.character.pickUp();
                this.bottleBar.bottlesLootet(this.character.bottles);
            };
        });
    }

    isCollidingCoins() {

    }


    checkThrowObjects() {
        if (this.keyboard.D && (this.character.bottles > 0)) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 60);
            this.throwObjects.push(bottle);
            this.character.bottles -=1;
            this.bottleBar.bottlesLootet(this.character.bottles);
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
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
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
        mo.drawFrameChickenTop(this.ctx);


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


    CheckJumpOnEnemy(){
    this.level.enemies.forEach(chicken => {
        if(this.canJumpOnEnemy(chicken)){
            console.log("CHICKEN TOT");

        }
    });
    }

    canJumpOnEnemy(enemy){
        return this.character.isColliding(enemy) &&
        this.character.isAboveGround();
    }





}