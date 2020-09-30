var canvas = document.getElementById('canvas')
var canvasContext = canvas.getContext("2d")

var coords = 5


window.onload = function () {
    // debugger
    canvas = document.getElementById('canvas')
    canvasContext = canvas.getContext("2d")

    var fps = 30

    setInterval(function () {
        createCanvas()
        create_rect();
    }, 1000 / fps)
}

var snake = {
    // snake body cords
    body: [
        { x: 100, y: 300 }
    ]
}

// let snake_body_x = []

// let snake_body_y = []

// console.log(snake.body.forEach(e => {
//     console.log(e.x)
//     snake_body_x.push(e.x)
//     snake_body_y.push(e.y)
// }))

// console.log(`x co-ordinates ${snake_body_x}, y co-ordirnates ${snake_body_y}`)

var apple = {
    x: canvas.width / 2,
    y: canvas.height / 2
}
let dir;


function createCanvas() {
    create_rect(0, 0, 600, 600, 'black')
    create_rect(apple.x - 15, apple.y - 10, 10, 10, 'red')

    for (let i = 0; i < snake.body.length; i++) {
        // for (let i = 0; i < snake.body.length; i++) {
        create_rect(snake.body[0].x, snake.body[0].y - 15, 15, 15, 'blue')
    }
    // let snake_x = snake_body_x
    // let snake_y = snake_body_y
    // debugger
    if (dir === 'UP') {
        // debugger
        snake.body.forEach(y_cords => {
            y_cords.y -= coords

        })
        // snake.body[0] = { y: snake_y[0] -= x_speed }
        // snake.body[1] = { y: snake_y[1] -= x_speed }
        // snake.body[2] = { y: snake_y[2] -= x_speed }
        // snake.body[3] = { y: snake_y[3] -= x_speed }
    }
    if (dir === 'DOWN') {
        snake.body.forEach(y_cords => {
            y_cords.y += coords

        })
        // snake.body[0] = { x: snake_x[0], y: snake_y[0] += x_speed }
        // snake.body[1] = { x: snake_x[0], y: snake_y[1] += x_speed }
        // snake.body[2] = { x: snake_x[0], y: snake_y[2] += x_speed }
        // snake.body[3] = { x: snake_x[0], y: snake_y[3] += x_speed }
    }
    if (dir === 'RIGHT') {
        snake.body.forEach(x_cords => {
            x_cords.x += coords
        })
        // snake.body[0] = { x: snake_x[0] += x_speed, y: snake_y[0] }
        // snake.body[1] = { x: snake_x[1] += x_speed, y: snake_y[1] }
        // snake.body[2] = { x: snake_x[2] += x_speed, y: snake_y[2] }
        // snake.body[3] = { x: snake_x[3] += x_speed, y: snake_y[3] }
    }
    if (dir === 'LEFT') {
        snake.body.forEach(x_cords => {
            x_cords.x -= coords
        })
        // snake.body[0] = { x: snake_x[0] -= x_speed, y: snake_y[0] }
        // snake.body[1] = { x: snake_x[1] -= x_speed, y: snake_y[0] }
        // snake.body[2] = { x: snake_x[2] -= x_speed, y: snake_y[0] }
        // snake.body[3] = { x: snake_x[3] -= x_speed, y: snake_y[0] }

    }

    if (snake.body[0].x == apple.x && snake.body[0].y == apple.y) {
        console.log('ok')
        console.log(apple)
        console.log(snake.body)
    }
}

function create_rect(x, y, w, h, color) {
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

document.addEventListener('keyup', direction)
