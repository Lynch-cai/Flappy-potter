// let temp5=0, bonus = new Array()
// let bonusImg01 = new Image()
// bonusImg01.src = "images/bonusImg01.png"
//
// for (var i = 0; i < numberOfBonus; i++) { //
//   bonus.push(new Element(bonusImg01,10001,0,204,84))
// }
//
// function generateBonusPosY(y){
//   bonus[y].posy = Math.floor(Math.random()*645)
// }
//
// function generateBonusPosYInit(){
//   for (let i = 0; i < numberOfBonus; i++) {
//     bonus[i].posy = Math.floor(Math.random()*645)
//   }
// }
//
// function drawAllBonus(){
//   for (let i = 0; i < numberOfBonus; i++) {
//     ctx.drawImage(bonus[i].skin, bonus[i].posx, bonus[i].posy, bonus[i].width, bonus[i].height)
//   }
//   requestAnimationFrame(drawAllBonus)
// }
//
// moveBonusLeft = setInterval ( // bonus go to the left side
//   function(){
//     if (isGameOver==0 && gravitySpeed>-1){
//       for (var i = 0; i < numberOfBonus; i++) {
//         if (bonus[i].posx<=10000){
//           ctx.clearRect(0,0,canvas.width,canvas.height)
//           bonus[i].posx-=bonusSpeed // bonus Speed, default=7
//         }
//         if (bonus[i].posx<=-75 && bonus[i].posx>=-500){
//           bonus[i].posx=1280
//           generateBonusPosY(i)
//         }
//       }
//     }
//   }, bonusMoveEvery
// )
//
//
//
//
// spawnBonus = setInterval( // Change bonus position
//   function(){
//     if (isGameOver==0 && gravitySpeed>-1){ // If the gravity is active, that mean the game started
//       bonus[temp5].posx=1280
//       temp5+=1
//       if (temp4==numberOfBonus){
//         clearInterval(spawnBonus)
//         temp5=0
//       }
//     }
//   }, spawnBonusInterval
// )
// generateBonusPosYInit()
// drawAllBonus()
