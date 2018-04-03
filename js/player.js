class Player {
  constructor() {
    this.init();
    this.sprite = 'images/char-boy.png';
  }

  init() {
    this.victoryAmount = 0;
    this.reset();
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
      PLAYER_MOVEMENT.disabled = true;
      setTimeout(() => {
        this.reset();
        this._setScore();
        PLAYER_MOVEMENT.disabled = false;
      }, 300);
    }

    this.y = this.y - BLOCK.DISTANCE_VERTICAL;
  }

  _moveDown() {
    if (isInBottomBoundary(this.y)) {
      this.y = this.y + BLOCK.DISTANCE_VERTICAL;
    }
  }

  _setScore() {
    this.victoryAmount++;
    setScore(getScore() + 10 * this.victoryAmount);
  }
}
