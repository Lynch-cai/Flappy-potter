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


setTimeout(
  function(){
    drawTotalCoins()
    startGame()
    drawScore()
    drawScoreMax()
  }, 100
)

function startGame(){ // show gameOver
  ctx.font = '45px invasion';
  ctx.fillText('Press any key to start !', 400, 350)
  startGameRequest = requestAnimationFrame(startGame)
}
