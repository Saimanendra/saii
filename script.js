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

        // Add random color
        firework.style.backgroundColor = getRandomColor();

        fireworksContainer.appendChild(firework);

        firework.addEventListener('animationend', () => {
            firework.remove();
            createFirework(); // Create a new firework after the animation ends
        });
    }
document.addEventListener('DOMContentLoaded', function() {
    // ... (fireworks code) ...

    // Gift Box and Music
    const giftBox = document.getElementById('gift');
    const popup = document.getElementById('popup');
    const audio = document.getElementById('birthdayMusic');

    giftBox.addEventListener('click', function() {
        popup.style.display = 'flex';
        audio.play();
    });

    popup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Gift Box and Music
    const giftBox = document.getElementById('gift');
    const popup = document.getElementById('popup');
    const audio = document.getElementById('birthdayMusic');

    giftBox.addEventListener('click', function() {
        popup.style.display = 'flex';
        audio.play();
    });

    popup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
