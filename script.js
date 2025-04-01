document.addEventListener('DOMContentLoaded', function() {
    // Fireworks
    const fireworksContainer = document.querySelector('.fireworks');
    const numberOfFireworks = 10;

    for (let i = 0; i < numberOfFireworks; i++) {
        createFirework();
    }

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 50 + 'vh';
        firework.style.animationDelay = Math.random() * 5 + 's';
        fireworksContainer.appendChild(firework);

        firework.addEventListener('animationend', () => {
            firework.remove();
            createFirework(); // Create a new firework after the animation ends
        });
    }

    // Gift Box
    const giftBox = document.getElementById('gift');
    const popup = document.getElementById('popup');

    giftBox.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    popup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
