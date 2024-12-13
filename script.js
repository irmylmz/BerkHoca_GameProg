/*

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Oyun değişkenleri
let snake = [{ x: 200, y: 200 }];
let direction = { x: 20, y: 0 };
let bait = getRandomPosition();
let score = 0;

// Tuşlarla yön değiştirme
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const key = event.key;
  if (key === "ArrowUp" && direction.y === 0) direction = { x: 0, y: -20 };
  if (key === "ArrowDown" && direction.y === 0) direction = { x: 0, y: 20 };
  if (key === "ArrowLeft" && direction.x === 0) direction = { x: -20, y: 0 };
  if (key === "ArrowRight" && direction.x === 0) direction = { x: 20, y: 0 };
}

// Rastgele yem pozisyonu
function getRandomPosition() {
  const x = Math.floor(Math.random() * (canvas.width / 20)) * 20;
  const y = Math.floor(Math.random() * (canvas.height / 20)) * 20;
  return { x, y };
}

// Oyunu başlat
function gameLoop() {
  if (isGameOver()) {
    alert(`Oyun Bitti! Skor: ${score}`);
    document.location.reload();
  } else {
    setTimeout(() => {
      clearCanvas();
      drawBait();
      moveSnake();
      drawSnake();
      gameLoop();
    }, 100);
  }
}

// Oyun bitti mi kontrolü
function isGameOver() {
  const head = snake[0];
  const hitWall =
    head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height;
  const hitSelf = snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
  return hitWall || hitSelf;
}

// Kanvas temizleme
function clearCanvas() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Yılanı çiz
function drawSnake() {
  ctx.fillStyle = "#00FF00";
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, 20, 20);
  });
}

// Yemi çiz
function drawBait() {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(bait.x, bait.y, 20, 20);
}

// Yılanı hareket ettir
function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head);

  // Eğer yem yenirse
  if (head.x === bait.x && head.y === bait.y) {
    bait = getRandomPosition();
    score++;
  } else {
    snake.pop();
  }
}

// Oyunu başlat
gameLoop();

*/
