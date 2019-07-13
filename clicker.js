let scoreClicks = 0;
let bonusClicks = 1;
let timerBonus = 0;
let priceForOneClick = 10;
let priceForTenClick = 100;
let priceForOneClickSec = 20;
let priceForTenClickSec = 200;
let experiencePoints = 0;
let max = 100;
let level = 0;
let percent = 0;

window.onload = function() {
  if (localStorage.getItem('scoreClicks') !== null) {
    scoreClicks = +localStorage.getItem('scoreClicks');
    bonusClicks = +localStorage.getItem('bonusClicks');
    timerBonus = +localStorage.getItem('timerBonus');
    priceForOneClick = +localStorage.getItem('priceForOneClick');
    priceForTenClick = +localStorage.getItem('priceForTenClick');
    priceForOneClickSec = +localStorage.getItem('priceForOneClickSec');
    priceForTenClickSec = +localStorage.getItem('priceForTenClickSec');
    experiencePoints = +localStorage.getItem('experiencePoints');
    max = +localStorage.getItem('max');
    level = +localStorage.getItem('level');
    percent = +localStorage.getItem('percent');

    lvl.innerHTML = "Level: " + level;
    barValue.style.width = percent + "%";
    score.innerHTML = "Score: " + scoreClicks;
    click.innerHTML = "Click power: " + bonusClicks;
    pricePlusOne.innerHTML = "Price: " + priceForOneClick;
    pricePlusTen.innerHTML = "Price: " + priceForTenClick;
    clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
    pricePlusOnePerSecond.innerHTML = "Price: " + priceForOneClickSec;
    pricePlusTen.innerHTML = "Price: " + priceForTenClick;
  }
}

function setLocalStorage() {
  localStorage.setItem('scoreClicks', scoreClicks);
  localStorage.setItem('bonusClicks', bonusClicks);
  localStorage.setItem('timerBonus', timerBonus);
  localStorage.setItem('priceForOneClick', priceForOneClick);
  localStorage.setItem('priceForTenClick', priceForTenClick);
  localStorage.setItem('priceForOneClickSec', priceForOneClickSec);
  localStorage.setItem('priceForTenClickSec', priceForTenClickSec);
  localStorage.setItem('experiencePoints', experiencePoints);
  localStorage.setItem('max', max);
  localStorage.setItem('level', level);
  localStorage.setItem('percent', percent);
}

function checkExperiencePoints() {
  if (experiencePoints >= max) {
    experiencePoints = 0;
    max *= 3;
    level++;
    percent = 0;
    lvl.innerHTML = "Level: " + level;
    barValue.style.width = percent + "%";
  }
}

const timerId = setInterval(function () {
  scoreClicks += timerBonus;
  score.innerHTML = "Score: " + scoreClicks;
  experiencePoints += timerBonus;
  percent = experiencePoints / (max / 100);
  barValue.style.width = percent + "%"
  checkExperiencePoints();
  setLocalStorage()
}, 1000);

document.getElementById("button").addEventListener("click", function () {
  scoreClicks += bonusClicks;
  score.innerHTML = "Score: " + scoreClicks;
  experiencePoints += bonusClicks;
  percent = experiencePoints / (max / 100);
  barValue.style.width = percent + "%"
  checkExperiencePoints();
  setLocalStorage();
});
document.getElementById("plusOne").addEventListener("click", function () {
  if (scoreClicks >= priceForOneClick) {
    bonusClicks++;
    scoreClicks -= priceForOneClick;
    priceForOneClick = Math.floor((priceForOneClick *= 1.2));
    click.innerHTML = "Click power: " + bonusClicks;
    score.innerHTML = "Score: " + scoreClicks;
    pricePlusOne.innerHTML = "Price: " + priceForOneClick;
  } else return;
});

document.getElementById("plusTen").addEventListener("click", function () {
  if (scoreClicks >= priceForTenClick) {
    bonusClicks += 10;
    scoreClicks -= priceForTenClick;
    priceForTenClick = Math.floor((priceForTenClick *= 1.2));
    click.innerHTML = "Click power: " + bonusClicks;
    score.innerHTML = "Score: " + scoreClicks;
    pricePlusTen.innerHTML = "Price: " + priceForTenClick;
  } else return;
});

// document.getElementById('test').addEventListener("click", function() {
//     scoreClicks += 1000000000 ;
//     score.innerHTML = "Score: " + scoreClicks;
// });

document.getElementById("plusOnePerSecond").addEventListener("click", function () {
  if (scoreClicks >= priceForOneClickSec) {
    scoreClicks -= priceForOneClickSec;
    timerBonus += 1;
    priceForOneClickSec = Math.floor(priceForOneClickSec * 1.5);
    score.innerHTML = "Score: " + scoreClicks;
    clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
    pricePlusOnePerSecond.innerHTML = "Price: " + priceForOneClickSec;
  } else return;
});

document.getElementById("plusTenPerSecond").addEventListener("click", function () {
  if (scoreClicks >= priceForTenClickSec) {
    scoreClicks -= priceForTenClickSec;
    timerBonus += 10;
    priceForTenClickSec = Math.floor(priceForTenClickSec * 1.5);
    score.innerHTML = "Score: " + scoreClicks;
    clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
    pricePlusTenPerSecond.innerHTML = "Price: " + priceForTenClickSec;
  } else return;
});

// document.getElementById('testPerSecond').addEventListener("click", function() {
//     timerBonus += 1000;
//     score.innerHTML = "Score: " + scoreClicks;
//     clicksPerSecond.innerHTML = "Clicks per second: " + timerBonus;
// });