// Selecting Elements
const hint1 = document.querySelector(".hint1");
const hint2 = document.querySelector(".hint2");
const hint3 = document.querySelector(".hint3");
const hint4 = document.querySelector(".hint4");
const form = document.querySelector('.quiz-form');
const answers = ['B' , 'B' , 'B' , 'B'];
const btn = document.querySelector(".submit");


// Click "Need a Hint?" to see Hint:
// Hint for Question 1:
  seeHint1();
// HInt for Question 2:
  seeHint2();
// Hint for Question 3:
  seeHint3();
// Hint for Question 4:
  seeHint4();


// When submit is clicked-

btn.addEventListener("click", function(e){
    e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value] ;

  // check the answers
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

// // creating a button to display hints 1

function seeHint1(){
  const hintBtn = document.querySelector(".btnOne");
  hintBtn.addEventListener("click",function(){
      if (hint1.style.display === "none") {
          hint1.style.display = "block";
        } else {
          hint1.style.display = "none";
        }
  });
}  

// Creating button to display hint 2

function seeHint2(){
  const hintBtn2 = document.querySelector(".btnTwo");
  hintBtn2.addEventListener("click",function(){
      if (hint2.style.display === "none") {
          hint2.style.display = "block";
        } else {
          hint2.style.display = "none";
        }
  });
}  
function seeHint3(){
  const hintBtn3 = document.querySelector(".btnThree");
  hintBtn3.addEventListener("click",function(){
      if (hint3.style.display === "none") {
          hint3.style.display = "block";
        } else {
          hint3.style.display = "none";
        }
  });
}  
function seeHint4(){
  const hintBtn4 = document.querySelector(".btnFour");
  hintBtn4.addEventListener("click",function(){
      if (hint4.style.display === "none") {
          hint4.style.display = "block";
        } else {
          hint4.style.display = "none";
        }
  });
}  






