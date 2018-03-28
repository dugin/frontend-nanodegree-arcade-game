// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {};

Player.prototype.handleInput = function(allowedKeys) {};
