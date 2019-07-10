let scoreClicks = 0;
let bonusClicks = 1;
let timerBonus = 0;
let priceForOneClick = 10;
let priceForTenClick = 100;
let priceForOneClickSec = 20;
let priceForTenClickSec = 200;
let experiencePoints = 0;
let max = 100
let level = 0
function checkExperiencePoints() {
    if (experiencePoints >= max) {
        experiencePoints = 0;
        max *= 3;
        level++
        lvl.innerHTML = "Level: " + level;
        document.getElementById('experience').setAttribute('value', experiencePoints);
        document.getElementById('experience').setAttribute('max', max);
    }
}
document.getElementById('experience').setAttribute('max', max);
const timerId = setInterval(function() {
    scoreClicks += timerBonus;
    score.innerHTML = "Score: " + scoreClicks;
    experiencePoints += timerBonus;
    document.getElementById('experience').setAttribute('value', experiencePoints);
    checkExperiencePoints();
}, 1000);

document.getElementById('button').onclick = function() {
    scoreClicks += bonusClicks;
    experiencePoints += bonusClicks;
    document.getElementById('experience').setAttribute('value', experiencePoints);
    score.innerHTML = "Score: " + scoreClicks;
    checkExperiencePoints();
}
document.getElementById('plusOne').onclick = function() {
    if (scoreClicks >= priceForOneClick) {
    bonusClicks++;
    scoreClicks -= priceForOneClick;
    priceForOneClick = Math.floor(priceForOneClick *= 1.2);
    click.innerHTML = "Click power: " + bonusClicks;
    score.innerHTML = "Score: " + scoreClicks;
    pricePlusOne.innerHTML = "Price: " + priceForOneClick;
    } else return
}

document.getElementById('plusTen').onclick = function() {
    if (scoreClicks >= priceForTenClick) {
    bonusClicks += 10;
    scoreClicks -= priceForTenClick;
    priceForTenClick = Math.floor(priceForTenClick *= 1.2);
    click.innerHTML = "Click power: " + bonusClicks;    
    score.innerHTML = "Score: " + scoreClicks;
    pricePlusTen.innerHTML = "Price: " + priceForTenClick;
    } else return
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
    } else return
}

document.getElementById('plusTenPerSecond').onclick = function() {
    if (scoreClicks >= priceForTenClickSec) {
        scoreClicks -=priceForTenClickSec;
        timerBonus += 10;
        priceForTenClickSec = Math.floor(priceForTenClickSec * 1.5);
        score.innerHTML = "Score: " + scoreClicks;
        clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
        pricePlusTenPerSecond.innerHTML = "Price: " + priceForTenClickSec;
    } else return
}

document.getElementById('testPerSecond').onclick = function() {
    timerBonus += 1000;
    score.innerHTML = "Score: " + scoreClicks;
    clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
}

