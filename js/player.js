// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function() {
  this.x = 2 * BLOCK.DISTANCE_HORIZONTAL;
  this.y = getPositionFromMiddleOfBlock(5);

  this.sprite = "images/char-boy.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys) {
  switch (allowedKeys) {
    case PLAYER_MOVEMENT.LEFT:
      this.moveLeft();
      break;
    case PLAYER_MOVEMENT.RIGHT:
      this.moveRight();
      break;
    case PLAYER_MOVEMENT.UP:
      this.moveUp();
      break;
    case PLAYER_MOVEMENT.DOWN:
      this.moveDown();
      break;

    default:
      break;
  }
};

Player.prototype.moveLeft = function() {
  const leftBoundaries = 0;

  const isInLeftBoundaries = this.x > leftBoundaries;
  if (isInLeftBoundaries) {
    this.x = this.x - BLOCK.DISTANCE_HORIZONTAL;
  }
};

Player.prototype.moveRight = function() {
  const rightBoundaries = (numCols - 1) * BLOCK.DISTANCE_HORIZONTAL;
  const isInRightBoundaries = this.x < rightBoundaries;

  if (isInRightBoundaries) {
    this.x = this.x + BLOCK.DISTANCE_HORIZONTAL;
  }
};

Player.prototype.moveUp = function() {
  const topBoundaries = BLOCK.MIDDLE_OF_BLOCK_VERTICAL;

  const isInTopBoundaries = this.y >= topBoundaries;

  if (isInTopBoundaries) {
    this.y = this.y - BLOCK.DISTANCE_VERTICAL;
  }
};

Player.prototype.moveDown = function() {
  const bottomBoundaries =
    BLOCK.DISTANCE_VERTICAL * (numCols - 1) + BLOCK.MIDDLE_OF_BLOCK_VERTICAL;

  const isInBottomBoundaries = this.y < bottomBoundaries;

  if (isInBottomBoundaries) {
    this.y = this.y + BLOCK.DISTANCE_VERTICAL;
  }
};
