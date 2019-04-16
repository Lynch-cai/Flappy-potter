checkCollision = setInterval(hurtbox, 5)
function hurtbox() {
  for (var i = 0; i < numberOfEnemies; i++) {
    if ((character.posx < enemy[i].posx + enemy[i].width &&
       character.posx + character.width > enemy[i].posx &&
       character.posy < enemy[i].posy + enemy[i].height &&
       character.height + character.posy > enemy[i].posy) ||
       character.posy <=-75 || character.posy >=795)
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

  gravitySpeed=-1
  gameOver=1
  for (var i = 0; i < enemy.length; i++) {
    enemy[i].posx =-501
  }
  for (var i = 0; i < ball.length; i++) {
    ball[i].posx=-501
  }
  saveScoreMax()
  return gameOverFct
}
