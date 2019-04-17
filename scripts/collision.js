checkCollision = setInterval(hurtbox, 5)
let temp=0
function hurtbox() {
  for (var i = 0; i < numberOfEnemies; i++) {
    if ((character.posx < enemy[i].posx + enemy[i].width &&
       character.posx + character.width > enemy[i].posx &&
       character.posy < enemy[i].posy + enemy[i].height &&
       character.height + character.posy > enemy[i].posy) ||
       character.posy <=-75 || character.posy >=795)
    {
      gameOver()
      playSound()
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
    }
  }
  // for (var i = 0; i < numberOfBonus; i++) {
  //   if (character.posx < bonus[i].posx + bonus[i].width &&
  //      character.posx + character.width > bonus[i].posx &&
  //      character.posy < bonus[i].posy + bonus[i].height &&
  //      character.height + character.posy > bonus[i].posy)
  //   {
  //     bonus[i].posx = 2000
  //     saveTotalCoins()
  //   }
  // }
}

function drawGameOver(){ // show gameOver
  ctx.font = '22px invasion';
  ctx.fillText('GameOver !', 530, 300);
  ctx.fillText('Click to restart', 520, 350);
}

function playSound(){
  let hitSound = new Audio("sounds/hitSound" + ".wav");
  hitSound.play();
}

function gameOver(){
  gravitySpeed=-1
  isGameOver=1
  for (var i = 0; i < enemy.length; i++) {
    enemy[i].posy=10001
  }
  for (var i = 0; i < ball.length; i++) {
    ball[i].posy=10001
  }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    gravitySpeed = Math.floor(gravityVelocity+=0.40) // Power of the gravity
    character.posy += gravitySpeed
    if (gravityVelocity>20){
      gravityVelocity=20
    }
  saveScoreMax()
  drawGameOver()
}

document.addEventListener(
  'keypress',
  function(){
    if (isGameOver==1){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      character.posy = 322
      init()
      temp=1
    }
    else if (isGameOver==0&&temp==1){
      temp=0
      for (var i = 0; i < numberOfBalls; i++) {
        ball[i].posx=(1280+((1000/ballMoveEvery)*ballSpeed*(i+1)*(spawnBallInterval/1000))) // regeneration of every ball posx with the same option
        generateBallPosY(i)
      }
      for (var i = 0; i < numberOfEnemies; i++) {
        enemy[i].posx=(1280+((1000/enemyMoveEvery)*enemySpeed*(i+1)*(spawnEnemyInterval/1000))) // regeneration of every enemy posx with the same option
        generatePosY(i)
      }
      // for (var i = 0; i < numberOfBonus; i++) {
      //   enemy[i].posx=(1280+((1000/enemyMoveEvery)*bonusSpeed*(i+1)*(spawnEnemyInterval/1000))) // regeneration of every enemy posx with the same option
      //   generatePosY(i)
      // }
    }
  }
)
