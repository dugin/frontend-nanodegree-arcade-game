// Enemies our player must avoid

class Enemy {
  constructor(positionY) {
    this.x = generateRandom(0, 5) * BLOCK.DISTANCE_HORIZONTAL;
    this.y = getPositionFromMiddleOfBlock(positionY);
    this.speed = generateRandom(20 - ENEMY.AMOUNT, 20) * 10;

    this.sprite = "images/enemy-bug.png";
  }

  update(dt) {
    const moveEnemy = this.x + this.speed * dt;
    const initialPosition = -BLOCK.DISTANCE_HORIZONTAL;

    if (isInRightBoundary(this.x, BLOCK.DISTANCE_HORIZONTAL)) {
      this.x = moveEnemy;
    } else {
      this.x = initialPosition;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
