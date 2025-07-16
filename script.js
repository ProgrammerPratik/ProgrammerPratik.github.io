let fireScore = localStorage.getItem('fireScore') ? parseInt(localStorage.getItem('fireScore')) : 0;

document.addEventListener('DOMContentLoaded', function() {
    const gif = document.getElementById('clickableGif');
    
    function createPopup(x, y) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        if(fireScore>=10){
            popup.textContent = '❤️';
        } else{
            popup.textContent = '🔥';
        }
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        
        document.body.appendChild(popup);
        
        // Remove the popup after animation completes
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 1000);
    }
    if (fireScore >= 10) {
        document.getElementById('clickableGif').src = 'assets/nyan.gif'; // Replace with your new image URL
    } else{
        document.getElementById('clickableGif').src = 'assets/bonfire.gif'; // Replace with your new image URL
    }
    if (gif) {
        gif.addEventListener('click', function(event) {
            fireScore++;
            localStorage.setItem('fireScore', fireScore);
            event.preventDefault();
            if(fireScore>=20) fireScore = 0;
            if (fireScore >= 10) {
                document.getElementById('clickableGif').src = 'assets/nyan.gif'; // Replace with your new image URL
            } else{
                document.getElementById('clickableGif').src = 'assets/bonfire.gif'; // Replace with your new image URL
            }
            // Get click position
            const x = event.clientX;
            const y = event.clientY;
            
            // Create popup at click position
            createPopup(x, y);
            
            // Optional: Add a small bounce effect to the GIF
            gif.style.transform = 'scale(0.95)';
            setTimeout(() => {
                gif.style.transform = 'scale(1)';
            }, 100);
        });
    } else {
        console.log('GIF element not found!');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const targetText = "[Pratik Merekar]";
    const textElement = document.getElementById("shuffle-text");
    const shuffleDuration = 1500;
    const clickShuffleDuration = 1000;
    const shuffleInterval = 50;

    if (!sessionStorage.getItem('shuffleShown')) {
        sessionStorage.setItem('shuffleShown', 'true');

        function shuffleText(target, element, duration, interval) {
            const originalText = target.split('');
            let shuffledText = originalText.map(() => String.fromCharCode(65 + Math.random() * 26 | 0));
            let startTime = Date.now();

            function updateText() {
                const elapsedTime = Date.now() - startTime;

                if (elapsedTime >= duration) {
                    clearInterval(shuffling);
                    element.textContent = target;
                    return;
                }

                shuffledText = originalText.map((char, index) => {
                    if (Math.random() < elapsedTime / duration) {
                        return char;
                    }
                    return String.fromCharCode(65 + Math.random() * 26 | 0);
                });

                element.textContent = shuffledText.join('');
            }

            const shuffling = setInterval(updateText, interval);
        }

        shuffleText(targetText, textElement, shuffleDuration, shuffleInterval);

    } else {
        textElement.textContent = targetText;
    }

    textElement.addEventListener("click", function () {
        shuffleText(targetText, textElement, clickShuffleDuration, shuffleInterval);
    });

    function shuffleText(target, element, duration, interval) {
        const originalText = target.split('');
        let shuffledText = originalText.map(() => String.fromCharCode(65 + Math.random() * 26 | 0));
        let startTime = Date.now();

        function updateText() {
            const elapsedTime = Date.now() - startTime;

            if (elapsedTime >= duration) {
                clearInterval(shuffling);
                element.textContent = target;
                return;
            }

            shuffledText = originalText.map((char, index) => {
                if (Math.random() < elapsedTime / duration) {
                    return char;
                }
                return String.fromCharCode(65 + Math.random() * 26 | 0);
            });

            element.textContent = shuffledText.join('');
        }

        const shuffling = setInterval(updateText, interval);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('mail').src = 'assets/mail2.png';
    }
});

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        document.getElementById('mail').src = 'assets/mail1.png';
    } else {
        body.setAttribute('data-theme', 'dark');
        document.getElementById('mail').src = 'assets/mail2.png';
        localStorage.setItem('theme', 'dark');
    }
}