// Initialize the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
let hasStarted = 0;
const roadWidth = 282;
const roadHeight = 441;
const background = new Image();
background.src = './images/road.png'
const carImage = new Image();
const xInitialCarPosition = roadWidth / 2
const yInitialCarPosition = Math.floor(roadHeight * 1)
let x = 0;



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    hasStarted = 1;
  };

  function startGame() {
    // draw the canvas
    // drawRoad()
    canvas.classList.add('road')
    //draw the car
    drawCar(xInitialCarPosition, yInitialCarPosition)
    x = xInitialCarPosition

  }
}

// function drawRoad() {
//   background.src = './images/road.png'
//   background.onload = () => {
//     ctx.drawImage(background, 0, 0)
//   }
//   console.log('draw road')
// }

function drawCar(x) {
  carImage.src = './images/car.png'
  const carWidth = roadWidth / 4;
  const carHeight = roadHeight / 4;


  carImage.onload = () => {
    ctx.drawImage(carImage, x, yInitialCarPosition, carWidth, carHeight)
  }
  console.log('draw car')
}

function drawMovement(x) {
  clearCanvas()
  // drawRoad()
  drawCar(x)
}



function clearCanvas() {
  ctx.clearRect(0, 0, 500, 700); // 700 and 450 are canvas width and height
  console.log('clear Canva')
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
        // clearCanvas()
        x -= 10
        drawMovement(x)
        // drawRoad()
        // x = xInitialCarPosition + 10
        // drawCar(x)
        break
      case 'ArrowRight':
        // clearCanvas()
        x += 10
        drawMovement(x)
        // drawRoad()
        // drawCar(x)
        console.log('clicked right')
        console.log('x is :', x)
        break
    }
  }
})

ctx.save();

