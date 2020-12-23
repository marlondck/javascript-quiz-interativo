const form = document.querySelector('.quiz-form ')

// Array que armazena as repostas corretas
const correctAsnwers = ['B', 'B', 'B', 'B',]


form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  // pega o valor de cada input-radio
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  // percorre o array de input radios
  userAnswers.forEach((userAnswer, index) => {
    // verifica se o valor do radio atual é igual ao do array de respostas certas
    if(userAnswer === correctAsnwers[index]) {
      // a cada pergunta certa recebe 25 pontos no score pra totalizar 100 deve acertas as 4 perguntas
      score += 25
    }
    console.log(score)
  })
})