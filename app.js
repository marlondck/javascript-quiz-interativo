const form = document.querySelector('.quiz-form ')
const finalScoreContainer = document.querySelector('.final-score-container')

let score = 0

const correctAsnwers = ['B', 'B', 'B', 'B']

const getUserAnswers = () => correctAsnwers.map((_, index) => 
  form[`inputQuestion${index + 1}`].value)
 

// Aqui nao se usa map, filter ou reduce pois aqui esta sendo produzido um efeito colateral
// esta modificando uma let que esta fora do escopo
// o map, filter e reduce nao devem ser usados para efeitos colaterias
const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAsnwers[index]
    if(isUserAnswerCorrect) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
  
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0
  
  const timer = setInterval(() => {
    if(counter === score) {
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 10)
}


form.addEventListener('submit', event => {
  event.preventDefault()
  
  const userAnswers = getUserAnswers()
  
  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()

})
