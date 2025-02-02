// Функция запуска таймера для упражнений
function startTimer(duration, elementId, imgId) {
    let display = document.getElementById(elementId);
    let image = document.getElementById(imgId);
    let timer = duration;

    clearInterval(display.dataset.intervalId); // Остановка предыдущего таймера
    let interval = setInterval(function () {
        let seconds = timer % 60;
        display.textContent = seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "Готово!";
            image.classList.add('hidden'); // Hide the image when the timer ends
        }
    }, 1000);

    display.dataset.intervalId = interval;
    image.classList.remove('hidden'); // Show the image when the timer starts
}
