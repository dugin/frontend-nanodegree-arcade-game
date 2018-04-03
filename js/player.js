class Player {
  constructor() {
    this.reset();

    this.sprite = "images/char-boy.png";
  }

  getPosition() {
    return getPosition(this.x, this.y);
  }

  update() {
    switch (this.movementDirection) {
      case PLAYER_MOVEMENT.LEFT:
        this._moveLeft();
        break;
      case PLAYER_MOVEMENT.RIGHT:
        this._moveRight();
        break;
      case PLAYER_MOVEMENT.UP:
        this._moveUp();
        break;
      case PLAYER_MOVEMENT.DOWN:
        this._moveDown();
        break;

      default:
        break;
    }

    this.movementDirection = null;
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(allowedKeys) {
    this.movementDirection = allowedKeys;
  }

  reset() {
    this.x = 2 * BLOCK.DISTANCE_HORIZONTAL;
    this.y = getPositionFromMiddleOfBlock(5);
  }

  _moveLeft() {
    if (isInLeftBoundary(this.x)) {
      this.x = this.x - BLOCK.DISTANCE_HORIZONTAL;
    }
  }

  _moveRight() {
    if (isInRightBoundary(this.x)) {
      this.x = this.x + BLOCK.DISTANCE_HORIZONTAL;
    }
  }

  _moveUp() {
    if (isInTheWater(this.y)) {
      setTimeout(() => {
        this.reset();
      }, 300);
    }

    if (isInTopBoundary(this.y)) {
      this.y = this.y - BLOCK.DISTANCE_VERTICAL;
    }
  }

  _moveDown() {
    if (isInBottomBoundary(this.y)) {
      this.y = this.y + BLOCK.DISTANCE_VERTICAL;
    }
  }
}
