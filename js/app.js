const BLOCK = {
  DISTANCE_HORIZONTAL: 102,
  DISTANCE_VERTICAL: 85,
  MIDDLE_OF_BLOCK_VERTICAL: 85 / 2
};

const ENEMY = { AMOUNT: 6 };

const PLAYER_MOVEMENT = {
  LEFT: "left",
  UP: "up",
  RIGHT: "right",
  DOWN: "down"
};

function generateRandom(start, end) {
  return Math.floor(Math.random() * end) + start;
}

function getPositionFromMiddleOfBlock(positionY) {
  return positionY * BLOCK.DISTANCE_VERTICAL - BLOCK.MIDDLE_OF_BLOCK_VERTICAL;
}

function generateEnemies(amount) {
  const enemy = {};
  for (let i = 0; i < amount; i++) {
    enemy[i] = new Enemy(generateRandom(1, 3));
    allEnemies.push(enemy[i]);
  }
}

function isInRightBoundary(positionX, offset = 0) {
  const rightBoundary = (numCols - 1) * BLOCK.DISTANCE_HORIZONTAL + offset;

  return positionX < rightBoundary;
}

document.addEventListener("keyup", function(e) {
  const allowedKeys = {
    37: PLAYER_MOVEMENT.LEFT,
    38: PLAYER_MOVEMENT.UP,
    39: PLAYER_MOVEMENT.RIGHT,
    40: PLAYER_MOVEMENT.DOWN
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

const allEnemies = [];
const player = new Player();

Resources.onReady(function() {
  generateEnemies(ENEMY.AMOUNT);
});
