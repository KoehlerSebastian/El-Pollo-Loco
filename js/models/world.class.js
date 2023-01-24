class World {
    character = new Character();
    throwObjects = [];
    thrownObjects = [];
    deadChicken = [];
    deadSmallChicken = [];
    gameIsOver = false;
    gameIsLost = false;
    gameOver = new GameOver();
    gameLost = new GameLost();
    level = level1;
    canvas;
    ctx;
    keyboard;
    lastThrow = 0;
    camera_x = -100;
    endbossLifebar = new EndbossLifebar();
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();

    SOUND_GAME_LOST = new Audio("./audio/youLose.mp3");
    SOUND_PICKUP_COIN = new Audio("./audio/pickupcoin.mp3");
    SOUND_PICKUP_BOTTLE = new Audio("./audio/pickupbottle.mp3");

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawWorld();
        this.setWorld();
        this.run();
        this.slowIntervalls();

    }

    drawWorld() {
        if (level1.runWorld) {
            this.draw();
        }
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


    slowIntervalls() {
        setInterval(() => {
            this.getDistance();
            this.checkEndbossActions(this.getDistance());
            this.checkGameStatus();
        }, 250);
    }

    getDistance() {
        let distance = (this.level.endboss[0].x - this.character.x)
        return distance;
    }





    checkCollisions() {
        this.isCollidingChicken();
        this.isCollidingSmallChicken();
        this.isCollidingBottles();
        this.isCollidingCoins();
        this.isCollidingEndboss();
        this.checkThrownObjectHitEnemy(this.level.enemies);
        this.checkThrownObjectHitEnemy(this.level.smallChicken);
        this.checkThrownObjectHitEnemy(this.level.endboss);
    };



    isCollidingChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !this.character.isDead()) {
                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
            } else if (this.character.isColliding(enemy) && this.character.isAboveGround() && !this.character.isDead()) {
                let i = this.level.enemies.indexOf(enemy);
                // this.deadChicken(enemy);
                let deadEnemyChicken = new DeadChicken(enemy.x, enemy.y);
                this.level.enemies.splice(i, 1);
                this.deadChicken.push(deadEnemyChicken);
            }
        });
    }





    isCollidingSmallChicken() {
        this.level.smallChicken.forEach((smallChicken) => {
            if (this.character.isColliding(smallChicken) && !this.character.isAboveGround()) {
                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
            } else if (this.character.isColliding(smallChicken) && this.character.isAboveGround()) {
                let i = this.level.smallChicken.indexOf(smallChicken);
                let deadEnemySmallChicken = new DeadSmallChicken(smallChicken.x, smallChicken.y);
                this.level.smallChicken.splice(i, 1);
                this.deadSmallChicken.push(deadEnemySmallChicken);
            }
        });
    }



    isCollidingEndboss() {
        if (this.character.isColliding(this.level.endboss[0])) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        }
    }





    isCollidingBottles() {
        this.level.bottles.forEach((bottles) => {
            if (this.character.isColliding(bottles) && this.character.bottles <= 4) {
                let i = this.level.bottles.indexOf(bottles);
                this.level.bottles.splice(i, 1);
                this.character.pickUp();
                this.bottleBar.bottlesLootet(this.character.bottles);
                this.SOUND_PICKUP_BOTTLE.play();
            };
        });
    }

    isCollidingCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                let i = this.level.coins.indexOf(coin);
                this.level.coins.splice(i, 1);
                this.character.pickUpCoins();
                this.coinBar.coinsLootet(this.character.coins);
                this.SOUND_PICKUP_COIN.play();

            }
        })
    }



    checkThrowObjects() {
        if ((this.keyboard.D && this.character.otherDirection === false) && (this.character.bottles > 0 && !this.character.isDead()) && (!this.checkTimePassed(0.3))) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 60);
            this.throwObjects.push(bottle);
            this.character.bottles--;
            this.bottleBar.bottlesLootet(this.character.bottles);
            this.lastThrow = new Date().getTime();
        }
    }

    checkTimePassed(ms) {
        let timepassed = new Date().getTime() - this.lastThrow;
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < ms;
    }


    checkGameStatus() {
        this.setGameIsLost();
        this.setGameIsOver();
        this.stopLevel();
    }

    setGameIsLost() {
        if (this.character.energy > 0) {
            this.gameIsLost = false;
        } else if (this.character.isDead()) {
            this.gameIsLost = true;
            this.SOUND_GAME_LOST.play();
        }
    }

    setGameIsOver() {
        if (this.level.endboss[0].energy > 0) {
            this.gameIsOver = false;
        } else {
            this.gameIsOver = true;
        }
    }

    stopLevel() {
        if (this.gameIsLost || this.gameIsOver) {
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }

    checkThrownObjectHitEnemy(typeOfEnemy) {
        this.throwObjects.forEach((bottle) => {
            typeOfEnemy.forEach((enemy) => {
                // let indexOfEnemy = this.level.enemies.indexOf(enemy); 
                if (bottle.isColliding(enemy)) {
                    this.bottleSplashed(bottle);
                    enemy.hit();
                    this.endbossLifebar.setPercentage(this.level.endboss[0].energy);
                }
            })
        });
    }



    checkThrownObjectHitGround() {
        this.throwObjects.forEach((bottle) => {
            if (!bottle.isAboveGround()) {
                console.log("hit");
                this.bottleSplashed(bottle);
            }
        })
    }


    bottleSplashed(bottle) {
        let bottleSplashed = new BottleSplash(bottle.x, bottle.y);
        this.thrownObjects.push(bottleSplashed);
        this.throwObjects = [];
        //sound einfügen
        setTimeout(() => this.thrownObjects.splice(bottleSplashed), 500);
    }



    checkEndbossActions(distance) {
        this.checkEndbossCanAttack(distance);
        this.checkEndbossCanWalk(distance);
    };




    checkEndbossCanAttack(distance) {
        if (distance <= 90) {
            this.level.endboss[0].AttackCharacter = true;
        } else {
            this.level.endboss[0].AttackCharacter = false;
        }
    }

    checkEndbossCanWalk(distance) {
        if (distance <= 600 && distance > 60) {
            this.level.endboss[0].characterIsNearby = true;
        }else{
            this.level.endboss[0].characterIsNearby = false;
        }

        }
    


    draw() {
        // Canvas wird gelöscht
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        // ------ Space for fixed objects ------
        this.ctx.translate(-this.camera_x, 0);
        if (this.gameIsOver) {
            this.addToMap(this.gameOver);
        }

        if (this.gameIsLost) {
            this.addToMap(this.gameLost);
        }

        this.addToMap(this.statusBar);
        if (this.level.endboss[0].characterIsNearby) {
            this.addToMap(this.endbossLifebar);
        }
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);




        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.smallChicken);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.deadChicken);
        this.addObjectsToMap(this.deadSmallChicken);
        this.addObjectsToMap(this.throwObjects);
        this.addObjectsToMap(this.thrownObjects);
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
        // mo.drawFrame(this.ctx);
        // mo.drawFrameChickenTop(this.ctx);


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
