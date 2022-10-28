const quizData = [
    //importing quiz data/questions
    {
        question: "Which language runs in a web browser ?",
        a: "Java",
        b: "Solidity",
        c: "Javascript",
        correct: "c",
    },

    {
        question: "what does HTML stand for?",
        a: "Hyper-text markup Language",
        b: "Hyper-text transfer protocol",
        c: "World wide web",
        correct: "a",
    },
    {
        question: "what does CSS stand for?",
        a: "Cook sleep sleep",
        b: "Comma separate sequence",
        c: "Cascading Style-sheet",
        correct: "a",
    },
    {
        question: "what does HTML do?",
        a: "Cook sleep sleep",
        b: "Comma separate sequence",
        c: "FOR markup",
        correct: "c",
    },
    {
        question: "what does JS do?",
        a: "For adding functionality",
        b: "Comma separate sequence",
        c: "Cascading Style-sheet",
        correct: "a",
    },
    {
        question: "what does CSS stand for?",
        a: "Cook sleep sleep",
        b: "Comma separate sequence",
        c: "Cascading Style-sheet",
        correct: "a",
    },
    {
        question: "what does CSS do?",
        a: "Cook sleep sleep",
        b: "For styling web pages",
        c: "For safety",
        correct: "b",
    },
    {
        question: "what is a school?",
        a: "A place for studying",
        b: "For trading",
        c: "Cascading Style-sheet",
        correct: "a",
    },
    {
        question: "what is a chair used for?",
        a: "sitting down",
        b: "Standing up",
        c: "Running",
        correct: "a",
    },
    {
        question: "what language is best for writing smart contracts on ethereum?",
        a: "Rust",
        b: "Solidity",
        c: "Java",
        correct: "b",
    },
    {
        question: "What is a Noun?",
        a: "Name of any peson, animal, place or thing",
        b: "Noun noun",
        c: "Naming sequence",
        correct: "a",
    },
    {
        question: "what is the full meaning of UNN?",
        a: "University of NIgeria",
        b: "University Of Nigeria Nsukka",
        c: "University Of Nigeria, Nsukwa",
        correct: "b",
    },
    {
        question: "what is the capital of Nigeria?",
        a: "Ameria",
        b: "Abuja",
        c: "Lagos",
        correct: "b",
    },
    {
        question: "How many states are in Nigera?",
        a: "36",
        b: "50",
        c: "51",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        correct: "b",
    },   
 

];

//saving neccesary cariables 
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadquiz()

function loadquiz() {
    deselectAnswers()
//function which loads the quiz questions into the html 
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

//adding an onclick evt listener to the button
submitBtn.addEventListener("click", () => {
    
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
             score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadquiz()
        } else {
            quiz.innerHTML = `
            <h2>You Answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})