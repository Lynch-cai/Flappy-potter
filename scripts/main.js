let cvs = document.querySelector('canvas')
let ctx = cvs.getContext('2d')
let characterImg01 = new Image()
characterImg01.src = "images/characterImg01.png"
let characterImg02 = new Image()
characterImg02.src = "images/characterImg02.png"
let characterImg03 = new Image()
characterImg03.src = "images/characterImg03.png"
let characterImg04 = new Image()
characterImg04.src = "images/characterImg04.png"
let characterImg05 = new Image()
characterImg05.src = "images/characterImg05.png"
let enemyImg01 = new Image()
enemyImg01.src = "images/enemyImg01.png"
let ballImg = new Image()
ballImg.src = "images/ballImg.png"
let gameOverImg = new Image()
gameOverImg.src = "images/gameOverImg.png"
let choice, timeout, temp2, gravitySpeed=-1, gravityVelocity, scoreMax
let score = 0
let temp3 =0, enemy = new Array(), numberOfEnemies = 6
let temp4=0, ball = new Array(), numberOfBalls = 6, ballSpeed=50
let gameOver=0
let totalCoins = parseInt(localStorage.getItem('localTotalCoins'))
if (isNaN(totalCoins)){
  totalCoins=0
}


function drawCharacter(){
  ctx.drawImage(character.skin, character.posx, character.posy, character.width, character.height)
  requestAnimationFrame(drawCharacter)
}

cvs.addEventListener( // Jump on click
  'click',
  function(){
    if (gameOver==0){
      timeout = 0
      gravitySpeed = 0
      gravityVelocity = 0
      jump0 = setInterval(jump,12)
      clearInterval(gravity)
    }
  }
)

function jump(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  character.posy -=18
  timeout += 1
  if (timeout>=7){
    clearInterval(jump0);
  }
}

function gravity(){ // Gravity & Velocity
  if (gravitySpeed>-1) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    gravitySpeed = Math.floor(gravityVelocity+=0.40) // Power of the gravity
    character.posy += gravitySpeed
    if (gravityVelocity>20){
      gravityVelocity=20
    }
  }
}
naturalGravity = setInterval(gravity,20)

//// Character

function init(){
  choice = characterImg01
  let gameOver=0
  gravitySpeed=-1
  ctx.beginPath()
  ctx.fillStyle="black"
  ctx.font = "60px Arial"
  ctx.fillText(score, 1200, 70)
  ctx.closePath()
}

init()

class Element{
  constructor(skin,posX,posY,width,height,start){
    this.posx = posX
    this.posy = posY
    this.skin = skin
    this.width = width
    this.height = height
    this.start = start
  }
}

let character = new Element(choice,100,322,75,75,true)

drawCharacter()
////

//// Enemy

for (var i = 0; i < numberOfEnemies; i++) { //
  enemy.push(new Element(enemyImg01,9999,0,75,75,true))
}

function generatePosY(y){
  enemy[y].posy = Math.floor(Math.random()*645)
}

function generatePosYInit(){
  for (let i = 0; i < numberOfEnemies; i++) {
    enemy[i].posy = Math.floor(Math.random()*645)
  }
}

function drawAllEnemy(){
  for (let i = 0; i < numberOfEnemies; i++) {
    ctx.drawImage(enemy[i].skin, enemy[i].posx, enemy[i].posy, enemy[i].width, enemy[i].height)
  }
  requestAnimationFrame(drawAllEnemy)
}

moveEnemyLeft = setInterval ( // Enemy go to the left side
  function(){
    for (var i = 0; i < numberOfEnemies; i++) {
      if (enemy[i].posx<=1280){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        enemy[i].posx-=7 // Enemy Speed, default=7
      }
      if (enemy[i].posx<=-75){
        enemy[i].posx=1280
        generatePosY(i)
      }
    }
  }, 50
)

spawnEnemy = setInterval( // Change enemy position
  function(){
    if (gravitySpeed>-1){ // If the gravity is active, that mean the game started
      enemy[temp3].posx=1280
      temp3+=1
      if (temp3==numberOfEnemies){
        clearInterval(spawnEnemy)
      }
    }
  }, 1750
)
generatePosYInit()
drawAllEnemy()

// Ball

for (var i = 0; i < numberOfBalls; i++) { //
  ball.push(new Element(ballImg,10001,0,102,42,true))
}

function generateBallPosY(y){
  ball[y].posy = Math.floor(Math.random()*645)
}

function generateBallPosYInit(){
  for (let i = 0; i < numberOfBalls; i++) {
    ball[i].posy = Math.floor(Math.random()*645)
  }
}

function drawAllBall(){
  for (let i = 0; i < numberOfBalls; i++) {
    ctx.drawImage(ball[i].skin, ball[i].posx, ball[i].posy, ball[i].width, ball[i].height)
  }
  requestAnimationFrame(drawAllBall)
}

moveBallLeft = setInterval ( // ball go to the left side
  function(){
    for (var i = 0; i < numberOfBalls; i++) {
      if (ball[i].posx<=10000){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ball[i].posx-=ballSpeed // ball Speed, default=7
      }
      if (ball[i].posx<=-75){
        ball[i].posx=1280
        generateBallPosY(i)
      }
    }
  }, 50
)

spawnBall = setInterval( // Change ball position
  function(){
    if (gravitySpeed>-1){ // If the gravity is active, that mean the game started
      ball[temp4].posx=1280
      temp4+=1
      if (temp4==numberOfBalls){
        clearInterval(spawnBall)
        temp4=0
      }
    }
  }, 500
)
generateBallPosYInit()
drawAllBall()

// Hurtbox X & Y
checkCollision = setInterval(hurtbox, 5)
function hurtbox() {
  for (var i = 0; i < numberOfEnemies; i++) {
    if ((character.posx < enemy[i].posx + enemy[i].width &&
       character.posx + character.width > enemy[i].posx &&
       character.posy < enemy[i].posy + enemy[i].height &&
       character.height + character.posy > enemy[i].posy) ||
       character.posy <=-1 || character.posy >=721)
    {
      gameOverFct()
    }
  }
  for (var i = 0; i < numberOfBalls; i++) {
    if (character.posx < ball[i].posx + ball[i].width &&
       character.posx + character.width > ball[i].posx &&
       character.posy < ball[i].posy + ball[i].height &&
       character.height + character.posy > ball[i].posy)
    {
      ball[i].posx = 2000
      saveTotalCoins()
      console.log(score)
    }
  }
}

function gameOverFct(){
  ctx.beginPath()
  ctx.fillText(gameOverImg, 500, 360)
  ctx.closePath()

  gravitySpeed=-1
  gameOver=1
  for (var i = 0; i < enemy.length; i++) {
    enemy[i].posy = 10000
  }
  for (var i = 0; i < ball.length; i++) {
    ball[i].posy=10000
  }
  saveScoreMax()

}


//drawImage

// Local Storage
function saveScoreMax(){
  scoreMax = localStorage.getItem('localScoreMax')
  if (scoreMax<score) {
    scoreMax=score
    localStorage.setItem('localScoreMax', scoreMax)
  }
}

function saveTotalCoins(){
  totalCoins+=+1
  localStorage.setItem('localTotalCoins', totalCoins)
}
