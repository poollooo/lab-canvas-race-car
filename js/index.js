// Initialize the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
let hasStarted = 0;
const roadWidth = 500;
const roadHeight = 700;
const background = new Image();
background.src = './images/road.png'
const carImage = new Image();
carImage.src = './images/car.png'
const xInitialCarPosition = 228
const yInitialCarPosition = Math.floor(roadHeight - 150)
let x = 0;
const carWidth = 158 / 4;
const carHeight = 319 / 4;
x = xInitialCarPosition


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    hasStarted = 1;
  };

  function startGame() {
    // draw the canvas
    ctx.drawImage(background, 0, 0, 500, 700)

    //draw the car
    ctx.drawImage(carImage, x, yInitialCarPosition, carWidth, carHeight)
    console.log('draw car from startGame function')
  }
}

function drawRoad() {
  ctx.drawImage(background, 0, 0, 500, 700)
  console.log('draw road')
}

function drawCar(x) {

  ctx.drawImage(carImage, x, yInitialCarPosition, carWidth, carHeight)

  console.log('draw car from draw Car function')

}

function drawMovement(x) {
  clearCanvas()
  drawRoad()
  drawCar(x)
}



function clearCanvas() {
  ctx.clearRect(0, 0, 500, 700); // 700 and 450 are canvas width and height
}

function moveCar() {
}

document.addEventListener('keydown', (event) => {
  //check is the game has started before allowing to use the keys
  if (!hasStarted) {
    return 0
  }
  else {
    switch (event.code) {
      case 'ArrowLeft':
        console.log('clicked left')
        console.log('x is :', x)
        x -= 10
        drawMovement(x)
        break
      case 'ArrowRight':

        x += 10
        drawMovement(x)
        console.log('clicked right')
        console.log('x is :', x)
        break
    }
  }
})

ctx.save();

