


var htmlQuiz = [

    { que: 'What is the abbreviation of HTML', opt1: 'HYPER TEXT MARKUP LANGUAGE', opt2: 'HYPER INFO MARKUP LANGUAGE', opt3: 'HYPER TEND MARK LANGUAGE', opt4: 'HYPER TEST MARKS LANGUAGE', ans: 'HYPER TEXT MARKUP LANGUAGE' },

    { que: 'How many sizes of headers are available in HTML by default?', opt1: '5', opt2: '1', opt3: '3', opt4: '6', ans: '6' },

    { que: 'What is the smallest header in HTML by default?', opt1: 'h1', opt2: 'h5', opt3: 'h3', opt4: 'h6', ans: 'h1' },

    { que: 'The correct sequence of HTML tags for starting a webpage is?', opt1: 'Head, Title, HTML, body', opt2: 'HTML, Body, Title, Head', opt3: 'HTML, Head, Title, Body', opt4: 'HTML, Head, Title, Body', ans: 'HTML, Head, Title, Body' },

    { que: 'Which of the following is used to read an HTML page and render it?', opt1: 'Web server', opt2: 'Web network', opt3: 'Web browser', opt4: 'Web matrix', ans: 'Web browser' },

    { que: 'In which part of the HTML metadata is contained?', opt1: 'head tag', opt2: 'title tag', opt3: 'html tag', opt4: 'body tag', ans: 'head tag' },

    { que: 'The hr tag in HTML is used for?', opt1: 'new line', opt2: 'vertical ruler', opt3: 'new paragraph', opt4: 'horizontal ruler', ans: 'horizontal ruler' },

    { que: 'Which of the following HTML attribute is used to define inline styles?', opt1: 'style', opt2: 'type', opt3: 'class', opt4: 'None of the above', ans: 'style' },

    { que: 'The tags in HTML are?', opt1: 'case-sensitive', opt2: 'in upper case', opt3: 'not case sensitive', opt4: 'in lowercase', ans: 'not case sensitive' },

    { que: 'Which of the following attribute is used to provide a unique name to an element?', opt1: 'class', opt2: 'id', opt3: 'type', opt4: 'None of the above', ans: 'id' },   


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