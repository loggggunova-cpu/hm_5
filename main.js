document.addEventListener("DOMContentLoaded", function () {

    
    let count = 0;
    let pcount = document.querySelector(".pcount");
    let clickBtn = document.querySelector(".click-btn");
    let resetBtn = document.querySelector(".reset-counter");

    clickBtn.addEventListener("click", function () {
        count++;
        pcount.textContent = count;
        
        if (count >= 15) {
            clickBtn.disabled = true;
            pcount.textContent = "15 (твой максимум)";
            console.log("Достигнут лимит");
        }
    });

    resetBtn.addEventListener("click", function () {
        count = 0;
        pcount.textContent = "0";
        clickBtn.disabled = false;
    });

    
    let timer = document.querySelector(".timer");
    let restartBtn = document.querySelector(".timer_restart");
    let timeLeft = 15;
    let timerInterval;

    function startTimer() {
        timeLeft = 15;
        timer.textContent = timeLeft;
        
        if (timerInterval) clearInterval(timerInterval);
        
        timerInterval = setInterval(function () {
            timeLeft--;
            timer.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timer.textContent = "Все, твое время вышло;)";
            }
        }, 1000);
    }

    startTimer(); 

    restartBtn.addEventListener("click", function () {
        startTimer();
    });

});