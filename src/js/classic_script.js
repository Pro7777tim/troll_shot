const follower = document.getElementById("cursor");
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;
});

function animate() {
    follower.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(animate);
}

animate();
