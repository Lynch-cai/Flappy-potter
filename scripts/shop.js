let moneyImg = new Image()
moneyImg.src = "images/moneyImg.png"

let money = {
  posx : 50,
  posy : 50,
  width : 75,
  height : 75,
  skin : moneyImg
}

function drawMoney(){
  ctx.drawImage(money.skin, money.posx, money.posy, money.width, money.height)
  requestAnimationFrame(drawMoney)
}
drawMoney()



function checkMouseCollision(){

}

let mousePosX, mousePosY

function printMousePos(event) {
    mousePosX = event.clientX
    mousePosY = event.clientY
}

cvs.addEventListener(
  "click",
  function(){
    printMousePos(event)
    if (mousePosX >= money.posx &&
       mousePosX < money.posx + money.width &&
       mousePosY >= money.posy &&
       mousePosY < money.posy + money.width)
       {
         gameOver=1
         window.location.replace("shop.html")
       }
  }
)
