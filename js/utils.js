function generateRandom(start, end) {
  return Math.floor(Math.random() * end) + start;
}

function getPositionFromMiddleOfBlock(positionY) {
  return positionY * BLOCK.DISTANCE_VERTICAL - BLOCK.MIDDLE_OF_BLOCK_VERTICAL;
}

function generateEnemies(amount) {
  const enemies = new Array(amount);
  enemies.fill({});

  return enemies.map(() => new Enemy(setEnemyPositionAndSpeed()));
}

function setEnemyPositionAndSpeed() {
  return {
    positionX: generateRandom(0, numCols) * BLOCK.DISTANCE_HORIZONTAL,
    positionY: getPositionFromMiddleOfBlock(generateRandom(1, 3)),
    speed: generateRandom(23 - ENEMY.AMOUNT, 23) * 10
  };
}

function getPosition(positionX, positionY) {
  return {
    x: positionX / BLOCK.DISTANCE_HORIZONTAL + 1,
    y: (positionY + BLOCK.MIDDLE_OF_BLOCK_VERTICAL) / BLOCK.DISTANCE_VERTICAL + 1
  };
}

function isInRightBoundary(positionX, offset = 0) {
  const rightBoundary = (numCols - 1) * BLOCK.DISTANCE_HORIZONTAL + offset;

  return positionX < rightBoundary;
}

function isInLeftBoundary(positionX) {
  return positionX > 0;
}

function isInBottomBoundary(positionY) {
  const bottomBoundary = BLOCK.DISTANCE_VERTICAL * (numCols - 1) + BLOCK.MIDDLE_OF_BLOCK_VERTICAL;

  return positionY < bottomBoundary;
}

function isInTheWater(positionY) {
  return positionY < BLOCK.DISTANCE_VERTICAL + BLOCK.MIDDLE_OF_BLOCK_VERTICAL;
}
