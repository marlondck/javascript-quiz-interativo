// selecionar o form
const form = document.querySelector('.quiz-form ')
// selecionar a div que mostra o resultado
const finalResult = document.querySelector('.result')

// Array que armazena as repostas corretas
const correctAsnwers = ['B', 'B', 'B', 'B',]

// adiciona um event listener no form 
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

    // mostrar o resultado na tela
    // user a div finalResult e partir dela pegar o span dentro
    finalResult.querySelector('span').textContent = `${score}%`
    // remover a class css que poe display none
    finalResult.classList.remove('d-none')
  })
})