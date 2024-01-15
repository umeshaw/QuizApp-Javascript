const questions =[{
    question:"What is Git?",
    options: ["Text Editor","Compiler","Version Control System"],
    correctAnswer:"Version Control System"

},
{
    question: "Which command initializes a new Git repository?",
    options: ["git new","git init","git start"],
    correctAnswer:"git init"
},
{
    question:"How can you view the commit history in Git?",
    options: ["git logs","git history","git log"],
    correctAnswer:"git log"
},
{
    question:"Which command adds changes to the staging area in Git?",
    options: ["git add","git stage","git upload"],
    correctAnswer:"git add"
},
{
    question:"How do you commit the staged changes? ",
    options:["git save","git commit","git store"],
    correctAnswer:"git commit"
}
];
function displayQuestions()
 {
    const Container = document.getElementById('quiz');

    questions.forEach((q, index) => {
        const optionsHTML = q.options.map(option =>
            `<li><input type="radio" name="q${index}" value="${option}">${option}</li>`
        ).join('');

        Container.innerHTML += `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                <ul class="options">${optionsHTML}</ul>
            </div>`;
    });
}
function submitAnswers()
 {
    let score = 0;
    const resultsContainer = document.getElementById('results');

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);

        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (selectedAnswer === q.correctAnswer) {
                score++;
            }
        }
    });

    resultsContainer.innerHTML = `<p>Your final score is: ${score} out of ${questions.length}</p>`;
}
displayQuestions();