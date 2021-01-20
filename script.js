const quizData = [
    {
        question: "HTML stand for?",
        a: "Hyper Text Mark Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Make Language",
        d: " Hyper Texts Markup Language",
        correct: "b",
    },
   
  
    {
        question: "Which of the following property is used to underline, overline, and strikethrough text ?",
        a: " text-indent",
        b: "text-align",
        c: "text-decoration",
        d: "text-transform",
          correct: "c",
    },
  
    {
        question: "What would be the result of 3+2+\"7\" ?",
        a: "12",
        b: "Error",
        c: "57",
        d: "None of the above",
        correct: "c",

    },
    
    {
        question: "What is ReactJs?",
        a: " A Library for building interaction interfaces",
        b: "Server side framework",
        c: "Client Side Framework",
        d: "None of the above",
        correct: "a",


    },
    {
        question: "What is the output of the following code -> print(9//2)",
        a: "4.5",
        b: "4.0",
        c: "4",
        d: "4.25",
        correct: "c",

    },
   
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;



function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
