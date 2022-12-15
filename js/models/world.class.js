class World {
    character = new Character();
    throwObjects = [];
    thrownObjects = [];
    deadChicken = [];
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
            this.checkThrownObjectHitGround();
        }, 50);
    };

    checkCollisions() {
        this.isCollidingChicken();
        this.isCollidingBottles();
        this.isCollidingCoins();
        this.checkThrownObjectHitEnemy();
    };



    isCollidingChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
            }else if(this.character.isColliding(enemy) && this.character.isAboveGround()){
                this.deadEnemy(enemy);
            }     
        });
    }



    
    deadEnemy(enemy){
        let i = this.level.enemies.indexOf(enemy);
        let deadEnemyChicken = new DeadChicken(enemy.x, enemy.y);
        this.level.enemies.splice(i, 1);
        this.deadChicken.push(deadEnemyChicken);
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


    checkThrownObjectHitEnemy(){
        this.throwObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                // let indexOfEnemy = this.level.enemies.indexOf(enemy); 
                if (bottle.isColliding(enemy)) {
                    this.bottleSplashed(bottle);
                }
            })
        });
    }

    checkThrownObjectHitGround(){
        this.thrownObjects.forEach((bottle) =>{
            if(!bottle.isAboveGround()){
                this.bottleSplashed(bottle);
            }
        })
    }


    bottleSplashed(bottle){
        let bottleSplashed = new BottleSplash(bottle.x, bottle.y);
        this.thrownObjects.push(bottleSplashed);
        this.throwObjects = [];
        //sound einfügen
        setTimeout(() => this.thrownObjects.splice(bottleSplashed), 500);
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
        this.addObjectsToMap(this.thrownObjects);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.deadChicken);
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


}