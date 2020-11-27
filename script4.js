const quizData = [{ question: 'How old are you?', a: '10', b: '20', c: '23', d: '50', correctAns: 'c', count: 0 }, { question: 'WWW stands for?', a: 'World Wide Web', b: 'Web Wide World', c: 'Worldy Wide web', d: 'none of the above', correctAns: 'a', count: 0 }, { question: 'Adult age in india?', a: '20', b: '18', c: '17', d: '50', correctAns: 'b', count: 0 }, { question: 'Capital of India?', a: 'Bhopal', b: 'Mumbai', c: 'Kolkata', d: 'New Delhi', correctAns: 'd', count: 0 }, { question: 'Capital of MP?', a: 'Bhopal', b: 'Burhanpur', c: 'Indore', d: 'Guna', correctAns: 'a', count: 0 } ] 
let totalScore=quizData.length;
let currentScore=0
function getRandomQuestion() {
  return (Math.floor(Math.random() * quizData.length))
}

function checkAns(index) {
  const rad = document.querySelector("#main-ul [type=radio]:checked"); // only find checked radio
  const value = rad ? rad.id : ""; // if none checked, set empty value

  if (!value) {
    alert('choose at least one option')
    return; // leave the function
  }

  else{

    if(value===quizData[index].correctAns)
    {
        alert('correct ans')
        currentScore++
    }
    else{
        alert('incorrect ans')
        
    }
  }
//   const res = value === quizData[index].correctAns ? 'correct ans' : 'incorrect ans'; // this is called a ternary
//   alert(res);
  [...document.querySelectorAll("#main-ul [type=radio]")].forEach(el => el.checked = false);
  
  quizData.splice(index, 1); // remove question
  
  startQuiz();
}

let index; // global var.
function startQuiz() {
  if (quizData.length===0) {
    document.getElementById('quiz').innerHTML =
     `<h2>You answered correctly ${currentScore}/${totalScore}</h2>
     <button onclick="location.reload()">Play Again</button>
    
    `
    document.getElementById("main-ul").style.display="none";
    document.getElementById("submit").style.display="none";
    return;
  }
  index = getRandomQuestion();
  document.getElementById('question').innerHTML = quizData[index].question;
  // DRY, don't repeat yourself
  ["a","b","c","d"].forEach(letter => document.getElementById(letter+'_text').innerHTML = quizData[index][letter])
}
window.addEventListener("load", function() { // when the page loads
  document.getElementById('submit').addEventListener('click', function() {
    checkAns(index);
  })
  startQuiz();
})