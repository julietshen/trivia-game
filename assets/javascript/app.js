var correct = 0;
var wrong = 0;
var unanswered = 0;




$("#startButton").click(function() {
    $('#start').hide();
    $('#game').show();


    var oneMinute = 15;
    var display = $("#time");
    startTimer(oneMinute, display);
});



var submitAnswer = function() {

    var radios = document.getElementsByName("choice");
    if (radios[1].checked) {
        correct++;
     } else {
     	wrong++;
     }

	var radios = document.getElementsByName("choice2");
    if (radios[3].checked) {
        correct++;
     } else {
     	wrong++;
     }

    var radios = document.getElementsByName("choice3");
    if (radios[2].checked) {
        correct++;
     } else {
     	wrong++;
     }

    var radios = document.getElementsByName("choice4");
    if (radios[1].checked) {
        correct++;
     } else {
     	wrong++;
     }

	$('#game').hide();
    $('#finish').show();




    $("#correct").text(correct);
    $("#wrong").text(wrong);
    $("#unanswered").text(unanswered);


};


function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 1 ? "0" + seconds : seconds;

       	$("#time").text(seconds);

       	--timer;

        if (timer == 0) {
            submitAnswer();
        }
    }, 1000);
}


function setUp() {
    userScore = 0;
    $('#start').show();

   
    $("#correct").text(correct);
    $("#wrong").text(wrong);
    $("#unanswered").text(unanswered);

}



$(document).ready(setUp);

