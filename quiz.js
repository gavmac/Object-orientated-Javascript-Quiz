
 
// Keep Count of the Score and question

// Build a constructor with the score 
// Question Number and QUESTIONS, assigned to a property.

function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.currentQuestionIndex = 0;
};

//Create a guess Method, takes in a string of answer.
//If the question answer is equal to the choice return true
//Add to the score,
//increment the current question index,
Quiz.prototype.guess = function(guessAnswer){
	if (this.getCurrentQuestion().isCorrectAnswer(guessAnswer)){
		this.score++;
		};
	this.currentQuestionIndex++;
};

//Needs to provide the right answer;
//Create a method which gets the current question; which 
// you had the sense to create properties for
Quiz.prototype.getCurrentQuestion = function(){
	return this.questions[this.currentQuestionIndex];
};


// Something track question and reset Number

Quiz.prototype.hasEnded = function(){
	return this.currentQuestionIndex >= this.questions.length
};