const BLOCK = {
  DISTANCE_HORIZONTAL: 102,
  DISTANCE_VERTICAL: 85,
  MIDDLE_OF_BLOCK_VERTICAL: 85 / 2
};

const ENEMY = { AMOUNT: 6 };
const PLAYER_MOVEMENT = {
  LEFT: 'left',
  UP: 'up',
  RIGHT: 'right',
  DOWN: 'down',
  disabled: false
};

document.addEventListener('keyup', e => {
  const allowedKeys = {
    37: PLAYER_MOVEMENT.LEFT,
    38: PLAYER_MOVEMENT.UP,
    39: PLAYER_MOVEMENT.RIGHT,
    40: PLAYER_MOVEMENT.DOWN
  };

  if (!PLAYER_MOVEMENT.disabled) {
    player.handleInput(allowedKeys[e.keyCode]);
  }
});

let allEnemies = [];
const player = new Player();

Resources.onReady(() => {
  allEnemies = generateEnemies(ENEMY.AMOUNT);
});
