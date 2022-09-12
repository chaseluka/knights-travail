import Knight from '../scripts/knights';

describe('get position coords on board', () => {
  const knight = new Knight(null);
  it('get first coord in board', () => {
    expect(knight.board[0]).toStrictEqual([0, 0]);
  });
  it('get a random coord in the board', () => {
    expect(knight.board[13]).toStrictEqual([5, 1]);
  });
  it('get last coord in the board', () => {
    expect(knight.board[63]).toStrictEqual([7, 7]);
  });
});
describe('recursive functions work correctly', () => {
  const knight = new Knight(null);
  it('create a list of all posible moves on board', () => {
    expect(knight.moves.position).toStrictEqual([0, 0]);
  });
  it('get a position far down the board', () => {
    const node = knight.findNode(knight.moves, [1, 3]);
    expect(knight.moves.right3.left4).toBe(node);
  });
  it('find shortest route to a node', () => {
    expect(knight.traverse(knight.moves, 0, Infinity, [3, 4])).toBe(3);
  });
  it('find a specific node', () => {
    const node = knight.findNode(knight.moves, [2, 1]);
    expect(node.position).toStrictEqual([2, 1]);
  });
  it('Knights travails works with a short distance', () => {
    expect(knight.knightsTravails([0, 0], [2, 1])).toBe(1);
  });
  it('Knights travails works with a long distance', () => {
    expect(knight.knightsTravails([0, 0], [7, 7])).toBe(6);
  });
  it('Knights travails works with a random starting node', () => {
    expect(knight.knightsTravails([1, 3], [7, 7])).toBe(4);
  });
});
