//add function and value
function random(num) {
    return Math.floor(Math.random() * num) + 1;
}
function animate() {
    follower.style.left = percentX + "%";
    follower.style.top = percentY + "%";
    requestAnimationFrame(animate);
}
function link() {
    let change = random(6);
    if (change == 1) {
        window.open("https://www.youtube.com/watch?v=j-iheFkstFQ", "_blank");
    } else if (change == 2) {
        window.open("https://www.youtube.com/shorts/31HVF6mR21c");
    } else if (change == 3) {
        window.open(
            "https://www.youtube.com/@%D1%87%D0%BE%D1%80%D0%BD%D0%B8%D0%B9_%D0%B4%D0%B8%D0%BD%D0%BE333"
        );
    } else if (change == 4) {
        window.open("https://www.youtube.com/@FGOT");
    } else if (change == 5) {
        window.open("https://www.youtube.com/watch?v=B9KRJF07S0k");
    } else if (change == 6) {
        window.open("https://www.youtube.com/watch?v=k2IEKgn-RTA");
    }
}
function playSound(src) {
    let audio = new Audio(src);
    audio.play();
}
function moneyDown(num) {
    playSound("./src/sound/money.mp3");
    for (let i = 0; i < num; i++) {
        let money = document.createElement("img");
        money.src = "src/img/money.png";
        money.className = "money";
        money.draggable = false;
        money.style.position = "absolute";
        money.style.left = Math.random() * 100 + "vw";
        money.style.top = "0";
        let speed = Math.random() * 2 + 1;
        money.style.animation = `down ${speed}s linear forwards`;
        document.body.appendChild(money);
        setTimeout(() => {
            money.remove();
        }, speed * 1000 + 500);
    }
}
function experDown(num) {
    playSound("./src/sound/experience.mp3");
    for (let i = 0; i < num; i++) {
        let money = document.createElement("img");
        money.src = "src/img/experience.png";
        money.className = "experience";
        money.draggable = false;
        money.style.position = "absolute";
        money.style.left = Math.random() * 100 + "vw";
        money.style.top = "0";
        let speed = Math.random() * 2 + 1;
        money.style.animation = `down ${speed}s linear forwards`;
        document.body.appendChild(money);
        setTimeout(() => {
            money.remove();
        }, speed * 1000 + 500);
    }
}

const follower = document.getElementById("cursor");
let percentX = 10;
let percentY = 10;

//add event listener and interval
document.body.addEventListener(
    "touchmove",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);
document.addEventListener("mousemove", (e) => {
    percentX = (e.clientX / window.innerWidth) * 100;
    percentY = (e.clientY / window.innerHeight) * 100;
});

animate();

playSound("src/sound/calm.mp3");
setInterval(() => {
    playSound("src/sound/calm.mp3");
}, 23000);
