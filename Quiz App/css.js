


var htmlQuiz = [

    {
        que: 'What does CSS stand for?',
        opt1: 'Cascading Style Sheets',
        opt2: 'Creative Style System',
        opt3: 'Computer Style Standards',
        opt4: 'Complete Styling Syntax',
        ans: 'Cascading Style Sheets'
    },
    {
        que: 'Which CSS property is used to change the text color of an element?',
        opt1: 'font-color',
        opt2: 'text-color',
        opt3: 'color',
        opt4: 'font-style',
        ans: 'color'
    },
    {
        que: 'What is the correct CSS syntax for making all the <p> elements bold?',
        opt1: 'p {text-bold: bold;}',
        opt2: 'p {font-weight: bold;}',
        opt3: 'p {style: bold;}',
        opt4: 'p {bold: true;}',
        ans: 'p {font-weight: bold;}'
    },
    {
        que: 'Which CSS property is used to control the spacing between lines of text?',
        opt1: 'line-spacing',
        opt2: 'text-spacing',
        opt3: 'line-height',
        opt4: 'text-line',
        ans: 'line-height'
    },
    {
        que: 'How do you apply a background color to an element in CSS?',
        opt1: 'bg-color: #ffffff;',
        opt2: 'background-color: #ffffff;',
        opt3: 'color-background: #ffffff;',
        opt4: 'background: #ffffff;',
        ans: 'background-color: #ffffff;'
    },
    {
        que: 'What is the CSS property used to set the size of the font?',
        opt1: 'font-size',
        opt2: 'text-size',
        opt3: 'size',
        opt4: 'font-style',
        ans: 'font-size'
    },
    {
        que: 'Which CSS selector is used to select elements with a specific class?',
        opt1: '#',
        opt2: '.',
        opt3: '>',
        opt4: '/',
        ans: '.'
    },
    {
        que: 'What is the default value of the position property in CSS?',
        opt1: 'relative',
        opt2: 'fixed',
        opt3: 'static',
        opt4: 'absolute',
        ans: 'static'
    },
    {
        que: 'What does the z-index property in CSS control?',
        opt1: 'Text alignment',
        opt2: 'Element visibility',
        opt3: 'Element stacking order',
        opt4: 'Element rotation',
        ans: 'Element stacking order'
    },
    {
        que: 'Which CSS property is used to create rounded corners?',
        opt1: 'border-rounding',
        opt2: 'corner-radius',
        opt3: 'rounded-corners',
        opt4: 'border-radius',
        ans: 'border-radius'
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