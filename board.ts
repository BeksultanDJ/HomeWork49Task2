const createChessboard = () => {
    const size = 8;
    const whiteSquare = '  ';
    const blackSquare = '██';

    let alternatingRow = '';
    for (let i = 0; i < size / 2; i++) {
        alternatingRow += whiteSquare + blackSquare;
    }

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            console.log(alternatingRow);
        } else {
            console.log(alternatingRow.slice(2));
        }
    }
}

createChessboard();
