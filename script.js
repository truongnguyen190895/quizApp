const myQuestions = [
    {
        question: 'Javascript is _______ language',
        answer: {
            a: 'Programming',
            b: 'Application',
            c: 'None of these',
            d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'd'
    },

    {
        question: 'Which of these following is a valid type of function javascript supports?',
        answer: {
            a: 'named funtion',
            b: 'anonymous funnction',
            c: 'both of the above',
            d: 'none of the above'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which built-in method returns the index within the calling String object of the first occirrence of the specified value?',
        answer: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript?',
        answer: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'c'
    },
]

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const submitBtn = document.getElementById('submit')
const result = document.getElementById('result')
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    const currentQuizData = myQuestions[currentQuiz];
    questionElement.innerText = `Question number ${currentQuiz + 1}: ` + currentQuizData.question;
    a_text.innerText = currentQuizData.answer.a;
    b_text.innerText = currentQuizData.answer.b;
    c_text.innerText = currentQuizData.answer.c;
    d_text.innerText = currentQuizData.answer.d;
}

function removeChecked() {
    answerElements.forEach(function (values) {
        values.checked = false;
    })
}

function getSelected() {
    let answer;
    answerElements.forEach(function (value) {
        if (value.checked) {
            answer = value.id;
        }
    })
    return answer;
}

submitBtn.style.display = (currentQuiz < myQuestions.length - 1) ? 'none' : '';

submitBtn.addEventListener('click', function () {

    result.innerHTML = `<h1>Your score is ${score}/${myQuestions.length}</h1>`

})

nextBtn.addEventListener('click', function () {
    const answer = getSelected();
    if (answer === myQuestions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++;
    prevBtn.style.display = (currentQuiz === 0) ? 'none' : '';
    if (currentQuiz < myQuestions.length) {
        loadQuiz();
        removeChecked();
    } else {
        currentQuiz = myQuestions.length - 1;
    }
    nextBtn.style.display = (currentQuiz === 3) ? 'none' : '';
    submitBtn.style.display = (currentQuiz < myQuestions.length - 1) ? 'none' : '';

})

prevBtn.style.display = (currentQuiz === 0) ? 'none' : '';

prevBtn.addEventListener('click', function () {

    currentQuiz--;
    nextBtn.style.display = (currentQuiz === 3) ? 'none' : '';
    if (currentQuiz >= 0) {
        loadQuiz();
    } else {
        currentQuiz = 0;
    }
    prevBtn.style.display = (currentQuiz === 0) ? 'none' : '';
})

