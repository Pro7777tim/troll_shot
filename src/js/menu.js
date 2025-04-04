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
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "gray";
let persimmon = parseInt(localStorage.getItem("persimmon")) || 20;
let money = parseInt(localStorage.getItem("money")) || 0;
let tension = 1000;
let interference = 100;
let nowNet = 0;

//add event listener and interval
document.addEventListener(
    "mousemove",
    (e) => {
        document.body.style.backgroundPosition =
            percentX + "% " + percentY + "%";
    },
    false
);
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
document.getElementById("persimmon").addEventListener("click", (e) => {
    playSound("src/sound/button.mp3");
    persimmon++;
    console.log(persimmon);
    localStorage.setItem("persimmon", persimmon);
    let change = random(persimmon);
    if (change == 1) {
        link();
    } else if (change == 2) {
        newMoney = random(50);
        money = money + newMoney;
        moneyDown(Math.ceil(newMoney / 4));
        localStorage.setItem("money", money);
    } else if (change == 3) {
        playSound("src/sound/fails.mp3");
        if (tension >= 500) {
            tension = tension - random(50);
            localStorage.setItem("tension", tension);
        }
    } else if (change == 4) {
        document.getElementById("persimmon").style.bottom = "-10%";
        document.getElementById("persimmon").style.right = "-20%";
        document.getElementById("persimmon").style.width = "150vw";
        document.getElementById("persimmon").style.height = "130vh";
        setTimeout(() => {
            document.getElementById("persimmon").style.bottom = "1%";
            document.getElementById("persimmon").style.right = "1%";
            document.getElementById("persimmon").style.width = "5vw";
            document.getElementById("persimmon").style.height = "3vw";
        }, 1000);
    } else if (change == 5) {
        playSound("src/sound/cry.mp3");
        document.getElementById("persimmon").style.display = "none";
        setTimeout(() => {
            document.getElementById("persimmon").style.display = "block";
        }, 3000);
    } else if (change == 6) {
        document.getElementById("heading").innerHTML = "PersimmonShot Roulette";
        document.getElementById("heading").style.color = "#FF8C00";
        setTimeout(() => {
            document.getElementById("heading").innerHTML = "TrollShot Roulette";
            document.getElementById("heading").style.color = "#ff0000";
        }, 3000);
    } else if (change == 7) {
        let change1 = random(100);
        if (change1 == 1) {
            localStorage.setItem("persimmon", 20);
            location.reload();
        }
    } else if (change == 8) {
        interference = 5000;
        ctx.fillStyle = "orange";
        setTimeout(() => {
            interference = 100;
            ctx.fillStyle = "gray";
        }, 3000);
    } else if (change == 9) {
        document.body.style.setProperty(
            "background-image",
            "url('src/img/error.jpg')",
            "important"
        );
        document.getElementById("intv").src = "src/img/error.jpg";
        setTimeout(() => {
            document.body.style.setProperty(
                "background-image",
                "url('src/img/basement.webp')",
                "important"
            );
        }, 5000);
    } else if (change == 10) {
        playSound("src/sound/fails.mp3");
        if (money >= 50) {
            money = money - random(10);
            localStorage.setItem("money", money);
        }
    } else if (change == 11) {
        let newExperience = random(100);
        tension = tension + newExperience;
        experDown(Math.ceil(newExperience / 10));
        localStorage.setItem("tension", tension);
    } else if (change == 12) {
        let change2 = random(2);
        if (change2 == 1) {
            experDown(100);
        } else if (change2 == 2) {
            moneyDown(100);
        }
    }
});
document.getElementById("tv").addEventListener("click", (e) => {
    playSound("src/sound/glitch.mp3");
    if (nowNet == 2) {
        nowNet = 0;
    } else {
        nowNet++;
    }
    if (nowNet == 0) {
        document.getElementById("intv").src = "src/img/youtube.png";
        document.getElementById("intva").href =
            "https://www.youtube.com/channel/UCSKYIhSoxFAZ-iL9IxYHUlA";
    } else if (nowNet == 1) {
        document.getElementById("intv").src = "src/img/github.png";
        document.getElementById("intva").href = "https://github.com/Pro7777tim";
    } else if (nowNet == 2) {
        document.getElementById("intv").src = "src/img/discord.png";
        document.getElementById("intva").href =
            "https://discord.com/invite/RUPXRGpbKc";
    }
});

animate();

setInterval(function () {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < interference; i++) {
        ctx.fillRect(
            random(window.innerWidth / 2),
            random(window.innerHeight / 2),
            10,
            0.5
        );
    }
}, 100);

playSound("src/sound/calm.mp3");
setInterval(() => {
    playSound("src/sound/calm.mp3");
}, 23000);
