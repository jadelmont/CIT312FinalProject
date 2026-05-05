// Quiz questions: each maps to a program
const quizData = [
  {
    question: "Do you enjoy creating animated worlds or visual effects?",
    options: ["Yes", "No"],
    program: "Animation & Visual Effects"
  },
  {
    question: "Are you interested in keeping computer systems efficient and secure?",
    options: ["Yes", "No"],
    program: "Computer & Information Technology"
  },
  {
    question: "Do you like designing and solving networking challenges?",
    options: ["Yes", "No"],
    program: "Computing Infrastructure & Network Engineering Tech"
  },
  {
    question: "Would you enjoy protecting data and tracking hackers?",
    options: ["Yes", "No"],
    program: "Cybersecurity"
  },
  {
    question: "Do you like solving problems with statistics and machine learning?",
    options: ["Yes", "No"],
    program: "Data Analytics"
  },
  {
    question: "Are you excited about building virtual worlds and games?",
    options: ["Yes", "No"],
    program: "Game Development"
  },
  {
    question: "Do you want to design immersive theme park or museum experiences?",
    options: ["Yes", "No"],
    program: "Themed Entertainment Design"
  },
  {
    question: "Do you enjoy researching user needs and improving product design?",
    options: ["Yes", "No"],
    program: "UX Design"
  },
  {
    question: "Would you like to build secure, user-friendly web apps?",
    options: ["Yes", "No"],
    program: "Web Programming & Design"
  },
  {
    question: "Do you enjoy solving problems by building things step-by-step, like coding small features and watching them come to life?",
    options: ["Yes", "No"],
    program: "Web Programming & Design"
  }
];

const startBtn = document.querySelector("#startQuiz");
const quizArea = document.querySelector(".quiz-area");

let currentQuestion = 0;
let recommendations = [];

// Start quiz
startBtn.addEventListener("click", () => {
  currentQuestion = 0;
  recommendations = [];
  showQuestion();
});

// Show a question
function showQuestion() {
  const q = quizData[currentQuestion];
  let html = `<h3>${q.question}</h3><div>`;
  q.options.forEach(opt => {
    html += `<button class="btn btn-outline-primary m-2" onclick="recordAnswer('${opt}')">${opt}</button>`;
  });
  html += `</div>`;
  quizArea.innerHTML = html;
}

// Record answer
function recordAnswer(selected) {
  if (selected === "Yes") {
    recommendations.push(quizData[currentQuestion].program);
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Show results
function showResults() {
  let resultText = "";
  if (recommendations.length > 0) {
    resultText = `<p>Based on your interests, you might enjoy:</p><ul>`;
    recommendations.forEach(prog => {
      resultText += `<li>${prog}</li>`;
    });
    resultText += `</ul>`;
  } else {
    resultText = `<p>You didn’t select any strong interests — but exploring all programs could be valuable!</p>`;
  }

  quizArea.innerHTML = `
    <h3>Quiz Complete!</h3>
    ${resultText}
    <button class="btn btn-success" onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  recommendations = [];
  showQuestion();
}
