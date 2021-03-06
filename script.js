var counter = 0;
var correctCount = 0;
var second_val = 0;
var high_score = 0.0;
var timer_is_in_use = 0;
var user_array = [];

var questionAnswers = {

    question1: {
        question: "What does CSS stand for?",
        answers: ["Classic Style Sheet", "Cascading Style Sheet", "Cascading Start Sheet"],
        correctAnswer: "Cascading Style Sheet"
    },
    question2: {
        question: "What does html stand for?",
        answers: ["Hypertext Markup Language", "Home Markup Language", "Hypertext Making Language"],
        correctAnswer: "Hypertext Markup Language"
    },
    question3: {
        question: "What does URL stand for?",
        answers: ["Universal Reading Link", "Uniform Resource Locator", "United Resource Location"],
        correctAnswer: "Uniform Resource Locator"
    }
};

var x = setInterval(function () {
    second_val -= 1;
    document.getElementById("stopWatch").innerHTML = "Timer" + second_val;
    if (timer_is_in_use == 1) {
        if (second_val < 1) {
            alert("Time is up. Start over.")
            timer_is_in_use = 0;
            document.getElementById("stopWatch").style.display = "none";
            TimeIsUp();
        }
    }

}, 1000);

function selectingQuestion(inpQestion) {
    document.getElementById("quest1").innerHTML = inpQestion.question;
    document.getElementById("button1").innerHTML = inpQestion.answers[0];
    document.getElementById("button2").innerHTML = inpQestion.answers[1];
    document.getElementById("button3").innerHTML = inpQestion.answers[2];
    counter++;
}

function startQuiz() {
    counter = 0;
    correctCount = 0;
    timer_is_in_use = 1;
    document.getElementById("sec1").style.display = 'block';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("title1").style.display = 'none';
    document.getElementById("start_text").style.display = 'none';
    selectingQuestion(questionAnswers.question1);
    second_val = 30;
    document.getElementById("stopWatch").style.display = "block";

}
var elements = document.getElementsByClassName("quiz-answers");

Array.from(elements).forEach(pass_elem);



function pass_elem(element) {

    element.addEventListener('click', function () {
        var correctAnswer;

        if (counter == 1) {
            correctAnswer = questionAnswers.question1.correctAnswer;
        }
        else if (counter == 2) {
            correctAnswer = questionAnswers.question2.correctAnswer;
        }
        else {
            correctAnswer = questionAnswers.question3.correctAnswer;
        }

        if (correctAnswer == this.textContent) {
            correctCount++;
            document.getElementById("result").innerHTML = "Correct";
            document.getElementById("result").style.display = 'block';
        }
        else {
            document.getElementById("result").innerHTML = "Wrong";
            second_val -= 5;
            document.getElementById("result").style.display = 'block';
        }

        setTimeout(function () {
            document.getElementById("result").style.display = 'none';
        }, 2000);


        if (counter == 1) {
            selectingQuestion(questionAnswers.question2);
        }
        else if (counter == 2) {
            selectingQuestion(questionAnswers.question3);
        }
        else {
            var score = correctCount / 3.0;
            var sval = Number(score).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 });
            document.getElementById("score_result").innerHTML = "Score: " + sval + "; with a time of: " + second_val;
            document.getElementById("container3").style.display = "block";
            document.getElementById("stopWatch").style.display = 'none';
            document.getElementById("container2").style.display = 'none';

            timer_is_in_use = 0;

            if (score > high_score) {
                high_score = score;
                var sval = Number(score).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 });
                document.getElementById("highScores").innerHTML = "High Score: " + sval;
            }
        }

        return 0;
    })

}

function TimeIsUp() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("stopWatch").style.display = 'none';
    document.getElementById("container2").style.display = 'block';
    document.getElementById("container4").style.display = 'none';
    document.getElementById("sec1").style.display = 'none';
    document.getElementById("title1").style.display = 'block';
    document.getElementById("start_text").style.display = 'block';
    document.getElementById("startButton").style.display = 'block';
    timer_is_in_use = 0;
}

function startOver() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("stopWatch").style.display = 'block';
    document.getElementById("container2").style.display = 'block';
    timer_is_in_use = 0;
    startQuiz();
}


function quit() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("stopWatch").style.display = 'none';
    document.getElementById("container2").style.display = 'none';
    document.getElementById("container4").style.display = 'block';
    timer_is_in_use = 0;
    startQuiz();
}

function save() {
    var sval = Number(high_score).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 });
    var displayText = "Name: " + document.getElementById("enterName").value + "; High Score: " + sval;
    timer_is_in_use = 0;
    var currentdate = new Date();
    var datetime = "; Date: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    displayText += datetime;
    user_array.push(displayText);

    TimeIsUp();
}

function show_scores() {
    var i;
    var tmp_counter = user_array.length;
    var sval;
    var totalstring = "";

    if (tmp_counter == 0) {
        totalstring = "none";
    }
    else {
        for (i = 0; i < tmp_counter; i++) {
            sval = user_array[i];
            totalstring += sval + "\r\n"
        }
    }
    alert(totalstring);
}










