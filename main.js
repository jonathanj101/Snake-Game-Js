const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext("2d")
const playerScore = document.getElementById("playerScore")
const highScore = document.getElementById("highScore")

const COORDINATES = 15
let score = 0


window.onload = function () {
    var snake = {
        body: [
            { x: 150, y: 300 },
        ],
        direction: undefined
    }
    var apple = {
        x: multiple(15, canvas.width - 15),
        y: multiple(15, canvas.height - 15)
    }

    var fps = 15

    setInterval(main, 1000 / fps, snkae, apple)

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 37 && snake.direction != "RIGHT") {
            snake.direction = 'LEFT'
        }
        if (e.keyCode === 38 && snake.direction != "DOWN") {
            snake.direction = 'UP'
        }
        if (e.keyCode === 39 && snake.direction != "LEFT") {
            snake.direction = 'RIGHT'
        }
        if (e.keyCode === 40 && snake.direction != "UP") {
            snake.direction = 'DOWN'
        }
    })
}

function isSnakeEatingApple(snake, apple) {
    return snake.body[0].x === apple.x && snake.body[0].y === apple.y

}


function multiple(min, max) {
    return Math.floor(Math.floor(Math.random() * (max + min)) / min) * min
}

function main(snake, apple) {
    createCanvas()
    drawApple(apple)
    drawSnake(snake)


    moveSnake(snake)

    const isCollidingWithWall = isSnakeCollidingWithWall(sanke) === true
    const isCollidingWithItSelf = snake.body.length > 1 && isSnakeCollidingWithItSelf(snake) === true
    if (isCollidingWithWall || isCollidingWithItSelf === true) {
        location.reload()
        score = 0
        alert(`Ooopss! ${isCollidingWithWall ? "Snake hit Wall" : "Snake bite itself"} Game Over!`)
    }

    if (isSnakeEatingApple(snake, apple) === true) {
        snake.body.push({ x: snake.body[0].x, y: snake.body[0].y })
        newApple = generateApple()
        apple.x = newApple.x
        apple.y = newApple.y
        updateScore()
    }
}

function updateScore() {
    updateScoreFromLocalStorage()

    let parsedPlayerScore = Number(playerScore.textContent)
    playerScore.textContent = parsedPlayerScore + 1
    score += 1
    saveScoreToLocalStorage(score)
}

function createSnakeCopy(snakeBody) {
    let snakeCopy = []
    snakeBody.forEach(snakePart => {
        snakeCopy.push({ x: snakePart.x, y: snakePart.y })
    })
    return snakeCopy
}
function createCanvas() {
    createRect(0, 0, canvas.width, canvas.height, 'black')
}
function drawApple(apple) {
    createRect(apple.x, apple.y, 15, 15, 'green')
}
function createRect(x, y, w, h, color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, w, h)
}

function drawSnake(snake) {
    for (let i = 0; i < snake.body.length; i++) {
        if (i == 0) {
            createRect(snake.body[0].x, snake.body[0].y, 15, 15, 'red')
        } else {
            canvasContext.strokeStyle = 'red'
            canvasContext.strokeRect(snake.body[i].x, snake.body[i].y, 15, 15)
            createRect(snake.body[i].x, snake.body[i].y, 10, 10, 'green')
        }

    }

}
function moveSnake(snake) {
    let snakeCopy = createSnakeCopy(snake.body)
    for (let i = 0; i < snake.body.length - 1; i++) {
        snake.body[i + 1] = { x: snakeCopy[i].x, y: snakeCopy[i].y }
    }

    if (snake.direction === 'UP') {
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y - COORDINAATESs }
    }
    if (snake.direction === 'DOWN') {
        snake.body[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y + COORDINAATESs }
    }
    if (snake.direction === 'RIGHT') {
        snake.body[0] = { x: snakeCopy[0].x + COORDINAATESs, y: snakeCopy[0].y }
    }
    if (snake.direction === 'LEFT') {
        snake.body[0] = { x: snakeCopy[0].x - COORDINAATESs, y: snakeCopy[0].y }
    }
}
function generateApple(apple) {
    return {
        x: multiple(15, canvas.width - 15),
        y: multiple(15, canvas.height - 15)
    }
}
function isSnakeCollidingWithWall(snake) {
    return (snake.body[0].x < -5 || snake.body[0].x > 600 || snake.body[0].y < 0 || snake.body[0].y > 600)
}
function isSnakeCollidingWithItSelf(snake) {
    for (let i = 1; i < snake.body.length; i++) {
        if (snake.body[0].x == snake.body[i].x && snake.body[0].y == snake.body[i].y) {
            return true
        }
    }
    return false
}
function gameOver(snake) {

}

function saveScoreToLocalStorage(score) {
    localStorage.setItem("Score", JSON.stringify(score))
}

function updateScoreFromLocalStorage() {
    score = JSON.parse(localStorage.getItem("Score"))
    if (score > highScore.textContent) {
        highScore.textContent = score
    }
}

