const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const selectedMax = document.querySelector('#max-select');
let maxScore = 5;

const resetButton = document.querySelector('#resetButton');

let isGameOver = false;

selectedMax.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    resetClick();
});

p1Button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2Button.addEventListener('click', function () {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', resetClick);

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.innerText = player.score;

        if (player.score >= maxScore && opponent.score < player.score - 1) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

function resetClick() {
    isGameOver = false;
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}