// Mind reading trick
function mindRead() {
document.getElementById("mindResult").innerText =
"I knew you'd pick that number 😉";
}


// Hearts game
let score = 0;
let timeLeft = 15;
let timerInterval;


const romanticLines = [
"You’re the best jaan ❤️",
"You make me happiest 💖",
"I love your smile 💕",
"You brighten my day ✨",
"You are my world 💞",
"I love you 💗",
"You’re my favorite person 💓",
"You make life better 💘"
];


function startGame() {
score = 0;
timeLeft = 15;
document.getElementById("score").innerText = "Hearts: 0";
document.getElementById("timer").innerText = "Time: 15";
document.getElementById("message").innerText = "";
document.getElementById("heart").style.display = "block";
moveHeart();
timerInterval = setInterval(() => {
timeLeft--;
document.getElementById("timer").innerText = "Time: " + timeLeft;
if (timeLeft <= 0) endGame();
}, 1000);
}


function catchHeart() {
score++;
document.getElementById("score").innerText = "Hearts: " + score;
document.getElementById("message").innerText = romanticLines[Math.floor(Math.random()*romanticLines.length)];
moveHeart();
}


function moveHeart() {
const h = document.getElementById("heart");
h.style.left = Math.random()*window.innerWidth + "px";
h.style.top = Math.random()*window.innerHeight + "px";
}


function endGame() {
clearInterval(timerInterval);
document.getElementById("heart").style.display = "none";
document.getElementById("finalText").innerHTML = `You caught <strong>${score}</strong> hearts! ❤️`;
document.getElementById("overlay").style.display = "block";
document.getElementById("loveletter").style.display = "block";
}


function closeLetter() {
document.getElementById("overlay").style.display = "none";
document.getElementById("loveletter").style.display = "none";
}
