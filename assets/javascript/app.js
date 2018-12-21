$(document).ready( function() {
var questions = [
    {
      question1: "What year did Warped Tour start?",
      answers: {
        a: "1999",
        b: "1996",
        c: "1995"
      },
      correctAnswer: "c"
    },
    {
      question2: "How many times has Paramore played on Warped?",
      answers: {
        a: "six",
        b: "eight",
        c: "five"
      },
      correctAnswer: "a"
    },
    {
      question3: "What year did Warped Tour end?",
      answers: {
        a: "2014",
        b: "2016",
        c: "2009",
        d: "2018"
      },
      correctAnswer: "d"
    }
    {
    question4: "Who founded Warpetd tour?",
    answers: {
      a: "Kevin Lyman",
      b: "Ken Lyman",
      c: "Keith Lyman",
    },
    correctAnswer: "a" 
  }
  {
    question5: "In what year did Vans start sponsoring the tour?",
    answers: {
      a: "2000",
      b: "1996",
      c: "1999",
      d: "1997"
    },
    correctAnswer: "b"
  }
  ];
  $("#gameArea").hide();

	// Start Button Click and Hide
	$("#startBtn").on("click", function(){
		$("#startGame").hide();
		newGame();
	});

	// Reset Button
	$("#startOverBtn").on("click", function(){
		$("#Res").hide();
		newGame();
	});

	// ======================================================
	//Function to Start Game After Initial Click
	// ======================================================
	function newGame() {
		$("#gameArea").show();
		$("#Ans").hide();
		$("#Res").hide();		
		correctAnswer = 0;
		wrongAnswer = 0;
		unanswered = 0;
		currentQ = 0;
		questions();
	}
	// ==================
	// Displays Question
	// ==================
	function questions() {
		$("#Ans").hide();
		$("#Qs").show();
		answered = true;
		// Prints Question from Array
		$(".question").html(triviaQuestions[currentQ].question);

		// -----------------------------------------
		//Loops through possible choices and appends
		// -----------------------------------------
		for (var i = 0; i <= 5; i++) {
			var list = $("<div>");
			list.text(triviaQuestions[currentQ].choices[i]);
			list.attr({"data-index": i });
			list.addClass("thisChoice");
			$(".choices").append(list);
		}

		//Calls Timer
		countdown();

		// USERCLICK
		$(".thisChoice").on("click",function(){
			userChoice = $(this).data("index");
			clearInterval(time);
			shoAnswer();
		});
	}

	// ==================
	// TIMER COUNTDOWN
	// ==================
	function countdown() {
		seconds = 20;
		$("#time").html("00:" + seconds);
		answered = true;
		//Delay of 1 sec before timer goes off
		time = setInterval(countDownSho, 1000);
	}

	// ==================
	// SHOWS TIMER
	// ==================
	function countDownSho() {
		seconds --;
		if(seconds < 10) {
			$("#time").html("00:0" + seconds);
			$("#time").css({"color": "red"});
		} else {
			$("#time").html("00:" + seconds);
			$("#time").css({"color": "#def"});
		}

		if (seconds < 1) {
			clearInterval(time);
			answered = false;
			shoAnswer();
		}
	}

	function shoAnswer() {
		$("#Qs").hide();
		$("#Res").hide();
		$("#Ans").show();
		$(".thisChoice").empty();

		var rightAnswerText = triviaQuestions[currentQ].choices[triviaQuestions[currentQ].correct];
		var rightAnswerIndex = triviaQuestions[currentQ].correct;
		console.log(rightAnswerText);
		console.log(rightAnswerIndex);
		
		var gifLink = triviaQuestions[currentQ].image;
		var Giffy = $("<img>");
		Giffy.attr("Src", gifLink);
		Giffy.addClass("gifImg");
		$("#gif").html(Giffy);
		// GIF TEXT
		var gifText = triviaQuestions[currentQ].answerText;
			newCap = $("<div>");
			newCap.html(gifText);
			newCap.addClass("gifCap");
			$("#gifText").html(newCap);


		// DISPLAYS AND COUNTS USER ANSWERS/ UnANSWERS
		if ((userChoice === rightAnswerIndex) && (answered === true)) {
			correctAnswer++;
			$("#text").html(text.correct);
			$("#correctAnswer").hide();
		} else if ((userChoice !== rightAnswerIndex) && (answered === true)) {
			wrongAnswer++;
			$("#text").html(text.incorrect);
			$("#correctAnswer").show().html("The correct answer was: " + rightAnswerText);
		} else {
			unanswered++;
			$("#text").html(text.noTime);
			$("#correctAnswer").html("The correct answer was: " + rightAnswerText);
			answered = true;
		}

		//Last Answer Reveal Timer
		if (currentQ === (triviaQuestions.length-1)) {
			setTimeout(results, 10000);
		} else {
			currentQ++;
			setTimeout(questions, 10000);
		}

	}

	function results() {
		$("#Ans").hide();
		$("#Qs").hide();
		$("#Res").show();
		$("#resultText").html(text.done);
		$("#correctAnswers").html("Correct Answers: " + correctAnswer);
		$("#wrongAnswers").html("Wrong Answers: " + wrongAnswer);
		$("#unanswered").html("Didn't Answer: " + unanswered);
		$("#startOverBtn").show();
		$("#startOverBtn").html("RESTART GAME");
	}

	
});
]

