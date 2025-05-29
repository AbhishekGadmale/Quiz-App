const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python"],
    answer: 1
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["Django", "Flask", "React"],
    answer: 2
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  let html = `<h3>${q.question}</h3>`;
  q.options.forEach((opt, i) => {
    html += `<button onclick="checkAnswer(${i})">${opt}</button>`;
  });
  document.getElementById("quizBox").innerHTML = html;
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
  }
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quizBox").innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
  }
}

showQuestion();
