


var htmlQuiz = [

    {
        que: 'What will the following code output: console.log(1 + "2" + "2");',
        opt1: '122',
        opt2: '14',
        opt3: '1222',
        opt4: '15',
        ans: '1222'
    },
    {
        que: 'Which keyword is used to declare variables in JavaScript?',
        opt1: 'var',
        opt2: 'int',
        opt3: 'string',
        opt4: 'let',
        ans: 'var'
    },
    {
        que: 'What is the result of the following expression: "1" - - "1"?',
        opt1: '0',
        opt2: '1',
        opt3: '2',
        opt4: '11',
        ans: '2'
    },
    {
        que: 'Which of the following is NOT a valid JavaScript data type?',
        opt1: 'boolean',
        opt2: 'number',
        opt3: 'float',
        opt4: 'string',
        ans: 'float'
    },
    {
        que: 'What does the isNaN() function do in JavaScript?',
        opt1: 'Checks if a value is a number',
        opt2: 'Converts a value to a number',
        opt3: 'Checks if a value is not a number',
        opt4: 'Returns the square root of a number',
        ans: 'Checks if a value is not a number'
    },
    {
        que: 'Which operator is used to compare both value and type in JavaScript?',
        opt1: '==',
        opt2: '===',
        opt3: '!=',
        opt4: '!==',
        ans: '==='
    },
    {
        que: 'Which built-in method returns the length of a string in JavaScript?',
        opt1: 'length()',
        opt2: 'size()',
        opt3: 'count()',
        opt4: 'length',
        ans: 'length'
    },
    {
        que: 'What does the typeof operator in JavaScript return for an array?',
        opt1: 'array',
        opt2: 'object',
        opt3: 'array',
        opt4: 'list',
        ans: 'object'
    },
    {
        que: 'What is the output of the following code: console.log(typeof NaN);',
        opt1: 'number',
        opt2: 'NaN',
        opt3: 'undefined',
        opt4: 'string',
        ans: 'number'
    },
    {
        que: 'Which of the following is NOT a looping statement in JavaScript?',
        opt1: 'for',
        opt2: 'foreach',
        opt3: 'while',
        opt4: 'do-while',
        ans: 'foreach'
    }
]




var questionCount = 0
var score = 0



var label1 = document.querySelector('#val1')
var label2 = document.querySelector('#val2')
var label3 = document.querySelector('#val3')
var label4 = document.querySelector('#val4')

var opt1 = document.querySelector('#option1')
var opt2 = document.querySelector('#option2')
var opt3 = document.querySelector('#option3')
var opt4 = document.querySelector('#option4')

var quizWindow = document.querySelector('#quizWindow')

var resultWindow = document.querySelector('#result')

var question = document.querySelector('#question')

var announce = document.querySelector('#announce')


var totalQueCount = document.querySelector('#totalQueCount')

var correctQueCount = document.querySelector('#correctQueCount')

var answers = document.getElementsByClassName('optionsCheck')


function renderQuestion() {
    question.innerHTML = htmlQuiz[questionCount].que

    label1.innerHTML = htmlQuiz[questionCount].opt1
    label2.innerHTML = htmlQuiz[questionCount].opt2
    label3.innerHTML = htmlQuiz[questionCount].opt3
    label4.innerHTML = htmlQuiz[questionCount].opt4

    opt1.value = htmlQuiz[questionCount].opt1
    opt2.value = htmlQuiz[questionCount].opt2
    opt3.value = htmlQuiz[questionCount].opt3
    opt4.value = htmlQuiz[questionCount].opt4

}





function deSelect() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false
    }
}

function next() {
    var checkedAns = false
    for (var i = 0; i < answers.length; i++) {
        // console.log(answers[i].value)
        // console.log(answers[i].checked)
        if (answers[i].checked) {
            checkedAns = true
            if (answers[i].value === htmlQuiz[questionCount].ans) {
                score++
            }
        }
    }



    if (!checkedAns) {
        alert('Please Select Any Option')
    } else {
        if (questionCount < htmlQuiz.length - 1) {
            questionCount++
            deSelect()
            renderQuestion()
        } else {
            showResult()
        }
    }


}


function showResult() {
    quizWindow.style.display = 'none';
    resultWindow.style.display = 'block';
    totalQueCount.innerHTML = htmlQuiz.length;
    correctQueCount.innerHTML = score;
    wrongQueCount.innerHTML = htmlQuiz.length - score;

    var percentage = Math.floor((score / htmlQuiz.length) * 100);
    percentageSpan.innerHTML = percentage + "%";

    if (percentage < 70) {
        announce.innerHTML = 'You have Failed';
        announce.classList.add('failed');
    } else {
        announce.innerHTML = 'You Passed';
        announce.classList.add('passed');
    }
}

window.onload = renderQuestion()