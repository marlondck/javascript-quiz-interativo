const form = document.querySelector('.quiz-form ')
const finalScoreContainer = document.querySelector('.final-score-container')

let score = 0

const correctAsnwers = ['B', 'B', 'B', 'B']

const getUserAnswers = () => {
  let userAnswers = []
  // forma 1
  // for (let i = 0; i < correctAsnwers.length; i++) {
  //   form[`inputQuestion${i + 1}`].value
  // }

  // forma 2
  // o _ é uma convencao usada para que seja ignorado este parametro que nao é usado
  correctAsnwers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

  return userAnswers
}

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAsnwers[index]
    if(isUserAnswerCorrect) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  // rolar a pagina para o topo suavemente
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
  
  // remover a class css que poe display none
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
