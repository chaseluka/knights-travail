/* eslint-disable operator-linebreak */
/* eslint-disable max-classes-per-file */
class Postion {
  constructor(position) {
    this.position = position;
    this.left1 = null;
    this.left2 = null;
    this.left3 = null;
    this.left4 = null;
    this.right1 = null;
    this.right2 = null;
    this.right3 = null;
    this.right4 = null;
  }
}

class Knight {
  constructor() {
    this.board = this.createBoard();
    this.moves = this.possibleMoves(this.board[0], []);
  }

  createBoard() {
    const coords = [0, 1, 2, 3, 4, 5, 6, 7];
    const board = [];
    coords.forEach((yCoord) => {
      coords.forEach((xCoord) => {
        const thisCoord = [xCoord, yCoord];
        board.push(thisCoord);
      });
    });
    return board;
  }

  nextMoves(x, y) {
    const bottomLeft = [x - 1, y - 2];
    const lowLeft = [x - 2, y - 1];
    const upLeft = [x - 2, y + 1];
    const topLeft = [x - 1, y + 2];
    const bottomRight = [x + 1, y - 2];
    const lowRight = [x + 2, y - 1];
    const upRight = [x + 2, y + 1];
    const topRight = [x + 1, y + 2];
    const array = [bottomLeft, lowLeft, upLeft, topLeft, bottomRight, lowRight, upRight, topRight];
    return array;
  }

  testArrays(x, y, testAgainst) {
    if (testAgainst[0] === x && testAgainst[1] === y) return true;
    return false;
  }

  inList(x, y, squares) {
    if (squares.length === 0) return true;
    return squares.every((obj) => obj.position[0] !== x && obj.position[1] !== y);
  }

  inBoard(x, y) {
    let foundCoord = false;
    this.board.forEach((coord) => {
      if (this.testArrays(x, y, coord)) foundCoord = true;
    });
    return foundCoord;
  }

  possibleMoves(coord, squares) {
    if (!this.inList(coord[0], coord[1], squares) || !this.inBoard(coord[0], coord[1])) return null;
    const updatedSquares = [...squares];
    const node = new Postion(coord);
    updatedSquares.push(node);

    const moves = this.nextMoves(coord[0], coord[1]);

    node.left1 = this.possibleMoves(moves[0], updatedSquares);
    node.left2 = this.possibleMoves(moves[1], updatedSquares);
    node.left3 = this.possibleMoves(moves[2], updatedSquares);
    node.left4 = this.possibleMoves(moves[3], updatedSquares);
    node.right1 = this.possibleMoves(moves[4], updatedSquares);
    node.right2 = this.possibleMoves(moves[5], updatedSquares);
    node.right3 = this.possibleMoves(moves[6], updatedSquares);
    node.right4 = this.possibleMoves(moves[7], updatedSquares);
    return node;
  }

  traverse(node, currCount, lowCount, end) {
    if (node === null || currCount > lowCount) return Infinity;
    if (this.testArrays(end[0], end[1], node.position)) return currCount;
    let shortestRoute = lowCount;
    const left1 = this.traverse(node.left1, currCount + 1, shortestRoute, end);
    if (left1 < shortestRoute) shortestRoute = left1;
    const left2 = this.traverse(node.left2, currCount + 1, shortestRoute, end);
    if (left2 < shortestRoute) shortestRoute = left2;
    const left3 = this.traverse(node.left3, currCount + 1, shortestRoute, end);
    if (left3 < shortestRoute) shortestRoute = left3;
    const left4 = this.traverse(node.left4, currCount + 1, shortestRoute, end);
    if (left4 < shortestRoute) shortestRoute = left4;
    const right1 = this.traverse(node.right1, currCount + 1, shortestRoute, end);
    if (right1 < shortestRoute) shortestRoute = right1;
    const right2 = this.traverse(node.right2, currCount + 1, shortestRoute, end);
    if (right2 < shortestRoute) shortestRoute = right2;
    const right3 = this.traverse(node.right3, currCount + 1, shortestRoute, end);
    if (right3 < shortestRoute) shortestRoute = right3;
    const right4 = this.traverse(node.right4, currCount + 1, shortestRoute, end);
    if (right4 < shortestRoute) shortestRoute = right4;
    return shortestRoute;
  }

  findNode(node, end) {
    if (node === null) return null;
    if (this.testArrays(end[0], end[1], node.position)) return node;
    const left1 = this.findNode(node.left1, end);
    if (left1 !== null) return left1;
    const left2 = this.findNode(node.left2, end);
    if (left2 !== null) return left2;
    const left3 = this.findNode(node.left3, end);
    if (left3 !== null) return left3;
    const left4 = this.findNode(node.left4, end);
    if (left4 !== null) return left4;
    const right1 = this.findNode(node.right1, end);
    if (right1 !== null) return right1;
    const right2 = this.findNode(node.right2, end);
    if (right2 !== null) return right2;
    const right3 = this.findNode(node.right3, end);
    if (right3 !== null) return right3;
    const right4 = this.findNode(node.right4, end);
    if (right4 !== null) return right4;
    return null;
  }

  knightsTravails(start, end) {
    const startingNode = this.findNode(this.moves, start);
    return this.traverse(startingNode, 0, Infinity, end);
  }
}

export default Knight;
