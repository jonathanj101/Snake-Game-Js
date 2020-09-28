var canvas = document.getElementById('canvas')
var canvasContext = canvas.getContext("2d")

var ball_x = 50
var ball_x_speed = 5


window.onload = function () {
    canvas = document.getElementById('canvas')
    canvasContext = canvas.getContext("2d")

    var fps = 30

    setInterval(function () {
        check_speed();
        createCanvas()
    }, 1000 / fps)
}


var snake_body = {
    body: [
        { x: 150, y: 300 },
        { x: 140, y: 150 },
        { x: 130, y: 150 },
        { x: 120, y: 150 },
    ]
}

var apple = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

function check_speed() {
    ball_x = ball_x + ball_x_speed
    if (ball_x < 0) {
        ball_x_speed = -ball_x_speed
    }
    if (ball_x > canvas.width) {
        ball_x_speed = -ball_x_speed
    }
}

function createCanvas() {
    create_rect(0, 0, 600, 600, 'black')
    create_rect(ball_x, 300 - 15, 15, 15, 'blue')
    create_rect(apple.x - 15, apple.y - 15, 15, 15, 'red')
    // if (ball_x === apple.x || ball_x === apple.y) {
    //     debugger;
    //     x = Math.random(apple.x)
    //     y = Math.random(apple.y)
    //     apple.x = x
    //     apple.y = y
    //     create_rect(x, y, 15, 15, 'red')

    // }
}

function create_rect(x, y, w, h, color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, w, h)
}

function direction(event) {
    if (event.keyCode === 37) {

    }
    if (event.keyCode === 37) {

    }
    if (event.keyCode === 37) {

    }
    if (event.keyCode === 37) {

    }
}



// var canvas;
// var canvasContext;

// var ballx = 50
// var ballx_speed = 5
// var bally = 50
// var bally_speed = 5

// let dir;

// window.onload = function () {
//     canvas = document.getElementById('SnakeGame-canvas')
//     canvasContext = canvas.getContext("2d")

//     var fps = 30

//     setInterval(function () {
//         motion();
//         createRect();
//     }, 1000 / fps)

// }



// var x_axis = 0
// var y_axis = 0
// var width = 600
// var height = 600

// function motion() {
//     ballx = ballx + ballx_speed
//     bally = bally + bally_speed

//     if (ballx < 0) {
//         ballx_speed = -ballx_speed
//     }
//     if (ballx > canvas.width) {
//         ballx_speed = -ballx_speed
//     }
//     if (bally < canvas.height) {
//         bally_speed = -bally_speed
//     }
//     if (bally > canvas.height) {
//         bally_speed = -bally_speed
//     }
// }

// function createRect() {
//     rect(0, 0, canvas.width, canvas.height, 'black')
//     rect(canvas.width / 2, 300, 10, 10, 'red')
//     rect(ballx, 300, 10, 10, 'blue')

// }

// function rect(x, y, w, h, color) {
//     canvasContext.fillStyle = color
//     canvasContext.fillRect(x, y, w, h)

// }

// function direction(event) {
//     if (event.keyCode === 37) {
//         dir = 'LEFT'
//     }
//     if (event.keyCode === 38) {
//         dir = 'UP'
//     }
//     if (event.keyCode === 39) {
//         dir = 'RIGHT'
//     }
//     if (event.keyCode === 40) {
//         dir = 'DOWN'
//     }
// }