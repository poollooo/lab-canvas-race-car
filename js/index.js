window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    console.log("clicked 1")
  };

  function startGame() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d")

    // Initialize and draw the road

    const img = new Image();
    img.src = './images/road.png'
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }

    // ctx.fillStyle = 'purple';
    // ctx.fillRect(40, 40, 100, 100);
  }
}