window.onload = async () => {
    const {username, score, message} = JSON.parse(localStorage.getItem("player"));
    const status = document.getElementById("status");
    const user = document.querySelector(".statistics > h2");
    const performance = document.querySelector(".statistics > p");
    status.innerText = message;
    user.innerText = username;
    performance.innerText = score;
}