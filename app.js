var showQuiz;

var quiz = {
  correctAnswers: 0,
  wrongAnswers: 0,
  noAnswers: 0,
  time: 30        
  };

var myQuestions = [
      {
        question: "What year did Warped Tour Start?",
        answers: [
           "1998",
           "1997",
           "2000",
           "1995"
        ],

        correctAnswer: "2"
      },  
      {
        question: "What year did Vans start sponsoring the tour?",
        answers: [
           "1996", 
           "1998",
           "2001",
           "1997"
        ],

        correctAnswer: "0"
      },
      {
        question: "Who founded Warped?",
        answers: [
           "Kevin Spangler",
           "Kevin Lyman",
           "Adam Williams",
           "Justin York"
        ],
        correctAnswer: "1"
      },
      {
        question: "What year did Katy Perry play on the tour?",
        answers: [
           "2008",
           "2010",
           "2016",
           "2006",
           
        ],
        correctAnswer: "0"
      },

     {
        question: "How many times did Paramore play?",
        answers: [
           "7",
           "3",
           "2",
           "6"
        ],
        correctAnswer: "3"
      },

      {
        question: "What year did warped end",
        answers: [
           "2009",
           "2016",
           "2010",
           "2018"
        ],
        correctAnswer: "3"
      }
];

$(document).ready(function(){
    $("#start-button").click(function(){
        buildQuiz();
    });

});

$(document).on("click","#answers", questionCheck);


function questionCheck () {
 
  var radioSet = $(this).attr("name"); 
  var buttonRow = radioSet.charAt(8).trim();
  var userAnswer = $('input:checked').val()

  
  console.log({userAnswer});
  if(userAnswer === myQuestions[buttonRow].correctAnswer){
    quiz.correctAnswers++;
    
    
  }
  else {
    quiz.wrongAnswers++
  }

}

function buildQuiz(){
    countdown();
    startCountdown();
    $("#quiz-container").html('<left><h3>Are you a Warped Roadie?</h3></left>')
   
    for (i=0; i<myQuestions.length; i++){
      $("#quiz-container").append('<left><div class="questions" id="q' + i +'"></div><left>');
      $("#q" + i).append(myQuestions[i].question);
     
      for (j = 0; j < 4; j++) {
        $('<input id="answers" class="radio" type="radio" name="dynradio' + (i) + '" value="' + (j) + '">' + myQuestions[i].answers[j] + '</input> _______________________').appendTo("#q" + i);
      }

    }
    var newButton = $("<button id='stop-button' type='button' class='btn btn-default'>DONE</button>");
    $("#quiz-container").append(newButton);

}
          
function startCountdown() {
  showQuiz = setInterval(countdown, 10000);
}

function stopCountdown () {
  clearInterval(showQuiz)
}

function countdown() {

    quiz.time--;

	$("#display-timer").html("<h2>" + quiz.time + "</h2>");
	

    if (quiz.time === 0) {
      stopCountdown();
      $("#display-timer").html("<h4>ALL DONE</h4>");
      $("#quiz-container").html("<h4>Correct Answers: " + quiz.correctAnswers + "</h4>");
      $("#quiz-container").append("<h4>Wrong Answers: " + quiz.wrongAnswers + "</h4>");


    } 
}
$(document).on("click","#stop-button", forceStop);

function forceStop() {
  
      stopCountdown();
      $("#display-timer").html("<h4>ALL DONE</h4>");
      $("#quiz-container").html("<h4>Correct Answers: " + quiz.correctAnswers + "</h4>");
      $("#quiz-container").append("<h4>Wrong Answers: " + quiz.wrongAnswers + "</h4>");
}      

