const start = document.getElementById("start");
const warning = document.querySelector(".warning");
start.addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    if (username.value != "") {
        localStorage.setItem("player", JSON.stringify({
            username: username.value,
            score: 0,
            difficult: "begginer"
        }));
        location.replace(start.href)
    } else {
        warning.classList.remove("hidden")
    }
})