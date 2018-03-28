var allEnemies = [];
var player = new Player();

function generateRandom(start, end) {
  return Math.floor(Math.random() * end) + start;
}

function generateEnemies(amount) {
  enemy = {};
  for (var i = 0; i < amount; i++) {
    enemy[i] = new Enemy({ positionY: generateRandom(1, 3) });
    allEnemies.push(enemy[i]);
  }
}
Resources.onReady(function(ready) {
  generateEnemies(6);
});

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
