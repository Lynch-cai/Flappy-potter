let cvs = document.querySelector('canvas')
let ctx = cvs.getContext('2d')

let character01 = new Image()
character01.src = "images/character01.png"
let character02 = new Image()
character02.src = "images/character02.png"
let character03 = new Image()
character03.src = "images/character03.png"
let character04 = new Image()
character04.src = "images/character04.png"
let character05 = new Image()
character05.src = "images/character05.png"
let enemy01 = new Image()
enemy01.src = "images/enemy01.png"
let choice, timeout, temp2, gravitySpeed, gravityVelocity=0




init()

class Character{
  constructor(skin){
    this.posy = 335
    this.posx = 100
    this.skin = skin
  }
  jump(){
    this.posy -= 100
  }

}

let character = new Character(choice)

function drawCharacter(){
  ctx.drawImage(character.skin, character.posx, character.posy, 50, 50)
  requestAnimationFrame(drawCharacter)
}


cvs.addEventListener( // Jump on click
  'click',
  function(){
    timeout = 0
    gravitySpeed = 0
    gravityVelocity = 0
    ctx.clearRect(0,0,canvas.width,canvas.height);
    jump0 = setInterval(jump,6)
    clearInterval(gravity)
  }
)

function jump(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  character.posy -=13
  timeout += 1
  console.log(timeout)
  if (timeout>=7){
    clearInterval(jump0);
    timeout = 0
  }
}


function gravity(){ // Gravity & Velocity
  ctx.clearRect(0,0,canvas.width,canvas.height);
  gravitySpeed = Math.floor(gravityVelocity+=0.20)
  character.posy += gravitySpeed
  console.log(gravitySpeed)
  if (gravityVelocity>5){
    gravityVelocity=5
  }
}
function init(){
  choice = character01
}

drawCharacter()
naturalGravity = setInterval(gravity,18)
