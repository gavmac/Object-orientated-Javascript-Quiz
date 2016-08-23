// Interact with the user interface;
// The quiz interface control is just one big object;


// The Quiz Iser Interface is one large object, with controls that are equal to properties.

var QuizUI = {

	// The display next property is a function which displays
	// the question, choice and progress by calling functions that do this
	displayNext: function() {
		if(quiz.hasEnded()){
			this.displayScore();
		} else {
			this.displayQuestion();
			this.displayChoices();
			this.displayProgress();
		}
	},

// 	Method which gets id and puts in html.

	displayQuestion: function(){
		this.populateWithHTML("question",quiz.getCurrentQuestion().text);
	},

	// Current question choices..

	displayChoices: function(){
		var choices = quiz.getCurrentQuestion().choices;

		for(var i = 0; i < choices.length; i++) {
			this.populateWithHTML("choice" + i, choices[i]);
			this.guessHandler("guess" + i, choices[i]);
			}
		},

		// displays the score
		displayScore: function() {
			var gameOverHTML = "<h1>Game Over</h1>";
			gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
			this.populateWithHTML("quiz", gameOverHTML);
		},


		//Clever --- Populates an Id with text, taking the text object and the id object
		populateWithHTML: function(id, text){
			var element = document.getElementById(id);
			element.innerHTML = text;
		},


		
		guessHandler: function(id, guess){
			var button = document.getElementById(id);
			button.onclick = function() {
				quiz.guess(guess);
				QuizUI.displayNext();
			}
		},

		displayProgress: function() {
			var currentQuestionNumber = quiz.currentQuestionIndex + 1;
			this.populateWithHTML("progress", "Question" + currentQuestionNumber + "of"+ quiz.questions.length);
		},
	
}



