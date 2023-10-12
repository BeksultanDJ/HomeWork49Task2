function generateChessboard(size) {
    let board = '';
    const blackSquare = '██';
    const whiteSquare = '  ';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                board += blackSquare;
            }
            else {
                board += whiteSquare;
            }
        }
        board += '\n';
    }
    return board;
}
const boardSize = 4;
const chessboard = generateChessboard(boardSize);
console.log(chessboard);
export {};
