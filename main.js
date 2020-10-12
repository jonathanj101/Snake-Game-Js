
var canvas = document.getElementById('canvas')
var canvasContext = canvas.getContext("2d")
var playerScore = document.getElementById("playerScore")
var highScore = document.getElementById("highScore")

var coords = 15

let dir;

window.onload = function () {
    // debugger

    var snake = {
        // snake body cords
        body: [
            { x: 150, y: 300 },
            { x: 135, y: 300 },
            { x: 120, y: 300 },
            { x: 105, y: 300 },

        ]
    }

    var apple = {
        x: multiple(15, canvas.width - 15),
        y: multiple(15, canvas.height - 15)
    }

    var fps = 15

    setInterval(function () {
        main(snake, apple)
    }, 1000 / fps)
}



function multiple(min, max) {
    return Math.floor(Math.floor(Math.random() * (max + min)) / min) * min
}
function main(snake, food) {
    createCanvas()
    drawApple(food.x, food.y)
    drawSnake(snake)

    let snakeCopy = createSnakeCopy(snake.body)

    moveSnake(snake, snakeCopy)

    if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
        snake.body.push({ x: snake.body[0].x, y: snake.body[0] })
    }
}

function createSnakeCopy(snakeBody) {
    let snakeCopy = []

    snakeBody.forEach(snakePart => {
        // snakeCopy.push(snakePart)
        snakeCopy.push({ x: snakePart.x, y: snakePart.y })
    })

    return snakeCopy
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

function direction(direction) {
    // debugger
    if (direction.keyCode === 37 && dir != "RIGHT") {
        dir = 'LEFT'
    }
    if (direction.keyCode === 38 && dir != "DOWN") {
        dir = 'UP'
    }
    if (direction.keyCode === 39 && dir != "LEFT") {
        dir = 'RIGHT'
    }
    if (direction.keyCode === 40 && dir != "UP") {
        dir = 'DOWN'
    }
    console.log(direction.key)
}

function drawSnake(snake) {
    for (let i = 0; i < snake.body.length; i++) {
        if (i == 0) {
            createRect(snake.body[0].x, snake.body[0].y, 15, 15, 'blue')
        } else {
            createRect(snake.body[i].x, snake.body[i].y, 15, 15, 'red')
        }
    }

}



function moveSnake(snake, snakeCopy) {
    // loop through the snake.body backwards
    for (let i = 0; i < snake.body.length - 1; i++) {
        //set the current body part's x and y equal to it's parent
        snake.body[i + 1] = { x: snakeCopy[i].x, y: snakeCopy[i].y }
    }



    if (dir === 'UP') {
        // debugger
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y - coords }
        // snake.body[1] = { x: snakeCopy[0].x, y: (snakeCopy[0].y + 15) - coords }
        // snake.body[2] = { x: snakeCopy[1].x, y: (snakeCopy[1].y + 15) - coords }
        // snake.body[3] = { x: snakeCopy[2].x, y: (snakeCopy[2].y + 15) - coords }

    }
    if (dir === 'DOWN') {
        // debugger
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y + coords }
        // snake.body[1] = { x: snakeCopy[0].x, y: (snakeCopy[0].y - 15) + coords }
        // snake.body[2] = { x: snakeCopy[1].x, y: (snakeCopy[1].y - 15) + coords }
        // snake.body[3] = { x: snakeCopy[2].x, y: (snakeCopy[2].y - 15) + coords }

    }
    if (dir === 'RIGHT') {
        // debugger
        snake.body[0] = { x: snakeCopy[0].x + coords, y: snakeCopy[0].y }
        // snake.body[1] = { x: (snakeCopy[0].x - 15) + coords, y: snakeCopy[0].y }
        // snake.body[2] = { x: (snakeCopy[1].x - 15) + coords, y: snakeCopy[1].y }
        // snake.body[3] = { x: (snakeCopy[2].x - 15) + coords, y: snakeCopy[2].y }

    }
    if (dir === 'LEFT') {
        // debugger
        snake.body[0] = { x: snakeCopy[0].x - coords, y: snakeCopy[0].y }
        // snake.body[1] = { x: (snakeCopy[0].x + 15) - coords, y: snakeCopy[0].y }
        // snake.body[2] = { x: (snakeCopy[1].x + 15) - coords, y: snakeCopy[1].y }
        // snake.body[3] = { x: (snakeCopy[2].x + 15) - coords, y: snakeCopy[2].y }
    }

}

document.addEventListener('keydown', direction)
