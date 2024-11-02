const gameArea = document.getElementById("game-area");
const predator = document.getElementById("predator");
const prey = document.getElementById("prey");

// Função para posicionar o predador e a presa aleatoriamente
function randomPosition(element) {
    element.style.top = Math.floor(Math.random() * 380) + "px";
    element.style.left = Math.floor(Math.random() * 380) + "px";
}

// Posiciona a presa no início
randomPosition(prey);

// Movimentos do predador
window.addEventListener("keydown", (e) => {
    const step = 10;
    const rect = predator.getBoundingClientRect();
    const gameRect = gameArea.getBoundingClientRect();

    switch (e.key) {
        case "ArrowUp":
            if (rect.top > gameRect.top) predator.style.top = rect.top - gameRect.top - step + "px";
            break;
        case "ArrowDown":
            if (rect.bottom < gameRect.bottom) predator.style.top = rect.top - gameRect.top + step + "px";
            break;
        case "ArrowLeft":
            if (rect.left > gameRect.left) predator.style.left = rect.left - gameRect.left - step + "px";
            break;
        case "ArrowRight":
            if (rect.right < gameRect.right) predator.style.left = rect.left - gameRect.left + step + "px";
            break;
    }

    // Verifica colisão
    if (isCollide(predator, prey)) {
        alert("Você capturou a presa!");
        randomPosition(prey); // Reposiciona a presa
    }
});

// Função para detectar colisão
function isCollide(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
        aRect.top > bRect.bottom ||
        aRect.bottom < bRect.top ||
        aRect.left > bRect.right ||
        aRect.right < bRect.left
    );
}
