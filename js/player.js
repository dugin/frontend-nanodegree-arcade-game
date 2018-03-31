// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function() {
  this.init();

  this.sprite = "images/char-boy.png";
};

Player.prototype.init = function() {
  this.x = 2 * BLOCK.DISTANCE_HORIZONTAL;
  this.y = getPositionFromMiddleOfBlock(5);
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
  const leftBoundary = 0;

  const isInLeftBoundary = this.x > leftBoundary;
  if (isInLeftBoundary) {
    this.x = this.x - BLOCK.DISTANCE_HORIZONTAL;
  }
};

Player.prototype.moveRight = function() {
  console.log(isInRightBoundary(this.x));
  if (isInRightBoundary(this.x)) {
    this.x = this.x + BLOCK.DISTANCE_HORIZONTAL;
  }
};

Player.prototype.moveUp = function() {
  const topBoundary = BLOCK.MIDDLE_OF_BLOCK_VERTICAL;

  const isInTopBoundary = this.y >= topBoundary;

  if (isInTopBoundary) {
    this.y = this.y - BLOCK.DISTANCE_VERTICAL;
  }

  if (this.y < BLOCK.DISTANCE_VERTICAL + topBoundary) {
    setTimeout(() => {
      this.init();
    }, 500);
  }
};

Player.prototype.moveDown = function() {
  const bottomBoundary =
    BLOCK.DISTANCE_VERTICAL * (numCols - 1) + BLOCK.MIDDLE_OF_BLOCK_VERTICAL;

  const isInBottomBoundary = this.y < bottomBoundary;

  if (isInBottomBoundary) {
    this.y = this.y + BLOCK.DISTANCE_VERTICAL;
  }
};
