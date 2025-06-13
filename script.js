document.addEventListener('DOMContentLoaded', function() {
    const gif = document.getElementById('clickableGif');
    
    function createPopup(x, y) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = '🔥';
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
    
    if (gif) {
        console.log('GIF element found, adding click listener'); // Debug log
        
        gif.addEventListener('click', function(event) {
            console.log('GIF clicked!'); // Debug log
            
            // Prevent default behavior
            event.preventDefault();
            
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
        console.log('GIF element not found!'); // Debug log
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const targetText = "[Pratik Merekar]";
    const textElement = document.getElementById("shuffle-text");
    const shuffleDuration = 1500; // Total shuffling time
    const clickShuffleDuration = 1000;
    const shuffleInterval = 50; // Interval between each shuffle

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
    }
});

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}