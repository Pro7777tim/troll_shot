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
function switchImage(oldId, newId) {
    const oldImg = document.getElementById(oldId);
    const newImg = document.getElementById(newId);

    newImg.style.opacity = 1;
    setTimeout(() => {
        oldImg.style.opacity = 0;
    }, 500);
}

const follower = document.getElementById("cursor");
let percentX = 10;
let percentY = 10;
let windowsX = 10;
let windowsY = 10;
const canvas2 = document.getElementById("canvas");
const ctx2 = canvas2.getContext("2d");
const canvas = document.getElementById("light");
const ctx = canvas.getContext("2d");
ctx2.fillStyle = "gray";
let persimmon = parseInt(localStorage.getItem("persimmon")) || 20;
let money = parseInt(localStorage.getItem("money")) || 0;
let interference = 100;
let nowNet = 0;
let tension = parseInt(localStorage.getItem("tension")) || 1000;
//light
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const staticLights = [
    { x: 0.02, y: 0, radius: 0.2 },
    { x: 0.98, y: 0, radius: 0.15 },
    { x: 0.5, y: 0.5, radius: 0.5 },
];

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function drawLight(xPercent, yPercent, radiusPercent) {
    const x = canvas.width * xPercent;
    const y = canvas.height * yPercent;
    const radius = Math.min(canvas.width, canvas.height) * radiusPercent;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, "rgba(255, 200, 100, 1)");
    gradient.addColorStop(0.3, "rgba(255, 170, 60, 0.7)");
    gradient.addColorStop(0.6, "rgba(255, 140, 30, 0.4)");
    gradient.addColorStop(1, "rgba(255, 100, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}
function drawYellowLight(xPercent, yPercent, radiusPercent) {
    const x = canvas.width * xPercent;
    const y = canvas.height * yPercent;
    const radius = Math.min(canvas.width, canvas.height) * radiusPercent;

    // Створення жовтого градієнту
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, "rgba(255, 145, 0, 0.1)");
    gradient.addColorStop(0.4, "rgba(255, 145, 0, 0.05)");
    gradient.addColorStop(0.7, "rgba(255, 255, 30, 0)");
    gradient.addColorStop(1, "rgba(255, 255, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-out";
    drawLight(mouseX / canvas.width, mouseY / canvas.height, 0.12);
    staticLights.forEach((light) => drawLight(light.x, light.y, light.radius));
    ctx.globalCompositeOperation = "source-over";
    drawYellowLight(mouseX / canvas.width, mouseY / canvas.height, 0.12);
    staticLights.forEach((light) =>
        drawYellowLight(light.x, light.y, light.radius)
    );
    requestAnimationFrame(draw);
}

draw();

//add event listener and interval
document.addEventListener(
    "mousemove",
    (e) => {
        document.body.style.backgroundPosition =
            windowsX + "% " + windowsY + "%";
    },
    false
);
document.addEventListener("mousemove", (e) => {
    percentX = (e.pageX / window.innerWidth) * 100;
    percentY = (e.pageY / window.innerHeight) * 100;
});
document.addEventListener("mousemove", (e) => {
    windowsX = (e.clientX / window.innerWidth) * 100;
    windowsY = (e.clientY / window.innerHeight) * 100;
});
document.body.addEventListener(
    "touchmove",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);

animate();

playSound("src/sound/calm.mp3");
setInterval(() => {
    playSound("src/sound/calm.mp3");
}, 23000);

setInterval(() => {
    document.getElementById("moneyTxt").innerHTML = money;
}, 1000);

setInterval(() => {
    let rand = random(Math.floor(tension / 100));
    if (rand == 1) {
        switchImage("rack", "rack2");
        setTimeout(() => {
            switchImage("rack2", "rack");
        }, 1000);
    }
}, 3000);

setInterval(function () {
    ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < interference; i++) {
        ctx2.fillRect(
            random(window.innerWidth / 2),
            random(window.innerHeight / 2),
            10,
            0.5
        );
    }
}, 100);
