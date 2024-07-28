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
