function solution(keyinput, board) {
  let startingPoint = [0, 0];
  const limitX = (board[0] - 1) / 2;
  const limitY = (board[1] - 1) / 2;

  for (let key of keyinput) {
    switch (key) {
      case 'left':
        startingPoint[0] = Math.max(startingPoint[0] - 1, -limitX);
        break;
      case 'right':
        startingPoint[0] = Math.min(startingPoint[0] + 1, limitX);
        break;
      case 'up':
        startingPoint[1] = Math.min(startingPoint[1] + 1, limitY);
        break;
      case 'down':
        startingPoint[1] = Math.max(startingPoint[1] - 1, -limitY);
        break;
    }
  }

  return startingPoint;
}