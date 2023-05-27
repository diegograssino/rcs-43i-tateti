// 1 - Inicializo todo lo que necesite
let player = 'X';
let winner = '';
let board = [];
// Combinaciones ganadoras:
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// 0, 3, 6
// 1, 4, 7
// 2, 5, 8
// 0, 4, 8
// 2, 4, 6
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// 2- Selecciono elementos y agrego listeners
const squares =
  document.querySelectorAll('.squares');
// squares = [ 	"0", "1", "2",
// 							"3", "4", "5",
// 							"6", "7", "8" ]
squares.forEach((square, i) => {
  square.addEventListener('click', () =>
    play(square, i)
  );
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () =>
  resetGame()
);

const result = document.getElementById('result');

// 3 - Trabajo con la logica
const play = (square, i) => {
  // Agrego validacion para saber si el square esta vacio
  if (square.innerHTML === '' && winner === '') {
    // Inyecto el player actual
    square.innerHTML = player;
    // Guardo en board la jugada
    board[i] = player;
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
    // player === 'X'
    //   ? (player = 'O')
    //   : (player = 'X');

    // Logica de fin de juego
    // if (
    //   board[0] === board[1] &&
    //   board[1] === board[2]
    // ) {
    //   console.log('El ganador es ' + board[0]);
    // }

    WINNING_COMBOS.forEach(combo => {
      if (
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]] &&
        board[combo[0]]
      ) {
        winner = board[combo[0]];
        result.innerText =
          'El ganador es ' +
          board[combo[0]] +
          '!';
      }
    });
  }
};

// 4 - Reviso si hay que limpiar/ reinicializar alguna variable
const resetGame = () => {
  squares.forEach(
    square => (square.innerHTML = '')
  );
  player = 'X';
  winner = '';
  board = [];
  result.innerText = '';
};
