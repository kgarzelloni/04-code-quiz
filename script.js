var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var timeEl = document.getElementById("time");
var main = document.getElementById("main");

submitButton.addEventListener("click", function (event) {
  console.log("it worked!");
  main.style.display = "none";
  promptQuestionOne();
});


submitButton.addEventListener("click", setTime);
var setTime = setInterval(function() {

}, 1000)



function showResults() {}
submitButton.addEventListener("click", showResults);

var quizQuestions = [
  {
    question: "What can JavaScript do for developers?",
    answers: {
      a: "it creates a static web page",
      b: "it is the markup language that creates the building blocks of the web",
      c: "it is the only language that controls how webpages look in the browser",
      d: "it supports dynamic, imperative and declarative programming language",
    },
    correctAnswer: "d",
  },
  {
    question: "What does the acronym API stand for?",
    answers: {
      a: "Applicable Paradigm Inference",
      b: "Apple Program Information",
      c: "Application Programming Interface",
      d: "Always Prefer Introverts",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the DOM, in HTML terms?",
    answers: {
      a: "a vintage Champagne",
      b: "the Document Oject Model",
      c: "a third party API",
      d: "a repository where web pages under development are stored",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of the following can JavaScript do?",
    answers: {
      a: "add new HTML elements and attributes",
      b: "change CSS styles in the page",
      c: "react to existing HTML events",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "Which is not an example of a semantic element?",
    answers: {
      a: "<footer>",
      b: "<article>",
      c: "<h1>",
      d: "<div>",
    },
    correctAnswer: "d",
  },
];
console.log(quizQuestions.length);

function promptQuestionOne() {
  console.log("it worked again");
  //made a question container, gave that to the quiz container and then we gave that an ID
  var questionContainer = document.createElement("div");
  quizContainer.appendChild(questionContainer);
  questionContainer.setAttribute("id", "questionContainer");
  //created a title element and populated with first question in array, added the question title to the question container
  var questionTitle = document.createElement("h3");
  questionTitle.innerHTML = quizQuestions[0].question;
  questionContainer.appendChild(questionTitle);
  //created a list and added that to the question container
  var possibleAnswers = document.createElement("ul");
  questionContainer.appendChild(possibleAnswers);
  //added list items to list and gave each item answer text
  var optionA = document.createElement("li");
  var optionAtext = document.createTextNode(quizQuestions[0].answers.a);
  optionA.appendChild(optionAtext);
  var optionB = document.createElement("li");
  var optionBtext = document.createTextNode(quizQuestions[0].answers.b);
  optionB.appendChild(optionBtext);
  var optionC = document.createElement("li");
  var optionCtext = document.createTextNode(quizQuestions[0].answers.c);
  optionC.appendChild(optionCtext);
  var optionD = document.createElement("li");
  optionD.setAttribute("value", "correct");
  var optionDtext = document.createTextNode(quizQuestions[0].answers.d);
  optionD.appendChild(optionDtext);
  possibleAnswers.appendChild(optionA);
  possibleAnswers.appendChild(optionB);
  possibleAnswers.appendChild(optionC);
  possibleAnswers.appendChild(optionD);
  //added eventlistener to question container
  questionContainer.addEventListener("click", function (event) {
    console.log(event.target.innerText);
    //assigned correct answer value from array to new variable
    var correct = quizQuestions[0].answers.d;
    var text;
    //check the text of click target with correct answer text
    if (event.target.innerText == correct) { 
    window.alert("Great Job! Correct") ;
      //store correct or incorrect in local storage
      console.log("correct");
    
    } else { 
        window.alert("Not quite,try again.") ;
    }
    
  });
  console.log("fire next question very last")
}
submitButton.addEventListener("click", function (event) {
    console.log("it worked!");
    promptQuestionTwo();
  })
//at the end of a question funtion, call the next function
function promptQuestionTwo() {
    
    //made a question container, gave that to the quiz container and then we gave that an ID
    var questionContainer = document.createElement("div");
    quizContainer.appendChild(questionContainer);
    questionContainer.setAttribute("id", "questionContainer");
    //created a title element and populated with first question in array, added the question title to the question container
    var questionTitle = document.createElement("h3");
    questionTitle.innerHTML = quizQuestions[1].question;
    questionContainer.appendChild(questionTitle);
    //created a list and added that to the question container
    var possibleAnswers = document.createElement("ul");
    questionContainer.appendChild(possibleAnswers);
    //added list items to list and gave each item answer text
    var optionA = document.createElement("li");
    var optionAtext = document.createTextNode(quizQuestions[1].answers.a);
    optionA.appendChild(optionAtext);
    var optionB = document.createElement("li");
    var optionBtext = document.createTextNode(quizQuestions[1].answers.b);
    optionB.appendChild(optionBtext);
    var optionC = document.createElement("li");
    var optionCtext = document.createTextNode(quizQuestions[1].answers.c);
    optionC.setAttribute("value", "correct");
    optionC.appendChild(optionCtext);
    var optionD = document.createElement("li");
    var optionDtext = document.createTextNode(quizQuestions[1].answers.d);
    optionD.appendChild(optionDtext);
    possibleAnswers.appendChild(optionA);
    possibleAnswers.appendChild(optionB);
    possibleAnswers.appendChild(optionC);
    possibleAnswers.appendChild(optionD);
    //added eventlistener to question container
    questionContainer.addEventListener("click", function (event) {
      console.log(event.target.innerText);
      //assigned correct answer value from array to new variable
      var correct = quizQuestions[1].answers.c;
      //check the text of click target with correct answer text
      if (event.target.innerText == correct) 
      alert("Correct! Great work!"); {
        //store correct or incorrect in local storage
        console.log("correct");
      } 
      // else alert("sorry that's incorrect") 
      //   console.log("incorrect");
      
    });
    console.log("fire next question very last")
  }
  submitButton.addEventListener("click", function (event) {
    console.log("it worked!");
    promptQuestionThree();
  })
//at the end of a question funtion, call the next function
function promptQuestionThree() {
    
    //made a question container, gave that to the quiz container and then we gave that an ID
    var questionContainer = document.createElement("div");
    quizContainer.appendChild(questionContainer);
    questionContainer.setAttribute("id", "questionContainer");
    //created a title element and populated with first question in array, added the question title to the question container
    var questionTitle = document.createElement("h3");
    questionTitle.innerHTML = quizQuestions[2].question;
    questionContainer.appendChild(questionTitle);
    //created a list and added that to the question container
    var possibleAnswers = document.createElement("ul");
    questionContainer.appendChild(possibleAnswers);
    //added list items to list and gave each item answer text
    var optionA = document.createElement("li");
    var optionAtext = document.createTextNode(quizQuestions[2].answers.a);
    optionA.appendChild(optionAtext);
    var optionB = document.createElement("li");
    var optionBtext = document.createTextNode(quizQuestions[2].answers.b);
    optionB.appendChild(optionBtext);
    var optionC = document.createElement("li");
    var optionCtext = document.createTextNode(quizQuestions[2].answers.c);
    optionC.setAttribute("value", "correct");
    optionC.appendChild(optionCtext);
    var optionD = document.createElement("li");
    var optionDtext = document.createTextNode(quizQuestions[2].answers.d);
    optionD.appendChild(optionDtext);
    possibleAnswers.appendChild(optionA);
    possibleAnswers.appendChild(optionB);
    possibleAnswers.appendChild(optionC);
    possibleAnswers.appendChild(optionD);
    //added eventlistener to question container
    questionContainer.addEventListener("click", function (event) {
      console.log(event.target.innerText);
      //assigned correct answer value from array to new variable
      var correct = quizQuestions[2].answers.b;
      //check the text of click target with correct answer text
      if (event.target.innerText == correct) 
      alert("Correct! Great work!"); {
        //store correct or incorrect in local storage
        console.log("correct");
      } 
      // else alert("sorry that's incorrect") 
      //   console.log("incorrect");
      
    });
    console.log("fire next question very last")
  }
  submitButton.addEventListener("click", function (event) {
    console.log("it worked!");
    promptQuestionFour();
  })
//at the end of a question funtion, call the next function
function promptQuestionFour() {
    
    //made a question container, gave that to the quiz container and then we gave that an ID
    var questionContainer = document.createElement("div");
    quizContainer.appendChild(questionContainer);
    questionContainer.setAttribute("id", "questionContainer");
    //created a title element and populated with first question in array, added the question title to the question container
    var questionTitle = document.createElement("h3");
    questionTitle.innerHTML = quizQuestions[3].question;
    questionContainer.appendChild(questionTitle);
    //created a list and added that to the question container
    var possibleAnswers = document.createElement("ul");
    questionContainer.appendChild(possibleAnswers);
    //added list items to list and gave each item answer text
    var optionA = document.createElement("li");
    var optionAtext = document.createTextNode(quizQuestions[3].answers.a);
    optionA.appendChild(optionAtext);
    var optionB = document.createElement("li");
    var optionBtext = document.createTextNode(quizQuestions[3].answers.b);
    optionB.appendChild(optionBtext);
    var optionC = document.createElement("li");
    var optionCtext = document.createTextNode(quizQuestions[3].answers.c);
    optionC.setAttribute("value", "correct");
    optionC.appendChild(optionCtext);
    var optionD = document.createElement("li");
    var optionDtext = document.createTextNode(quizQuestions[3].answers.d);
    optionD.appendChild(optionDtext);
    possibleAnswers.appendChild(optionA);
    possibleAnswers.appendChild(optionB);
    possibleAnswers.appendChild(optionC);
    possibleAnswers.appendChild(optionD);
    //added eventlistener to question container
    questionContainer.addEventListener("click", function (event) {
      console.log(event.target.innerText);
      //assigned correct answer value from array to new variable
      var correct = quizQuestions[3].answers.d;
      //check the text of click target with correct answer text
      if (event.target.innerText == correct) 
      alert("Correct! Great work!"); {
        //store correct or incorrect in local storage
        console.log("correct");
      } 
      // else alert("sorry that's incorrect") 
      //   console.log("incorrect");
      
    });
    console.log("fire next question very last")
  }
  submitButton.addEventListener("click", function (event) {
    console.log("it worked!");
    promptQuestionFive();
  })
//at the end of a question funtion, call the next function
function promptQuestionFive() {
    
    //made a question container, gave that to the quiz container and then we gave that an ID
    var questionContainer = document.createElement("div");
    quizContainer.appendChild(questionContainer);
    questionContainer.setAttribute("id", "questionContainer");
    //created a title element and populated with first question in array, added the question title to the question container
    var questionTitle = document.createElement("h3");
    questionTitle.innerHTML = quizQuestions[4].question;
    questionContainer.appendChild(questionTitle);
    //created a list and added that to the question container
    var possibleAnswers = document.createElement("ul");
    questionContainer.appendChild(possibleAnswers);
    //added list items to list and gave each item answer text
    var optionA = document.createElement("li");
    var optionAtext = document.createTextNode(quizQuestions[4].answers.a);
    optionA.appendChild(optionAtext);
    var optionB = document.createElement("li");
    var optionBtext = document.createTextNode(quizQuestions[4].answers.b);
    optionB.appendChild(optionBtext);
    var optionC = document.createElement("li");
    var optionCtext = document.createTextNode(quizQuestions[4].answers.c);
    optionC.setAttribute("value", "correct");
    optionC.appendChild(optionCtext);
    var optionD = document.createElement("li");
    var optionDtext = document.createTextNode(quizQuestions[4].answers.d);
    optionD.appendChild(optionDtext);
    possibleAnswers.appendChild(optionA);
    possibleAnswers.appendChild(optionB);
    possibleAnswers.appendChild(optionC);
    possibleAnswers.appendChild(optionD);
    //added eventlistener to question container
    questionContainer.addEventListener("click", function (event) {
      console.log(event.target.innerText);
      //assigned correct answer value from array to new variable
      var correct = quizQuestions[4].answers.d;
      //check the text of click target with correct answer text
      if (event.target.innerText == correct) 
      alert("Correct! Great work!"); {
        //store correct or incorrect in local storage
        console.log("correct");
      } 
      // else alert("sorry that's incorrect") 
      //   console.log("incorrect");
      
    });
   
  }
