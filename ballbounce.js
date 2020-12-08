var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x ;
var y ;
var dx = 1;
var dy = -1;
var canvas;
var rightPressed = false;
var leftPressed = false;



x = canvas.width / 2;
y = canvas.height / 2;



// random ball direction
if (Math.floor(Math.random() * 2) == 0) {
    dx = -dx;
}
if (Math.floor(Math.random() * 2) == 0) {
    dy = -dy;
}

;

function init() {
	var dx = Math.floor(Math.random() * (10 - (-10) + 1) + (-10))
	var dy = Math.floor(Math.random() * (5 - (-5) + 1) + (-5))
	ball = new Ball(canvas.width , canvas.height , dx, dy, 30, 'blue');
}

if (this.y + this.radius > canvas.height) {
    // đảo ngược hướng bay của bóng khi chạm thành canvas
    this.dy = -this.dy;
} else {
    this.dy += 1
}



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == dx-- || e.key ==  -1 ) {
        rightPressed = true;
    }
    else if(e.key == dy-- ||  e.key == -1 ) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == dx++ || e.key == +1) {
        rightPressed = true;
    }
    else if(e.key == dy++ || e.key == +1) {
        leftPressed = true;
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}





function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
   
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if(rightPressed) {
        dx += 1;
    }
    else if(leftPressed) {
        dy -= 1;
    }
    
    x += dx;
    y += dy;
   
}




setInterval(draw, 10);