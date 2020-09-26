// Selecting Elements
// const hint = document.querySelector(".hint");
// const hint2 = document.querySelector(".hint2");
// const hint3 = document.querySelector(".hint3");
// const hint4 = document.querySelector(".hint4");
// const thishint = document.querySelector(".thishint");
const form = document.querySelector('.quiz-form');
const answers = ['B' , 'B' , 'B' , 'B'];
const btn = document.querySelector(".submit");
const answerTab = document.querySelector(".ansbtn");
const answerTab2 = document.querySelector(".ansbtn2")
const answerTab3 = document.querySelector(".ansbtn3");
const answerTab4 = document.querySelector(".ansbtn4")
const arrayAnswer = [answerTab,answerTab2,answerTab3,answerTab4];

// answer cards
const answerCard1 = document.querySelector(".answerCard1");
const answerCard2 = document.querySelector(".answerCard2")

// when page is loaded, automatically hide the answers

window.addEventListener('DOMContentLoaded', (event) => {
arrayAnswer.forEach(function(el){
  el.style.display ="none";
})
});



// Click "Need a Hint?" to see Hint:
// Hint for Question 1:
  // seeHint();
// HInt for Question 2:
//   seeHint2();
// // Hint for Question 3:
//   seeHint3();
// // Hint for Question 4:
//   seeHint4();


// When submit is clicked-
QuestionBank1();
QuestionBank2()
QuestionBank3()
QuestionBank4();
ScrollTop();
hidePrompt();
seeAnswers();


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

//creating a button to display hints 

  const questions = document.getElementsByClassName("question"); //Get all questions

  for (var i = 0; i < questions.length; i++) { //Iterate for each one of the questions
  
    questions[i].addEventListener("click", function(e) { //Attach an event listener on the question, in order to understand this a bit better search for event delegation in JS
      if(e.target.classList[0] == "hintBtn") { //Check if the target that triggered the event is the hint button
        this.getElementsByClassName('msg')[0].classList.toggle("hidehint"); //Inside every question find the message and toggle the class
      }
    });
  }


// function seeHint2(){
//   const hintBtn2 = document.querySelector(".btnTwo");
//   hintBtn2.addEventListener("click",function(){
//       if (hint2.style.display === "none") {
//           hint2.style.display = "block";
//         } else {
//           hint2.style.display = "none";
//         }
//   });
// }  
// function seeHint3(){
//   const hintBtn3 = document.querySelector(".btnThree");
//   hintBtn3.addEventListener("click",function(){
//       if (hint3.style.display === "none") {
//           hint3.style.display = "block";
//         } else {
//           hint3.style.display = "none";
//         }
//   });
// }  
// function seeHint4(){
//   const hintBtn4 = document.querySelector(".btnFour");
//   hintBtn4.addEventListener("click",function(){
//       if (hint4.style.display === "none") {
//           hint4.style.display = "block";
//         } else {
//           hint4.style.display = "none";
//         }
//   });
// }  


// function to hide answers and show when quiz is finished

function seeAnswers(){
  btn.addEventListener("click" , function(){
    arrayAnswer.forEach(function(e){
      e.style.display = "block";
    })


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


// when user clicks answer to transiton to answer cards

function QuestionBank1(){
  // getting answer button and cards
  const answerTab = document.querySelector(".ansbtn");
  const questionCard1 = document.querySelector(".questionCard1");
  const answerCard1 = document.querySelector(".answerCard1");

// showing answer card

    answerTab.addEventListener("click", function(){
    if(questionCard1.style.display = "block"){
      questionCard1.style.display = "none";
      answerCard1.style.display = "block";
  } else{
    questionCard1.style.display = "block";
    answerCard1.style.display = "none";
  }

   //getting easy and hard buttons
   const Easybtn = document.querySelector(".Easybtn")
  const Hardbtn = document.querySelector(".Hardbtn") 

//  changing color of div once buttons are clicked

  Easybtn.addEventListener("click", function(){
    answerCard1.classList.toggle("Green")
  })
  Hardbtn.addEventListener("click", function(){
    answerCard1.classList.toggle("Red");
  })

  })
 

}
function QuestionBank2(){
  // getting answer button and cards
  const answerTab2 = document.querySelector(".ansbtn2");
  const questionCard2 = document.querySelector(".questionCard2");
  const answerCard2 = document.querySelector(".answerCard2");
// showing answer card 
    answerTab2.addEventListener("click", function(){
    if(questionCard2.style.display = "block"){
      questionCard2.style.display = "none";
      answerCard2.style.display = "block";
  } else{
    questionCard2.style.display = "block";
    answerCard2.style.display = "none";
  }
      

  })
    // getting easy and hard buttons 
  const Easybtn2 = document.querySelector(".Easybtn2")
  const Hardbtn2 = document.querySelector(".Hardbtn2")

  // changing color of div once buttons are clicked 

  Easybtn2.addEventListener("click", function(){
    answerCard2.classList.toggle("Green")
    
  })
  Hardbtn2.addEventListener("click", function(){
    answerCard2.classList.toggle("Red");
  })
}


function QuestionBank3(){
  // getting answer button and cards
  const answerTab3 = document.querySelector(".ansbtn3");
  const questionCard3 = document.querySelector(".questionCard3");
  const answerCard3 = document.querySelector(".answerCard3");
// showing answer card 
    answerTab3.addEventListener("click", function(){
    if(questionCard3.style.display = "block"){
      questionCard3.style.display = "none";
      answerCard3.style.display = "block";
  } else{
    questionCard3.style.display = "block";
    answerCard3.style.display = "none";
  }
      

  })
    // getting easy and hard buttons 
  const Easybtn3 = document.querySelector(".Easybtn3")
  const Hardbtn3 = document.querySelector(".Hardbtn3")

  // changing color of div once buttons are clicked 

  Easybtn3.addEventListener("click", function(){
    answerCard3.classList.toggle("Green")
    
  })
  Hardbtn3.addEventListener("click", function(){
    answerCard3.classList.toggle("Red");
  })
}

function QuestionBank4(){
  // getting answer button and cards
  const answerTab4 = document.querySelector(".ansbtn4");
  const questionCard4 = document.querySelector(".questionCard4");
  const answerCard4 = document.querySelector(".answerCard4");
// showing answer card 
    answerTab4.addEventListener("click", function(){
    if(questionCard4.style.display = "block"){
      answerCard4.style.display = "block";
      questionCard4.style.display = "none";

  } else{
    questionCard4.style.display = "block";
    answerCard4.style.display = "none";
  }
      

  })
    // getting easy and hard buttons 
  const Easybtn4 = document.querySelector(".Easybtn4")
  const Hardbtn4 = document.querySelector(".Hardbtn4")

  // changing color of div once buttons are clicked 

  Easybtn4.addEventListener("click", function(){
    answerCard4.classList.toggle("Green")
    
  })
  Hardbtn4.addEventListener("click", function(){
    answerCard4.classList.toggle("Red");
  })
}
