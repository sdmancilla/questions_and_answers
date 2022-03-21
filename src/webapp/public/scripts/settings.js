const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = document.getElementById("question")
    const answers = Array.from(event.target.querySelectorAll("input[type='text']"));
    const corrects = Array.from(event.target.querySelectorAll(".correct"));
    const difficulties = Array.from(event.target.querySelectorAll(".difficulty"));

    const correct = corrects.findIndex(elem => elem.checked == true)
    const difficulty = difficulties.find(elem => elem.checked == true)
    const body = {
        question: question.value,
        answers: answers.slice(1, 5).map(elem => elem.value),
        correct: correct,
        difficulty: difficulty.value
    }
    fetch("/settings", {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json; charset=utf-8" }
    })
});