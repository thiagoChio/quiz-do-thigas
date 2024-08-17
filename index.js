const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "O minimo de se esperar porra! parabens :)"
      break
    case (performance >= 70):
      message = "como assim voce nao acertou tudo ?"
      break
    case (performance >= 50):
      message = "pessimaaa"
      break
    default:
      message = "mds horrivel"
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}
  





















const questions = [
    {
      question: "quando thiago repetiu de ano?",
      answers: [
        { text: "3 ano", correct: false },
        { text: "5 ano", correct: false },
        { text: "6 ano", correct: true },
        { text: "4 ano", correct: false }
      ]
    },
    {
      question: "onde thiago nasceu",
      answers: [
        { text: "Minas gerais", correct: true },
        { text: "Espirito Santo", correct: false },
        { text: "São Paulo", correct: false },
        { text: "Belo horizonte", correct: false }
      ]
    },
    {
      question: 'quando thiago fez sua cirurgia',
      answers: [
        { text: '1 ano', correct: false },
        { text: '2 anos', correct: true },
        { text: '3 anos', correct: false },
        { text: "assim quando nasceu", correct: false }
      ]
    },
    {
      question: 'quando thiago beijou a ana pela primeira vez',
      answers: [
        { text: '29/06/2023', correct: false },
        { text: '01/07/2023', correct: true },
        { text: '03/07/2023', correct: false },
        { text: "02/07/2023", correct: false }
      
      ]
    },
    {
      question: 'um show que thiago nunca queria ter ido',
      answers: [
        { text: 'mc pipokinha', correct: false },
        { text: 'ana castela', correct: true },
        { text: 'veigh', correct: false },
        { text: 'kayblack', correct: false }
      ]
    },
    {
      question: 'qual era o sonho de thiago',
      answers: [
        { text: 'ser astronalta', correct: false },
        { text: 'ser piloto de carro', correct: true },
        { text: 'ser advogado', correct: false },
        { text: 'ser do bope', correct: false }
      ]
    },
    {
      question: 'filme favorito de thiago',
      answers: [
        { text: 'velozes e furiosos 2', correct: false },
        { text: 'ate o ultimo homem', correct: false },
        { text: 'kill bill', correct: false },
        { text: 'interestelar', correct: true },
      ]
    },
  ]