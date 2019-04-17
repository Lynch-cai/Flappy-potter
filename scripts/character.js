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
let choice = characterImg01, timeout, temp1=1, temp2, gravitySpeed, gravityVelocity, isGameOver



function drawCharacter(){
  ctx.drawImage(character.skin, character.posx, character.posy, character.width, character.height)
  requestAnimationFrame(drawCharacter)
}

document.addEventListener( // Jump on click
  'keydown',
  function(){
    if (isGameOver==0&&timeout==0){
      checkLevel()
      gravitySpeed = 0
      gravityVelocity = 0
      jump0 = setInterval(jump,jumpTime)
      clearInterval(gravity)
      setTimeout(
        function(){
          cancelAnimationFrame(startGameRequest)
        }, 110
      )
    }
  }
)

function jump(){
  if (timeout>=jumpLevitation){
    timeout = 0
    clearInterval(jump0)
  }
  else {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    character.posy -=jumpPower
    timeout += 1
  }
}

function gravity(){ // Gravity & Velocity
  if (gravitySpeed>-1) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    gravitySpeed = Math.floor(gravityVelocity+=gravityPower) // Power of the gravity
    character.posy += gravitySpeed
    if (gravityVelocity>20){
      gravityVelocity=20
    }
  }
}
naturalGravity = setInterval(gravity,20)

function debugText(){ // This function force the load of the font
  ctx.font = '0px invasion';
  ctx.fillText('.', -50, -50)
  requestAnimationFrame(debugText)
}

debugText()

function init(){
  isGameOver=0
  timeout=0
  gravitySpeed=-1
  score=0
  temp3=0
  temp4=0
  temp5=0
}

init()

class Element{
  constructor(skin,posX,posY,width,height){
    this.posx = posX
    this.posy = posY
    this.skin = skin
    this.width = width
    this.height = height
  }
}

let character = new Element(choice,250,322,75,75)

drawCharacter()
