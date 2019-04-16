let enemyImg01 = new Image()
enemyImg01.src = "images/enemyImg01.png"
let temp3 =0, enemy = new Array()

for (var i = 0; i < numberOfEnemies; i++) { //
  enemy.push(new Element(enemyImg01,9999,0,75,75))
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
        enemy[i].posx-= enemySpeed
      }
      if (enemy[i].posx<=-75 && enemy[i].posx>=-500){
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
