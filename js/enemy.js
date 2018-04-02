// Enemies our player must avoid

class Enemy {
  constructor({ positionX, positionY, speed }) {
    this.x = positionX;
    this.y = positionY;
    this.speed = speed;

    this.sprite = "images/enemy-bug.png";
  }

  update(dt) {
    const moveEnemy = this.x + this.speed * dt;
    const initialPosition = -BLOCK.DISTANCE_HORIZONTAL;

    this.x = isInRightBoundary(this.x, Math.abs(initialPosition))
      ? moveEnemy
      : initialPosition;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
