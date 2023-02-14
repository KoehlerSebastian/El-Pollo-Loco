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


    SOUND_GAME_WORLD = new Audio("./audio/bgMusic.mp3")
    SOUND_GAME_LOST = new Audio("./audio/youLose.mp3");
    SOUND_PICKUP_COIN = new Audio("./audio/pickupcoin.mp3");
    SOUND_PICKUP_BOTTLE = new Audio("./audio/pickupbottle.mp3");

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.slowIntervalls();
        this.playGameSound();

    }

    /**
    Plays the game sound if the sound is active.
    */
    playGameSound() {
        if (soundActive) {
            this.SOUND_GAME_WORLD.play();
            this.SOUND_GAME_WORLD.loop = true;
            this.SOUND_GAME_WORLD.volume = 0.5;
        }
    }

    /**
     * Sets the current world for the character
     */
    setWorld() {
        this.character.world = this;
    };

    /**
     * Runs the game loop at a fixed interval and checks for collisions, thrown objects and thrown objects hitting the ground
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkThrownObjectHitGround();
        }, 50);
    };

    /**
     * Runs slower game loop at a fixed interval and checks distance between the character and end boss, end boss actions and game status
     */
    slowIntervalls() {
        setInterval(() => {
            this.getDistance();
            this.checkEndbossActions(this.getDistance());
            this.checkGameStatus();
        }, 250);
    }
    /**
     * Calculates the distance between the end boss and the character
     * @return {number} The distance between the end boss and the character
     */
    getDistance() {
        let distance = (this.level.endboss[0].x - this.character.x)
        return distance;
    }




    /**
     * Checks for collisions between the character and various game elements, such as enemies, bottles, and coins.
     * Calls methods to handle collisions as appropriate.
     */

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


    /**
     * Checks for collisions between the character and enemy chickens, handles collision events.
     */
    isCollidingChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !this.character.isDead()) {
                this.character.hit()
                this.statusBar.setPercentage(this.character.energy);
            } else if (this.character.isColliding(enemy) && this.character.isAboveGround() && !this.character.isDead()) {
                let i = this.level.enemies.indexOf(enemy);
                let deadEnemyChicken = new DeadChicken(enemy.x, enemy.y);
                this.level.enemies.splice(i, 1);
                this.deadChicken.push(deadEnemyChicken);
            }
        });
    }


    /**
     * Checks for collisions between the character and small chickens, handles collision events.
     */
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


    /**
     * Checks for collisions between the character and the end boss, handles collision events.
     */
    isCollidingEndboss() {
        if (this.character.isColliding(this.level.endboss[0])) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        }
    }




    /**
     * Checks collision between the character and bottles in the level, and picks them up if possible.
     */
    isCollidingBottles() {
        this.level.bottles.forEach((bottles) => {
            if (this.character.isColliding(bottles) && this.character.bottles <= 4) {
                let i = this.level.bottles.indexOf(bottles);
                this.level.bottles.splice(i, 1);
                this.character.pickUp();
                this.bottleBar.bottlesLootet(this.character.bottles);
                if (soundActive) {
                    this.SOUND_PICKUP_BOTTLE.play();
                }
            };
        });
    }
    /**
     * Checks collision between the character and coins in the level, and picks them up if possible.
     */
    isCollidingCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                let i = this.level.coins.indexOf(coin);
                this.level.coins.splice(i, 1);
                this.character.pickUpCoins();
                this.coinBar.coinsLootet(this.character.coins);
                if (soundActive) {
                    this.SOUND_PICKUP_COIN.play();
                    this.SOUND_PICKUP_COIN.volume = 0.5;
                }
            }
        })
    }


    /**
     * Checks if the user can throw a bottle, and if so, adds the bottle to the throwObjects array and updates the number of bottles left.
     * @returns {boolean} - true if the time passed since the last throw is less than the input milliseconds, false otherwise.
     * @param {number} ms - the minimum time in seconds that must pass before another bottle can be thrown.
     */
    checkThrowObjects() {
        if ((this.keyboard.D && this.character.otherDirection === false) && (this.character.bottles > 0 && !this.character.isDead()) && (!this.checkTimePassed(0.3))) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 60);
            this.throwObjects.push(bottle);
            this.character.bottles--;
            this.bottleBar.bottlesLootet(this.character.bottles);
            this.lastThrow = new Date().getTime();
        }
    }

    /**
    Checks if a certain amount of time has passed since the last throw.
    @param {number} ms - The amount of time in milliseconds to check against.
    @returns {boolean} - True if the time passed is less than the specified time in milliseconds, false otherwise.
    */
    checkTimePassed(ms) {
        let timepassed = new Date().getTime() - this.lastThrow;
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < ms;
    }

    /**
     * Checks the game status and stops the level if necessary.
     */

    checkGameStatus() {
        this.setGameIsLost();
        this.setGameIsOver();
        this.stopLevel();
    }
    /**
     * Sets the `gameIsLost` property to `true` if the character is dead, and plays a sound effect.
     */
    setGameIsLost() {
        if (this.character.energy > 0) {
            this.gameIsLost = false;
        } else if (this.character.isDead()) {
            this.gameIsLost = true;
            if (soundActive) {
                this.SOUND_GAME_LOST.play();
            }
        }
    }
    /**
     * Sets the `gameIsOver` property to `true` if the end boss has no energy left.
     */
    setGameIsOver() {
        if (this.level.endboss[0].energy > 0) {
            this.gameIsOver = false;
        } else {
            this.gameIsOver = true;
        }
    }
    /**
     * Stops the level if the game is lost or over by reloading the page after a delay of 3 seconds.
     */
    stopLevel() {
        if (this.gameIsLost || this.gameIsOver) {
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }


    /**
     * Checks if any throw object collides with any enemy and updates the game accordingly.
     * @param {Enemy[]} typeOfEnemy - The array of enemies to check for collisions with throw objects.
     */
    checkThrownObjectHitEnemy(typeOfEnemy) {
        this.throwObjects.forEach((bottle) => {
            typeOfEnemy.forEach((enemy, i) => {
                if (bottle.isColliding(enemy) && typeOfEnemy == endboss) {
                    this.bottleSplashed(bottle);
                    enemy.hit();
                    this.endbossLifebar.setPercentage(this.level.endboss[0].energy);
                } else if (bottle.isColliding(enemy) && typeOfEnemy != endboss) {
                    this.bottleSplashed(bottle);
                    this.enemyIsDead(typeOfEnemy, i);
                }
            })
        });
    }


    /**
     * Removes the enemy at the given index from the level and adds a dead enemy to the game.
     * @param {Enemy[]} typeOfEnemy - The type of enemy to remove from the level.
     * @param {number} i - The index of the enemy to remove from the level.
     */
    enemyIsDead(typeOfEnemy, i) {
        if (typeOfEnemy == smallChicken) {
            let deadEnemySmallChicken = new DeadSmallChicken(smallChicken.x, smallChicken.y);
            this.level.smallChicken.splice(i, 1);
            this.deadSmallChicken.push(deadEnemySmallChicken);
        } else {
            let deadEnemyChicken = new DeadChicken(enemies.x, enemies.y);
            this.level.enemies.splice(i, 1);
            this.deadChicken.push(deadEnemyChicken);
        }

    }



    /**
    * Checks if any throw object has hit the ground and updates the game accordingly.
    */

    checkThrownObjectHitGround() {
        this.throwObjects.forEach((bottle) => {
            if (!bottle.isAboveGround()) {
                console.log("hit");
                this.bottleSplashed(bottle);
            }
        })
    }

    /**
     * Creates a bottle splash effect at the position of the given bottle and removes the bottle from the game.
     * @param {Bottle} bottle - The bottle to create a splash effect for and remove from the game.
     */
    bottleSplashed(bottle) {
        let bottleSplashed = new BottleSplash(bottle.x, bottle.y);
        this.thrownObjects.push(bottleSplashed);
        this.throwObjects = [];
        setTimeout(() => this.thrownObjects.splice(bottleSplashed), 500);
    }


    /**
     * Checks if the end boss can attack or walk based on the distance from the character.
     * @param {number} distance - The distance between the end boss and the character.
     */
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
        } else {
            this.level.endboss[0].characterIsNearby = false;
        }

    }

    /**
     * Draws the game canvas and adds all objects to the map
     */
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
    /**
     * Adds objects to the map
     * @param {Array} objects - The objects to add to the map
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }



    /**
    
    Add the provided map object to the canvas and flip the image if necessary.
    
    @param {Object} mo - The map object to add to the canvas.
    */
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

    /**
     * Flip image horizontally and update object x-coordinate accordingly
     * @param {Object} mo - The object to be flipped
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    /**
     * Flip image back to its original orientation and update object x-coordinate accordingly
     * @param {Object} mo - The object to be flipped back
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}
