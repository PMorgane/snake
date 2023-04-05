const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snake = new Snake(SQUARE_SIZE);
console.log(snake);

function update () {
    snake.update ();
    console.log("refresh");
    setTimeout (update, 300);
}

function start () {
    update()
}
start()