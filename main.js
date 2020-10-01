var canvas = document.getElementById('canvas')
var canvasContext = canvas.getContext("2d")

var coords = 15


window.onload = function () {
    // debugger
    canvas = document.getElementById('canvas')
    canvasContext = canvas.getContext("2d")

    var fps = 15

    setInterval(function () {
        createCanvas();
        if (snakeBody[0].x === apple.x && snake.body[0].y === apple.y) {
            alert('ok')
        }
        create_rect();
    }, 1000 / fps)
}

var snake = {
    // snake body cords
    body: [
        { x: 100, y: 300 },
        // { x: 80, y: 300 },
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
// function multiple(min, max) {
//     debugger
//     if (min > max) {
//         return (max)
//     }
//     if (min == max) {
//         return min
//     }
//     return (min + parseInt(Math.floor(Math.random() * (max - min))))
// }

function multiple(min, max) {
    return Math.floor(Math.floor(Math.random() * (max + min)) / min) * min
}

// console.log(multiple(15, canvas.width))

var apple = {
    x: multiple(15, canvas.width),
    y: multiple(15, canvas.height)
}
// console.log(Math.floor(Math.random() * (canvas.width - 15)))
// console.log(apple.x)
console.log(apple.x, apple.y)
let dir;
let snakeCopy = []

// snake.body.forEach(snakeParts => {
//     snakeCopy.push(snakeParts)
//     console.log(snakeCopy)
// })
// console.log(snakeCopy)

function createCanvas() {
    create_rect(0, 0, 600, 600, 'black')
    create_rect(apple.x, apple.y, 15, 15, 'red')

    snake.body.forEach(snakeParts => {
        snakeCopy.push(snakeParts)
    })
    snakeCopy.forEach(snakeParts => {
        create_rect(snakeParts.x, snakeParts.y, 15, 15, 'blue')
    })

    // for (let i = 0; i < snake.body.length; i++) {
    //     create_rect(snake.body[i].x, snake.body[i].y, 15, 15, 'blue')
    // }
    // let snake_x = snake_body_x
    // let snake_y = snake_body_y
    // debugger
    if (dir === 'UP') {
        // debugger
        snakeCopy[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y - coords }
        // snake.body.forEach(y_cords => {
        //     y_cords.y -= coords

        // })
        // snake.body[0] = { y: snake_y[0] -= x_speed }
        // snake.body[1] = { y: snake_y[1] -= x_speed }
        // snake.body[2] = { y: snake_y[2] -= x_speed }
        // snake.body[3] = { y: snake_y[3] -= x_speed }
    }
    if (dir === 'DOWN') {
        snakeCopy[0] = { x: snakeCopy[0].x, y: snakeCopy[0].y + coords }
        // snake.body.forEach(y_cords => {
        //     y_cords.y += coords

        // })
        // snake.body[0] = { x: snake_x[0], y: snake_y[0] += x_speed }
        // snake.body[1] = { x: snake_x[0], y: snake_y[1] += x_speed }
        // snake.body[2] = { x: snake_x[0], y: snake_y[2] += x_speed }
        // snake.body[3] = { x: snake_x[0], y: snake_y[3] += x_speed }
    }
    if (dir === 'RIGHT') {
        snakeCopy[0] = { x: snakeCopy[0].x + coords, y: snakeCopy[0].y }
        // snake.body.forEach(x_cords => {
        //     x_cords.x += coords
        // })
        // snake.body[0] = { x: snake_x[0] += x_speed, y: snake_y[0] }
        // snake.body[1] = { x: snake_x[1] += x_speed, y: snake_y[1] }
        // snake.body[2] = { x: snake_x[2] += x_speed, y: snake_y[2] }
        // snake.body[3] = { x: snake_x[3] += x_speed, y: snake_y[3] }
    }
    if (dir === 'LEFT') {
        snakeCopy[0] = { x: snakeCopy[0].x - coords, y: snakeCopy[0].y }
        // snake.body.forEach(x_cords => {
        //     x_cords.x -= coords
        // })
        // snake.body[0] = { x: snake_x[0] -= x_speed, y: snake_y[0] }
        // snake.body[1] = { x: snake_x[1] -= x_speed, y: snake_y[0] }
        // snake.body[2] = { x: snake_x[2] -= x_speed, y: snake_y[0] }
        // snake.body[3] = { x: snake_x[3] -= x_speed, y: snake_y[0] }

    }

    // for (let i = 0; i < snake.body.length - 1; i++) {
    //     snake.body[i + 1] = { x: snake.body[i].x, y: snake.body[i].y };
    // }

    // if (snake.body[0].x === apple.x) {
    //     // apple = {
    //     //     x: Math.floor(300 + (Math.random() * (canvas.width - 1))) * 600,
    //     //     y: Math.floor(300 + (Math.random() * (canvas.width - 1))) * 600
    //     // }
    // }

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

function gameOver() {
    if (snake.body[0].x === canvas.width || snake.body[0].y == canvas.height) {
        alert('Game has ended')
    }
}
// function createSnake(snakeBody){

// }

document.addEventListener('keyup', direction)
