const backgrounds = [];
for (let i = 1; i <= 10; i++) {
    backgrounds.push(`backgrounds/bg${i}.jpg`);
}

let current = 0;
const overlay = document.getElementById("bg-overlay");

function switchBackground() {
    overlay.style.backgroundImage = `url('${backgrounds[current]}')`;
    current = (current + 1) % backgrounds.length;
}

// Start initial background and interval
switchBackground();
setInterval(switchBackground, 5000);
