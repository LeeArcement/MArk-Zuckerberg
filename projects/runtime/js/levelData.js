var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = /* [
      {
        name: "wave1",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 300, y: groundY - 170},
          { type: "sawblade", x: 600, y: groundY - 170},
          { type: "sawblade", x: 350, y: groundY - 170},
          { type: "reward", x: 2000, y: groundY - 150},
        ],
      }, 
      {
        name: "wave2",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 250, y: groundY - 170 },
          { type: "sawblade", x: 200, y: groundY - 130 },
          { type: "sawblade", x: 500, y: groundY - 130},
          { type: "enemy", x: 40, y: groundY - 80},
          { type: "enemy", x: 60, y: groundY - 100},
          { type: "reward", x: 2000, y: groundY - 100},
        ],
      },
    ]; */
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
