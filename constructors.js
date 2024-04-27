class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const Toyota = new Car('Toyota', 'Honda', 2021, 'true')
console.log({Toyota});
// Rental class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const uber = new Rental ('Jeep', 'Frontier', "2024-4-27", "2024-13-12")
console.log({uber});


// Question 2

class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}
const sampleQuestion = new Question(
    "What is the capital of France?",
    ["Paris", "London", "Berlin", "Madrid"],
   
);
console.log(sampleQuestion.checkAnswer("Paris"));
console.log(sampleQuestion.checkAnswer("London"));
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}
const quiz = new Quiz();
const question1 = new Question("What is the coding language is used for backend", ["Python", "Javascript", "DAS"], "Python");
const question2 = new Question("Who is the best poet?", ["Shakespeare", "Hemingway", "Tolstoy"], "Shakespeare");
quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.submitAnswer("Python");
quiz.submitAnswer("Shakespeare");
console.log("Score:", quiz.score);









