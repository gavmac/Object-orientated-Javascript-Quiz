
// Hold the questions....

// Tip ---- make everything reusable,
// call function in app.js

//Constructor function that passes questions 
//choices and answer to an object with properties.

function Question(text, choices, answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
	
}

// A prototype property which takes choice, 
// and returns true/false 

Question.prototype.isCorrectAnswer = function (choice) {
	return this.answer === choice;

}