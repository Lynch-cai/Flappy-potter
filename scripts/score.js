let scoreMax
let score = 0
let totalCoins = parseInt(localStorage.getItem('localTotalCoins'))
if (isNaN(totalCoins)){
  totalCoins=0
}

function saveScoreMax(){
  scoreMax = localStorage.getItem('localScoreMax')
  if (scoreMax<score) {
    scoreMax=score
    localStorage.setItem('localScoreMax', scoreMax)
  }
}

function saveTotalCoins(){
  score+=1
  checkLevel()
  if (totalCoins<999){ // Limit of budget
    totalCoins+=+1
  }
  drawScore()
  localStorage.setItem('localTotalCoins', totalCoins)
}

function drawTotalCoins(){
  ctx.font = '20px invasion';
  ctx.fillText(totalCoins, 50, 150);
  ctx.drawImage(ballImg, 85, 132)
  requestAnimationFrame(drawTotalCoins)
}

function drawScore(){
  ctx.font = '50px invasion';
  ctx.fillText(score, 620, 80);
  requestAnimationFrame(drawScore)
}

function drawScoreMax(){
  saveScoreMax()
  ctx.font = '22px invasion';
  ctx.fillText('Highest score : ' + scoreMax, 530, 120);
  requestAnimationFrame(drawScoreMax)
}

function startGame(){ // show gameOver
  ctx.font = '45px invasion';
  ctx.fillText('Press any key to start !', 400, 350)
  startGameRequest = requestAnimationFrame(startGame)
}

setTimeout(
  function(){
    drawTotalCoins()
    startGame()
    drawScore()
    drawScoreMax()
    playHiSound()
  }, 100
)

function checkLevel(){
  if(score<=1){
    ballSpeed = 4
    enemySpeed = 5
    bonusSpeed = 3
    backgroundSpeed = parseInt(1)
  }
  else if(score<=2){
    ballSpeed = 5
    enemySpeed = 6
    bonusSpeed = 4
    backgroundSpeed = parseInt(2)
  }
  else if(score<=19){
    ballSpeed = 6
    enemySpeed = 7
    bonusSpeed = 6
    backgroundSpeed = 2
  }
  else if(score<=30){
    ballSpeed = 15
    enemySpeed = 5
    bonusSpeed = 15
    backgroundSpeed = 3
  }

}

function playHiSound(){
  let hiSound = new Audio("sounds/background_music.mp3");
  hiSound.play();
}
