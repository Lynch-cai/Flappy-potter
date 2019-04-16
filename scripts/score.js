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
  totalCoins+=+1
  localStorage.setItem('localTotalCoins', totalCoins)
}
