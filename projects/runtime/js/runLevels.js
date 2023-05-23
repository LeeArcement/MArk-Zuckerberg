var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
function createSawBlade(x, y){
  var hitZoneSize = 10;
var damageFromObstacle = -90;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);

var obstacleImage = draw.bitmap("img/MinecraftArrow.png");
obstacleImage.x = x - 340;
obstacleImage.y = y - 280;
obstacleImage.scaleX = .5;
obstacleImage.scaleY = .5;
sawBladeHitZone.addChild(obstacleImage);
}
createSawBlade(400, groundY - 40);
createSawBlade(600, groundY - 70);
createSawBlade(250, groundY - 40);
/*
createSawBlade(600, groundY - 220);
createSawBlade(250, groundY - 180);
*/

function createEnemy(x, y){
var enemy = game.createGameItem("enemy", 20);
var zombie = draw.bitmap("img/Zombie.png");
zombie.x = 600;
zombie.y = 25;
enemy.addChild(zombie);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);

enemy.velocityX = -3;
enemy.onPlayerCollision = function(){
  game.changeIntegrity(-100);
}


enemy.onProjectileCollision = function(){
  enemy.shrink();
}
}
createEnemy(400, groundY - 170);
createEnemy(800, groundY - 170);
createEnemy(1200, groundY - 170);
monsterObjects = ["img/Zombie.png"];
function createReward(x, y, image){
  var reward = game.createGameItem("reward", 20);
  var monster = draw.bitmap(image);
  monster.x = -130;
  monster.y = 20;
  game.addGameItem(reward);
  reward.velocityX = -2;
  
  reward.onPlayerCollision = function(){
    game.changeIntegrity(50);
    game.increaseScore(1);
    reward.shrink();
    startLevel();
  }
  reward.onProjectileCollision = function(){
    game.changeIntegrity(50);
    game.increaseScore(1);
    reward.shrink();
    startLevel();
  }
}
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++){
        if (levelObjects[i].type === "sawblade"){
          createSawBlade(levelObjects[i].x, levelObjects[i].y);
        }
        if(levelObjects[i].type === "enemy"){
          createEnemy(levelObjects[i].x, levelObjects[i].y);
        }
        if (levelObjects[i].type === "reward"){
          createReward(levelObjects[i].x, levelObjects[i].y,monsterObjects[currentLevel]);
        }
      }



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
} 
