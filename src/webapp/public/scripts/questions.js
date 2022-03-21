const question = document.getElementById("question")
const answers = document.querySelectorAll("input.answer")
const answers_labels = document.querySelectorAll("span")
const difficulties = ["begginer", "easy", "medium", "hard", "impossible"]
const next_button = document.getElementById("next")
const finish_button = document.getElementById("finish")

answers.forEach((answer, index) => {
    answer.addEventListener("click", async () => {
        const response = await fetch("/questions", {
            method: "post",
            body: JSON.stringify({
                answer: answer.value,
                question: question.innerText
            }),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
        const result = await response.json();
        
        const player = JSON.parse(localStorage.getItem("player"));
        if (result.correct) {
            const index_difficulty = difficulties.findIndex(elem => elem == player.difficult);
            player.difficult = difficulties[index_difficulty + 1];
            player.score += (index_difficulty + 1) * 100;
            localStorage.setItem("player", JSON.stringify(player))
            next_button.classList.remove("disable")
            finish_button.classList.remove("disable")
            next_button.onclick = (event) => {
                event.preventDefault();
                if (player.difficult == undefined) {
                    location.replace("/endgame")
                    finishGame("You've won")
                } else {
                    location.replace("/questions")
                }
            }
            answers_labels[index].classList.add("correct")

        } else {
            answers_labels[index].classList.add("incorrect")
            answers_labels[result.correctIndex].classList.add("correct")
            setTimeout(() => {
                player.score = 0;
                localStorage.setItem("player", JSON.stringify(player))
                finishGame("You've lost")
                location.replace("/endgame")
            }, 3000)
        }
        
        answers.forEach(answer => {
            answer.setAttribute("disabled", true)
        });
    })
})

finish_button.addEventListener("click", () => {
    finishGame("You've left the game")
})

window.onload = async () => {
    const difficulty = JSON.parse(localStorage.getItem("player")).difficult;
    const response = await fetch(`/questions/${difficulty}`);
    const result = await response.json();
    question.innerText = result.question;
    for (let i = 0; i < result.answers.length; i++) {
        answers_labels[i].innerText = result.answers[i];
        answers[i].value = result.answers[i];
    }
}

function finishGame(message) {
    //win, loose, finish
    const player = JSON.parse(localStorage.getItem("player"));
    player.message = message;
    fetch("/endgame", {
        method: "post",
        body: JSON.stringify(player),
        headers: { "Content-Type": "application/json; charset=utf-8" }
    })
    localStorage.setItem("player", JSON.stringify(player))
}