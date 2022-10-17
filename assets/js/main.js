
console.log("Sam, your questions");
var questions = [
  { 
    text: "What is CSS used for?", 
    choices: ["Styling", "Content", "Images", "Navigation"], 
    answer: 0

  },

  { 
    text: "What does Flex-Box do?", 
    choices: ["Change Fonts", "Create Nav Bar", "Arrange Containers", "Underline Words"], 
    answer: 2

  },

  { 
    text: "What data type is not in JavaScript", 
    choices: ["Boolean", "number", "string", "header"], 
    answer: 3

  },

  { 
    text: "The Condition of a if else Statement is enclosed in?", 
    choices: ["{}", "()", "<>", "[]"],
    answer: 1

  } 
]

var questionCounter = 0;
var score = 0;
var time = 60;

var interval;

document.getElementById("quiz").style.display = "none";
document.getElementById("ending").style.display = "none";
document.getElementById("scoreboard").style.display = "none";
sessionStorage.setItem("scores", "");


function startTimer(){
  document.getElementById("timer").innerHTML="Time: " + time; 
  time--;
  if(time < 0){
    clearInterval(interval);
    endQuiz();
  } addQuestion
}
function addQuestion(){
 
  document.getElementById("question").innerHTML=questions[questionCounter].text;
  document.getElementById("a").textContent=questions[questionCounter].choices[0];
  document.getElementById("b").textContent=questions[questionCounter].choices[1];
  document.getElementById("c").textContent=questions[questionCounter].choices[2];
  document.getElementById("d").textContent=questions[questionCounter].choices[3];



  
  document.getElementById("a").addEventListener("click" , checkAnswer);
  document.getElementById("b").addEventListener("click" , checkAnswer);
  document.getElementById("c").addEventListener("click" , checkAnswer);
  document.getElementById("d").addEventListener("click" , checkAnswer);

}
function checkAnswer(){
    var answer = this.textContent;
    var correctAnswer =  questions[questionCounter].choices[questions[questionCounter].answer];

    if( answer === correctAnswer){
      document.getElementById("outcome").innerHTML="CORRECT!";
      score++;
    }
      else{
        document.getElementById("outcome").innerHTML="INCORRECT!";
        time-=5;
      }
    questionCounter++;
      if(questionCounter < questions.length){
        addQuestion();
      }
      else{
        clearInterval(interval);
        endQuiz();
      }
}
function endQuiz() {
  document.getElementById("results").innerHTML="Score: " + score + "/" + questions.length;
  document.getElementById("ending").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("initials").value = "";

}
function startQuiz(){
  score = 0;
  questionCounter = 0;
  time = 60;
  document.getElementById("home").style.display = "none";
  document.getElementById("ending").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("scoreboard").style.display = "none";

  interval = setInterval("startTimer()", 1000);

  addQuestion();
}
function showScores(){
  var scoreData = sessionStorage.getItem("scores") + "<br>" + 
  document.getElementById("initials").value + " " + score;
  sessionStorage.setItem("scores", scoreData);
  document.getElementById("scores").innerHTML = scoreData;
  document.getElementById("scoreboard").style.display = "block";
  document.getElementById("ending").style.display = "none";
}

function goBack(){
  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function clearScores(){
  document.getElementById("scores").innerHTML = "";
  sessionStorage.setItem("scores", "");

  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("home").style.display = "block";

}
document.getElementById("start").addEventListener("click", startQuiz); 
document.getElementById("submit").addEventListener("click", showScores); 
document.getElementById("back").addEventListener("click", goBack); 
document.getElementById("clear").addEventListener("click", clearScores); 
