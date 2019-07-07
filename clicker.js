let scoreClicks = 0;
let bonusClicks = 1;
let timerBonus = 0;
let p = document.createElement('p');
let priceForOneClick = 10;
let priceForTenClick = 100;
let priceForOneClickSec = 20;
let priceForTenClickSec = 200;
let timerId = setInterval(function() {
    scoreClicks += timerBonus;
    score.innerHTML = "Score: " + scoreClicks;
}, 1000);

document.getElementById('button').onclick = function() {
    scoreClicks += bonusClicks;
    score.innerHTML = "Score: " + scoreClicks;
    
}
document.getElementById('plusOne').onclick = function() {
    if (scoreClicks >= priceForOneClick) {
    bonusClicks++;
    scoreClicks -= priceForOneClick;
    priceForOneClick = Math.floor(priceForOneClick *= 1.2);
    click.innerHTML = "Click power: " + bonusClicks;
    score.innerHTML = "Score: " + scoreClicks;
    pricePlusOne.innerHTML = "Price: " + priceForOneClick;
    }
}

document.getElementById('plusTen').onclick = function() {
    if (scoreClicks >= priceForTenClick) {
    bonusClicks += 10;
    scoreClicks -= priceForTenClick;
    priceForTenClick = Math.floor(priceForTenClick *= 1.2);
    click.innerHTML = "Click power: " + bonusClicks;    
    score.innerHTML = "Score: " + scoreClicks;
    pricePlusTen.innerHTML = "Price: " + priceForTenClick;
    }
}

document.getElementById('test').onclick = function() {
    scoreClicks += 1000000000 ;
    score.innerHTML = "Score: " + scoreClicks;
}

document.getElementById('plusOnePerSecond').onclick = function() {
    if (scoreClicks >= priceForOneClickSec) {
    scoreClicks -=priceForOneClickSec;
    timerBonus += 1;
    priceForOneClickSec = Math.floor(priceForOneClickSec * 1.5);
    score.innerHTML = "Score: " + scoreClicks;
    clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
    pricePlusOnePerSecond.innerHTML = "Price: " + priceForOneClickSec;
    }
}

document.getElementById('plusTenPerSecond').onclick = function() {
    if (scoreClicks >= priceForTenClickSec) {
        scoreClicks -=priceForTenClickSec;
        timerBonus += 10;
        priceForTenClickSec = Math.floor(priceForTenClickSec * 1.5);
        score.innerHTML = "Score: " + scoreClicks;
        clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
        pricePlusTenPerSecond.innerHTML = "Price: " + priceForTenClickSec;
    }
}

document.getElementById('testPerSecond').onclick = function() {
    timerBonus += 1000;
    score.innerHTML = "Score: " + scoreClicks;
    clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
}
