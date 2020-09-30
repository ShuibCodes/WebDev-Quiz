// Selecting Elements
const hint = document.querySelector(".hintBtn");
const form = document.querySelector('.quiz-form');
const answers = ['B' , 'B' , 'B' , 'B', 'B'];
const btn = document.querySelector(".submit");

const difficultyBox = document.querySelector(".difficulty")

//getting buttons
const answerTab = document.querySelector(".ansbtn");
const Easybtn = document.querySelector(".Easybtn")
const Hardbtn = document.querySelector(".Hardbtn")




// answer cards
 const questionCard1 = document.querySelector(".questionCard1");
 const questionCard2 = document.querySelector(".questionCard2");
 const questionCard3 = document.querySelector(".questionCard3");
 const questionCard4 = document.querySelector(".questionCard4");
 const questionCard5 = document.querySelector(".questionCard5");
 const answerCard1 = document.querySelector(".answerCard1");
 const answerCard2 = document.querySelector(".answerCard2");
 const answerCard3 = document.querySelector(".answerCard3");
 const answerCard4 = document.querySelector(".answerCard4");
 const answerCard5 = document.querySelector(".answerCard5");

// when page is loaded, automatically hide the answers

window.addEventListener('DOMContentLoaded', (event) => {
   answerTab.style.display ="none";
  difficultyBox.style.display = "none";
});

// Click "Need a Hint?" to see Hint:
  seeHint();


// When submit is clicked-
ScrollTop();
hidePrompt();
seeAnswerTab();
seeAnswerCards()
changeColors();

function seeAnswerCards(){
 
let allAnswers = [answerCard1,answerCard2,answerCard3,answerCard4,answerCard5]
let allQuestions =[questionCard1,questionCard2,questionCard3,questionCard4,questionCard5]
    answerTab.addEventListener("click", function(){
      answerTab.style.display = "none"
      difficultyBox.style.display = "block";
      allAnswers.forEach(function(e){
        e.style.display = "block";
        
      })
      allQuestions.forEach(function(e){
        e.style.display = "none"
      })

    })
   
}  

// When Submit is pressed 
btn.addEventListener("click", function(e){
  
    e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value] ;

  // check the answers and add 25% for each correct answer
  userAnswers.forEach((answer, index) => {
    if (answer === answers[index]){
      score += 25;
      
    }
  });
 
  // Display Results Message:

  const finalResult = document.querySelector('.thisspan');
  finalResult.textContent = `${score}%`;
  finalResult.style.display = "block";

  const percentage = document.querySelector('.resultMessage');
  if (percentage.style.display === "none") {
    percentage.style.display = "block";

  } else {
    hint.style.display = "none";
  }
    
})
// change color of easy of answerCards 
function changeColors(){
  Easybtn.addEventListener("click", function(){
    difficultyBox.classList.toggle("Green")
  })
  Hardbtn.addEventListener("click", function(){
    difficultyBox.classList.toggle("Red")
  })
  
}





// creating a button to display hints 
function seeHint(){
  const questions = document.getElementsByClassName("question"); //Get all questions
  
  for (var i = 0; i < questions.length; i++) { //Iterate for each one of the questions

    questions[i].addEventListener("click", function(e) { //Attach an event listener on the question, in order to understand this a bit better search for event delegation in JS
      if(e.target.classList[0] == "hintBtn") { //Check if the target that triggered the event is the hint button
        this.getElementsByClassName('msg')[0].classList.toggle("hidehint"); //Inside every question find the message and toggle the class
      }
    });
  }
}
 


// function to hide answer button and show when quiz is finished

function seeAnswerTab(){
  btn.addEventListener("click" , function(){
      answerTab.style.display = "block";
  })

}
// Creating btn that takes user to top of page for results after submit:

function ScrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// function to hide " on with the questions" after results are shown:

function hidePrompt(){
  const prompt = document.querySelector(".prompt");
  btn.addEventListener('click', function(){
   prompt.style.display = "none"
  })
}

function seeHint(){
  const questions = document.getElementsByClassName("question"); //Get all questions
  
  for (var i = 0; i < questions.length; i++) { //Iterate for each one of the questions

    questions[i].addEventListener("click", function(e) { //Attach an event listener on the question, in order to understand this a bit better search for event delegation in JS
      if(e.target.classList[0] == "hintBtn") { //Check if the target that triggered the event is the hint button
        this.getElementsByClassName('msg')[0].classList.toggle("hidehint"); //Inside every question find the message and toggle the class
      }
    });
  }
}
