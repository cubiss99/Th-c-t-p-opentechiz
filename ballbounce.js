
// khi báo các biến
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


// vị trí ban đầu của bóng
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



// event keyUp keyDown speed
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
/*
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" ||  e.key == "ArrowLeft" ) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

*/

//beginPath+ closePasth là hướng 
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
//xóa canvas trước khi tạo frame mới
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
   
    // bóng di chuyển trái và phải
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

     // bóng di chuyển lên và xuống
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }


    // công thức di chuyển bóng
    if(rightPressed) {
        dx += 2;
    }
    else if(leftPressed) {
        dy -= 2;
    }
    
    x += dx;
    y += dy;
   
}



function keyDownHandler(e) {
    if(e.keyCode == 39) {
      rightPressed = true;
    }
    else if(e.keyCode == 37) {
      leftPressed = true;
    }
  }
  function keyUpHandler(e) {
    if(e.keyCode == 39) {
      rightPressed = false;
    }
    else if(e.keyCode == 37) {
      leftPressed = false;
    }
  }
  if(rightPressed) {
    dx += 2;
  }
  else if(leftPressed) {
    dx -= 2;
  }
  if(rightPressed && dx < canvas.width-paddleWidth) {
    dx +=2;
  }
  else if(leftPressed && dx > 0) {
    dx -= 7;
  }

  



// hàm draw thực thi mỗi 10 mili giây.
setInterval(draw, 10);