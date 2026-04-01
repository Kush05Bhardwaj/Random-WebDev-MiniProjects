const quiz = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "Which language is used for web?",
        options: ["Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "HTML stands for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language"],
        answer: "Hyper Text Markup Language"
    }
];

let index = 0;
let score = 0;
let selected = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    selected = "";
    questionEl.innerText = quiz[index].question;
    optionsEl.innerHTML = "";

    quiz[index].options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => selected = opt;
        optionsEl.appendChild(btn);
    });
}

nextBtn.onclick = () => {
    if (selected === quiz[index].answer) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("scoreText").innerText = `Score: ${score}/${quiz.length}`;

    let msg = "Try Again";
    if (score === quiz.length) msg = "Excellent";
    else if (score >= 2) msg = "Good";

    document.getElementById("message").innerText = msg;
}

function restartQuiz() {
    index = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();