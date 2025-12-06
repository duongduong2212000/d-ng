let rewards = [
    "2500 Naira (5%)",
    "1000 Naira (10%)",
    "800 Naira",
    "Next time (10%)",
    "500 Naira",
    "700 Naira"
];

// XÁO TRỘN
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// RENDER BAO LÌ XÌ
function renderEnvelopes() {
    let area = document.getElementById("envelope-area");
    area.innerHTML = "";

    shuffle(rewards).forEach(value => {
        let img = document.createElement("img");
        img.src = "assets/envelope.png"; // ảnh bao lì xì của bạn
        img.className = "envelope";
        img.dataset.value = value;
        img.onclick = openEnvelope;
        area.appendChild(img);
    });
}

// MỞ LÌ XÌ
function openEnvelope(e) {
    document.getElementById("lan-left").style.display = "none";
    document.getElementById("lan-right").style.display = "none";

    let reward = e.target.dataset.value;
    document.getElementById("reward-text").innerText = "You got: " + reward;
    document.getElementById("result-box").classList.remove("hidden");

    // HOA MAI
    for (let i = 0; i < 30; i++) createPetal();
}

// HOA MAI RƠI
function createPetal() {
    let petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * window.innerWidth + "px";
    document.getElementById("petals").appendChild(petal);
    setTimeout(() => petal.remove(), 4000);
}

// NHẠC
let music = document.getElementById("bg-music");
let btn = document.getElementById("toggle-music");

btn.onclick = function () {
    if (music.paused) {
        music.play();
        btn.innerText = "Pause Music";
    } else {
        music.pause();
        btn.innerText = "Play Music";
    }
};

// RESET GAME
document.getElementById("play-again").onclick = function () {
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("lan-left").style.display = "block";
    document.getElementById("lan-right").style.display = "block";
    document.getElementById("petals").innerHTML = "";
    renderEnvelopes();
};

// CHẠY LẦN ĐẦU
renderEnvelopes();
