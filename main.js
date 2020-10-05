var canvas = document.getElementById('canvas')
var canvasContext = canvas.getContext("2d")
var playerScore = document.getElementById("playerScore")
var highScore = document.getElementById("highScore")

var coords = 15

var snake = {
    // snake body cords
    body: [
        { x: 150, y: 300 },
        { x: 135, y: 300 },
        { x: 120, y: 300 },
        { x: 105, y: 300 }
    ]
}

var apple = {
    x: multiple(15, canvas.width - 15),
    y: multiple(15, canvas.height - 15)
}
let dir;

window.onload = function () {
    // debugger


    var fps = 15

    setInterval(function () {
        createCanvas();
        drawApple(apple.x, apple.y)
        drawSnake(snake)
        createSnakeCopy(snake)
        if (snake.body[0].x === apple.x && snake.body[0].y === apple.y) {
            apple = {
                x: multiple(15, canvas.width - 15),
                y: multiple(15, canvas.height - 15)
            }
        }
    }, 1000 / fps)
}



function multiple(min, max) {
    return Math.floor(Math.floor(Math.random() * (max + min)) / min) * min
}

function createCanvas() {
    canvas = document.getElementById('canvas')
    canvasContext = canvas.getContext("2d")
    createRect(0, 0, canvas.width, canvas.height, 'black')
}

function drawApple(appleX, appleY) {
    var canvas = document.getElementById('canvas')
    var canvasContext = canvas.getContext("2d")
    createRect(appleX, appleY, 15, 15, 'red')
}

function createRect(x, y, w, h, color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, w, h)
}

function direction(event) {

    if (event.keyCode === 37) {
        dir = 'LEFT'
    }
    if (event.keyCode === 38) {
        dir = 'UP'
    }
    if (event.keyCode === 39) {
        dir = 'RIGHT'
    }
    if (event.keyCode === 40) {
        dir = 'DOWN'
    }
}

function drawSnake(snake) {
    snake.body.forEach(snakePart => {
        createRect(snakePart.x, snakePart.y, 15, 15, 'blue')
    })
    return snake.body

}

function createSnakeCopy(snakeBody) {
    let snakeCopy = []

    snakeBody.body.forEach(snakePart => {
        // snakeCopy.push(snakePart)
        snakeCopy.push({ x: snakePart.x, y: snakePart.y })
    })

    moveSnake(dir, snakeCopy)
}

function moveSnake(dir, snakeCopy) {

    // debugger
    if (dir === 'UP') {
        // debugger
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y - coords }
        snake.body[1] = { x: snakeCopy[0].x, y: (snakeCopy[0].y - 15) - coords }
        snake.body[2] = { x: snakeCopy[0].x, y: (snakeCopy[1].y - 15) - coords }
        snake.body[3] = { x: snakeCopy[0].x, y: (snakeCopy[2].y - 15) - coords }

    }
    if (dir === 'DOWN') {
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y + coords }
        snake.body[1] = { x: snakeCopy[0].x, y: (snakeCopy[0].y - 15) + coords }
        snake.body[2] = { x: snakeCopy[1].x, y: (snakeCopy[1].y - 15) + coords }
        snake.body[3] = { x: snakeCopy[2].x, y: (snakeCopy[2].y - 15) + coords }

    }
    if (dir === 'RIGHT') {
        snake.body[0] = { x: (snakeCopy[0].x + coords), y: snakeCopy[0].y }
        snake.body[1] = { x: (snakeCopy[0].x + 15) + coords, y: snakeCopy[0].y }
        snake.body[2] = { x: (snakeCopy[1].x + 15) + coords, y: snakeCopy[1].y }
        snake.body[3] = { x: (snakeCopy[2].x + 15) + coords, y: snakeCopy[2].y }

    }
    if (dir === 'LEFT') {
        snake.body[0] = { x: snakeCopy[0].x - coords, y: snakeCopy[0].y }
        snake.body[1] = { x: (snakeCopy[0].x - 15) - coords, y: snakeCopy[0].y }
        snake.body[2] = { x: (snakeCopy[1].x - 15) - coords, y: snakeCopy[0].y }
        snake.body[3] = { x: (snakeCopy[2].x - 15) - coords, y: snakeCopy[0].y }
    }
    // for (let i = 0; i < snake.body.length - 1; i++) {
    //     snake.body[i - 1] = { x: snake.body[i].x, y: snake.body[i].y }
    //     // console.log(snakeBody.body[i])
    // }
    // for (let i = 0; i < snake.body.length - 1; i++) {
    //     snake.body[i - 1] = { x: snake.body[i].x, y: snake.body[i].y }
    // }

}
// leaving this part for last
// function gameOver() {
//     if (snake.body[0].x >= canvas.width & snake.body[0].y >= canvas.height) {
//         alert('Game has ended')
//     }
// }
document.addEventListener('keyup', direction)
