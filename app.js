// Start the application with all the methods youved created.

// Wire up the Application

// Create Questions, Create an object which has a 
// multidimensional array of questions.

var questions = [
 new Question("What is Canada's national animal?",["Beaver","Duck","Horse"],"Beaver"),
 new Question("What is converted into alcohol during brewing?",["Grain","Sugar", "Water"],"Sugar"),
 new Question("Is this the coolest short questionare you have ever done",["Absolutly","No Chance", "Maybe"],"Absolutly")
];

// Create the Quiz
var quiz = new Quiz(questions);

//	Display Quiz
QuizUI.displayNext();