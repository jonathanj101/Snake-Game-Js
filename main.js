
var canvas = document.getElementById('canvas')
var canvasContext = canvas.getContext("2d")
var playerScore = document.getElementById("playerScore")
var highScore = document.getElementById("highScore")

var coords = 15

let dir;


window.onload = function () {
    var snake = {
        body: [
            { x: 150, y: 300 },
            // { x: 135, y: 300 },
            // { x: 120, y: 300 },
            // { x: 105, y: 300 },
        ]
    }

    let apple = {
        x: multiple(15, canvas.width - 15),
        y: multiple(15, canvas.height - 15)
    }

    var fps = 15

    setInterval(function () {
        main(snake, apple)
        if (snake.body[0].x === apple.x && snake.body[0].y === apple.y) {
            // debugger
            snake.body.push({ x: snake.body[0].x, y: snake.body[0] })

            console.log(apple)
            apple = {
                x: multiple(15, canvas.width - 15),
                y: multiple(15, canvas.height - 15)
            }
            // console.log(apple)
        }
    }, 1000 / fps)
}
function multiple(min, max) {
    return Math.floor(Math.floor(Math.random() * (max + min)) / min) * min
}
function main(snake, apple) {
    createCanvas()
    drawApple(apple)
    drawSnake(snake)
    // didSnakeEatApple(snake, apple)



    gameOver(snake)

    let snakeCopy = createSnakeCopy(snake.body)

    moveSnake(snake, snakeCopy)
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
function drawApple(apple) {
    canvas = document.getElementById('canvas')
    canvasContext = canvas.getContext("2d")
    createRect(apple.x, apple.y, 15, 15, 'red')
}
function createRect(x, y, w, h, color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, w, h)
}
function direction(direction) {
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
    for (let i = 0; i < snake.body.length - 1; i++) {
        snake.body[i + 1] = { x: snakeCopy[i].x, y: snakeCopy[i].y }
    }

    if (dir === 'UP') {
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y - coords }
    }
    if (dir === 'DOWN') {
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y + coords }
    }
    if (dir === 'RIGHT') {
        snake.body[0] = { x: snakeCopy[0].x + coords, y: snakeCopy[0].y }
    }
    if (dir === 'LEFT') {
        snake.body[0] = { x: snakeCopy[0].x - coords, y: snakeCopy[0].y }
    }
}
function didSnakeEatApple(snake, apple) {
    if (snake.body[0].x === apple.x && snake.body[0].y === apple.y) {
        // debugger
        snake.body.push({ x: snake.body[0].x, y: snake.body[0] })

        console.log(apple)
        apple = {
            x: multiple(15, canvas.width - 15),
            y: multiple(15, canvas.height - 15)
        }
        console.log(apple)
    }
}
function gameOver(snake) {
    for (let i = 0; i < snake.body.length; i++) {
        if (snake.body[0].x >= canvas.width && snake.body[0].y >= canvas.height) {
            console.log("ok")

        }
    }
}



document.addEventListener('keydown', direction)
