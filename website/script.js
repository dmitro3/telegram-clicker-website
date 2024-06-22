body.height = window.innerHeight
var viewportWidth = window.innerWidth;
// width: 430
// height: 733
var viewportHeight = window.innerHeight;
let tg = window.Telegram.WebApp;
tg.expand();

const gameFieldElements = [
  'userLogoPhoto', 'userLogoBackgroundDiv', 'exchangeBox', 'exchangeBoxLabel', 'exchangeImage',
  'earnPerClickBox', 'clicksTillLevelUp', 'earnPerClickCoin', 'earnPerClickLabel', 'clicksTillLevelUpLabel',
  'insideEarnPerClickLabel', 'insideCoinsTillLevelUpLabel', 'passiveClicks', 'insidePassiveCLicksLabel', 'passiveClicksCoin', 'passiveClicksLabel',
  'coinMainLogo', 'coinsLabel', 'progressBarBoxStatusLabel', 'progressBarBoxLevelLabel', 'progressBarBoxBox', 'progressBarBox', 'progressBar',
  'mainButtonCover', 'energyImage', 'energyLabel', 'usernameLabel'
]

const mineFieldElements = [
  'earnPerClickBox', 'clicksTillLevelUp', 'earnPerClickCoin', 'earnPerClickLabel', 'clicksTillLevelUpLabel',
  'insideEarnPerClickLabel', 'insideCoinsTillLevelUpLabel', 'passiveClicks', 'insidePassiveCLicksLabel', 'passiveClicksCoin', 'passiveClicksLabel',
  'coinMainLogo', 'coinsLabel', 'funTokensBox', 'stakingBox', 'btcPairsBox', 'ethPairsBox', 'top10CMCBox', 'gameFiBox', 'defiBox', 'socialFiBox', 
  'memeCoinsBox', 'shitCoinsBox', 'mineMenuMenu'
]

window.onload = ()=> {
  adjustMarginCoinBox()
  registerUser();
  showReferrals();
  identifyReferral();
  adjustDailyRewards();
  adjustMineCards();
  adjustProgressBar();
  const coins = +getLeftCoins();
  let tg = window.Telegram.WebApp;

  document.getElementById('usernameLabel').innerHTML = tg.initDataUnsafe.user.username;
  if (coins > 0 && coins < 10){
    adjustClickedReferral(getTelegramId());
  }
  tg.expand();
  postData('/getGameData', {
      telegramId: getTelegramId(),
    })
    .then(data => {
      newData = Array.from(data.data);
      const record = newData[newData.length-1];
      const coins = record.coins;
      adjustCoinsVisual(coins);
      adjustProgressBar()
      document.getElementById('energyLabel').innerHTML = calculateEnergy(record.energy, record.time)
    });
}

function identifyReferral(){
  const currentUrl = `${window.location.href}`;
  const regex = /start=([^#]*)#/;
  const match = currentUrl.match(regex);
  const code = match[1];
  if (code != 'undefined') {
    const telegramSourceId = getTelegramId();
    postData('/getReferrals', {
      telegramSourceId: +code,
    })
    .then(data => { 
      let referrals = Array.from(data.data);
      let checker = false;
      if (referrals.length != 0) {
        for (let i = 0; i < referrals.length; i++) {
          if (`${+referrals[i].telegramReferralId}` == `${+getTelegramId()}`){
            checker = true;
          }    }
      }
      if (checker == false) {
        addReferal(code);
      }
    });
  }
}

function showFriendsMenu() {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  friendsField.style.display = 'block'
  friendsButton.style.backgroundColor = '#1C1F24';
  document.documentElement.style.overflow = 'hidden';
  gameField.style.display = 'none';
  body.style.background = '#000000';
}

function hideFriendsMenu() {
  friendsField.style.display = 'none';
  body.style.background = '#282B30';
  document.getElementById('referalField').style.display = 'none';
  friendsButton.style.backgroundColor = '#282B30';
}

function showGameMenu() {
  
  for (let i = 0; i < gameFieldElements.length; i++) {
    document.getElementById(gameFieldElements[i]).style.display = 'block';
  }
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  gameField.style.display = 'block';
  body.style.height = '100vh'
  earnPerClickBox.style.marginTop = '114px';
  clicksTillLevelUp.style.marginTop = '114px';
  passiveClicks.style.marginTop = '114px';
  coinMainLogo.style.marginTop = '206px';
  coinsLabel.style.marginTop = '213px';
  document.documentElement.style.overflow = 'hidden';
  gameButton.style.backgroundColor = '#1C1F24';
  gameField.style.height = '797px';
  earnPerClickBox.style.marginTop = '114px';
  clicksTillLevelUp.style.marginTop = '114px';
  passiveClicks.style.marginTop = '114px';
  coinMainLogo.style.marginTop = '206px';
  coinsLabel.style.marginTop = '213px';
  document.documentElement.style.overflow = 'hidden';
  gameButton.style.backgroundColor = '#1C1F24';
  gameField.style.marginTop = '95px';
  earnPerClickCoin.style.marginTop = '145px';
  earnPerClickLabel.style.marginTop = '146px';
  passiveClicksCoin.style.marginTop = '145px';
  passiveClicksLabel.style.marginTop = '146px';
  menu.style.boxShadow = '0px 0px 0px 0px #000000'
}

function hideGameMenu() {
  for (let i = 0; i < gameFieldElements.length; i++) {
    document.getElementById(gameFieldElements[i]).style.display = 'none';
  }
  gameButton.style.backgroundColor = '#282B30';

}


document.getElementById('gameButton').addEventListener('click', ()=>{
  adjustProgressBar()
  hideEarnMenu();
  hideMineField();
  hideFriendsMenu();
  hideDeveloperField();
  showGameMenu();
});

document.getElementById('earnButton').addEventListener('click', ()=>{
  hideGameMenu();
  hideMineField();
  hideFriendsMenu();
  hideDeveloperField();
  showEarnMenu();
});

developerButton.addEventListener('click', ()=>{
  hideEarnMenu();
  hideMineField();
  hideFriendsMenu();
  hideGameMenu();
  showDeveloperField();
});

document.getElementById('mineButton').addEventListener('click', ()=>{
  hideGameMenu();
  hideEarnMenu();
  hideFriendsMenu();
  hideDeveloperField();
  showMineField();
});

document.getElementById('friendsButton').addEventListener('click', ()=>{
  hideGameMenu();  
  hideEarnMenu();
  hideMineField();
  hideDeveloperField();
  showFriendsMenu();
});


function showEarnMenu() {
  body.style.backgroundColor = '#000000'
  body.height = '100vh'
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  gameField.style.display = 'none'
  earnField.style.display = 'block'
 
  document.documentElement.style.overflow = 'hidden';
  earnButton.style.backgroundColor = '#1C1F24';
}

function hideEarnMenu() {
  body.style.background = '#282B30';
  earnField.style.display = 'none';
  earnButton.style.backgroundColor = '#282B30';
}

document.getElementById('mainButtonCover').addEventListener('touchstart', ()=>{
  adjustProgressBar()
    if (window.Telegram.WebApp.platform == 'ios'){
        for (let i = 0; i < event.touches.length; i++) {
        showClick(event.touches[i]);
    }
    let energy = getLeftEnergy();
    if (energy != 0){
        let coins = getLeftCoins();
        energy -= event.touches.length;
        coins += event.touches.length;
        document.getElementById('energyLabel').innerHTML = energy + '/1000'
        adjustCoinsVisual(coins)
        }
    }
  });

document.getElementById('mainButtonCover').addEventListener('click', ()=>{
  adjustProgressBar()
    if (window.Telegram.WebApp.platform == 'tdesktop'){
    showClick(event);
    let energy = getLeftEnergy();
    if (energy != 0){
        let coins = getLeftCoins();
        energy -= 1;
        coins += 1;
        document.getElementById('energyLabel').innerHTML = energy + '/1000'
        document.getElementById('coinsLabel').innerHTML = coins
    }
    }
});

  setInterval(()=>{
    let leftEnergy = getLeftEnergy();
    if (leftEnergy != 1000) {
        document.getElementById('energyLabel').innerHTML = (leftEnergy + 1) + '/1000';
    }
  }, 1000)

  function getCurrentTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
    });
    const time = now.toLocaleTimeString('en-US', { 
        hour12: false 
    });

    return `${date} ${time}`;
}
function getLeftEnergy() {
    let energy = document.getElementById('energyLabel').textContent;
    const parts = energy.split('/');
    let leftEnergy = +parseInt(parts[0]);
    return +leftEnergy;
}

function getLeftCoins() {
    return +(document.getElementById('coinsLabel').textContent.replace(/,/g, ''));
}

function getTelegramId() {
    let tg = window.Telegram.WebApp;
    return tg.initDataUnsafe.user.id;
}

function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  setInterval(() => {
    postData('/updateGameData', {
        telegramId: getTelegramId(),
        energy: getLeftEnergy(),
        coins: getLeftCoins(),
        time: getCurrentTime()
      })
      .then(data => {
        // Do something with the response data if needed
      });
  }, 2000);

  function calculateEnergy(lastEnergy, time){
    let givenDateString = time;

    let givenDate = new Date(givenDateString);

    let currentDate = new Date();

    let differenceInMilliseconds = currentDate - givenDate;

    let differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    if (lastEnergy + differenceInSeconds >= 1000) {
      return '1000/1000';
    } else {
      return `${lastEnergy + differenceInSeconds}`+'/1000'
    }
  }
function showClick(event) {
  const button = document.getElementById('mainButtonBox');
  triggerHapticFeedback()
  const rect = button.getBoundingClientRect();
  const xx = event.clientX - rect.left - rect.width / 2;
  const yy = event.clientY - rect.top - rect.height / 2;
  const rotateX = (yy / rect.height) * 60;
  const rotateY = (xx / rect.width) * -60;
  setTimeout(()=>{button.style.transform = `rotateX(0deg) rotateY(0deg)`},100);
  button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    const x = event.clientX;
    const y = event.clientY;

    const plusOne = document.createElement('h1');
    plusOne.textContent = "+1";

    plusOne.style.position = "absolute";
    plusOne.style.left = (x-20) + "px";
    plusOne.style.top = (y-20) + "px";
    plusOne.style.color = 'green'
    plusOne.style.zIndex = '5';
    plusOne.style.fontSize = '36px'
    plusOne.style.animation = "upAndFadeOut 1s forwards"; 
    gameField.style.animation = 'none'
    gameField.offsetHeight;
    gameField.style.animation = 'highlight';
    gameField.style.animationDuration = '1s';
    document.body.appendChild(plusOne);

        setTimeout(() => {
        document.body.removeChild(plusOne);
    }, 1000);
}
    
document.getElementById('inviteFriendBox').addEventListener('click', ()=>{
  const shareUrl = `https://t.me/share/url?url=https%3A%2F%2Ft.me/telegclick_bot?start=${getTelegramId()}&text=Join%20this%20game!`;

    Telegram.WebApp.openTelegramLink(shareUrl);
});

function addReferal(sourceTelegramId){
  const referralTelegramId = getTelegramId();
  postData('/addReferral', {
    sourceTelegramId: sourceTelegramId,
    referralTelegramId: referralTelegramId
  })
  .then(data => {
    console.log('Referral successfully added.')
  });
}

function showReferrals(){
  const telegramSourceId = getTelegramId();
  postData('/getReferrals', {
    telegramSourceId: telegramSourceId,
  })
  .then(data => { 
    newData = Array.from(data.data);
    if (newData.lenght != 0){
      document.getElementById('youhaventinv').remove();
      for (let i = 0; i < newData.length; i++) {
        createSubFriend(newData[i].telegramReferralId, newData.length, newData[i].clicked, newData[i].verified)
      }
    }
  });
  function createSubFriend(id, length, clicked, verified){
      postData('/getUserInformation', {
        telegramId: id
      })
      .then(data => {
        newData = Array.from(data.data);
        let premium = newData[0].isPremium;
        const div = document.createElement('div');
        div.className = 'subFriendsBox';
        const username = document.createElement('h4');
        username.className = 'subFriendsBoxUsername';
        username.innerHTML = newData[0].username; 
        const state = document.createElement('h4');
        state.className = 'subFriendsBoxStatus';
        if (+clicked == 0){
          state.innerHTML = '--did not open--'
        } else {
          state.innerHTML = '--- opened ---'
        }
        if (+verified == 0){
          verifyReferral(id);
          if (premium == 'false'){
            state.innerHTML = '-- +5000 --';
            const coins = +getLeftCoins();
            adjustCoinsVisual(coins+5000)
          } else {
            state.innerHTML = '-- +25000 --';
            const coins = +getLeftCoins();
            adjustCoinsVisual(coins+25000)          }
          state.style.color = 'green'
        }else {
          state.innerHTML = 'bonus alr added'
        }
        
        div.appendChild(username);
        div.appendChild(state)
        document.getElementById('friendsBox').appendChild(div)
      });
  }
}

function registerUser() {
  const tg = window.Telegram.WebApp;

  if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      const user = tg.initDataUnsafe.user;

      const telegramId = getTelegramId(); 
      const telegramUsername = user.username || 'No username';
      const photo = user.photo_url || 'No photo available';
      const isPremium = user.is_premium || false;

      postData('/addUserInformation', {
        telegramId: telegramId,
        telegramUsername: telegramUsername,
        photo: photo,
        isPremium: isPremium
      })
      .then(data => { 
        console.log(data.information)
      });
  } 
}

function verifyReferral(telegramId){
  postData('/verifyReferral', {
    telegramId: telegramId,
    verified: 1
  })
  .then(data => { 
    console.log()
  });
}

function adjustClickedReferral(telegramId){
  postData('/adjustClickedReferral', {
    telegramId: telegramId,
    clicked: 1
  })
  .then(data => { 
    console.log()
  });
}

function adjustProgressBar() {
  const coins = getLeftCoins();
  let nameLabel;
  let levelLabel;
  if (coins >= 0 && coins <= 5000) {
    nameLabel = 'Bronze';
    levelLabel = 1;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 5000 && coins <= 25000) {
    nameLabel = 'Silver';
    levelLabel = 2;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 25000 && coins <= 100000) {
    nameLabel = 'Gold';
    levelLabel = 3;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 100000 && coins <= 1000000) {
    nameLabel = 'Platinum';
    levelLabel = 4;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 1000000 && coins <= 2000000) {
    nameLabel = 'Diamond';
    levelLabel = 5;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 2000000 && coins <= 10000000) {
    nameLabel = 'Epic';
    levelLabel = 6;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 10000000 && coins <= 50000000) {
    nameLabel = 'Legendary';
    levelLabel = 7;
    manageProgressBar(nameLabel, levelLabel);
  } else if (coins > 50000000 && coins <= 100000000) {
    nameLabel = 'Master';
    levelLabel = 8;
    manageProgressBar(nameLabel, levelLabel);
  }else if (coins > 100000000 && coins <= 1000000000) {
    nameLabel = 'Grandmaster';
    levelLabel = 9;
    manageProgressBar(nameLabel, levelLabel);
  }else if (coins > 1000000000) {
    nameLabel = 'Lord';
    levelLabel = 10;
    manageProgressBar(nameLabel, levelLabel);
  }
}

function manageProgressBar (level, levelLabel) {

  document.getElementById('progressBarBoxStatusLabel').innerHTML = level + ' ➤';
  document.getElementById('levelLevelId').innerHTML = levelLabel;

  const levelProgress = {
    'Bronze':      5000,
    'Silver':      25000,
    'Gold':        100000, 
    'Platinum':    1000000,
    'Diamond':     2000000,
    'Epic':        10000000,
    'Legendary':   50000000,
    'Master':      100000000,
    'Grandmaster': 1000000000,
    'Lord':        10000000000
  };

  const coinsToLevelUpInfo = {
    '1': '5K',
    '2': '25K',
    '3': '100K',
    '4': '1M',
    '5': '2M',
    '6': '10M',
    '7': '50M',
    '8': '100M',
    '9': '1B',
    '10': '10B'
  }

  document.getElementById('clicksTillLevelUpLabel').innerHTML = coinsToLevelUpInfo[`${levelLabel}`]
  const coins = getLeftCoins();
  const maxValue = levelProgress[level];
  const progression = 100/maxValue;
  const barWidth = coins*progression;
  document.getElementById('progressBar').style.width = ((barWidth)/100 * 475) + 'px';
} 

//gggggggggggggggggggggggggggggggggggggggggggg

document.getElementById('refreshFriendsList').addEventListener('click', ()=>{
  adjustProgressBar();

});



function showDeveloperField() {
  airdropField.style.display = 'block'
  developerButton.style.backgroundColor = '#1C1F24'
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  body.height = '100vh';
  body.style.background = '#000000';
  gameField.style.display = 'none';
  document.documentElement.style.overflow = 'hidden';
}

function hideDeveloperField() {
  airdropField.style.display = 'none'
  developerButton.style.backgroundColor = '#282B30'
  body.style.background = '#282B30'

}

add1000.addEventListener('click', ()=>{
  const coins = getLeftCoins();
  document.getElementById('coinsLabel').innerHTML = coins + 1000;
})

add10000.addEventListener('click', ()=>{
  const coins = getLeftCoins();
  document.getElementById('coinsLabel').innerHTML = coins + 10000;
})

add100k.addEventListener('click', ()=>{
  const coins = getLeftCoins();
  document.getElementById('coinsLabel').innerHTML = coins + 100000;
})

add1M.addEventListener('click', ()=>{
  const coins = getLeftCoins();
  document.getElementById('coinsLabel').innerHTML = coins + 1000000;
})

add10M.addEventListener('click', ()=>{
  const coins = getLeftCoins();
  document.getElementById('coinsLabel').innerHTML = coins + 10000000;
})

add1B.addEventListener('click', ()=>{
  const coins = getLeftCoins();
  document.getElementById('coinsLabel').innerHTML = coins + 1000000000;
})

function adjustCoinsVisual (coins) {
  document.getElementById('coinsLabel').innerHTML = coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

document.getElementById('dailyRewardsBox').addEventListener('click', ()=>{
  dailyRewardsPopUpBox.style.display = 'block';
  adjustDailyRewards();
});

document.getElementById('closeDailyRewardsPopUpBoxBox').addEventListener('click', ()=>{
  dailyRewardsPopUpBox.style.display = 'none'
});

function adjustDailyRewards () {
  const telegramId = getTelegramId();
  postData('/getDailyRewardsState', {
    telegramId: telegramId
  })
  .then(data => { 
    const day = Array.from([data.day]);
    adjustDailyRewardsPopUpBox(day[0]);
  });
}

function adjustDailyRewardsPopUpBox(day) {
  if (day.day == 'day1') {
    day1Box.style.opacity = '100%';
    day1Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day1';
    popUpClaimButton.onclick = popUpClaimButtonOnclick;
  } else if (day.day == 'day2') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.border = '3px solid green';
    if (day.canClaim == 'true'){
      popUpClaimButton.value = 'day2';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  } else if (day.day == 'day3') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.opacity = '100%';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.border = '3px solid green';
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day3';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }else if (day.day == 'day4') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day4';
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day4';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }else if (day.day == 'day5') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day5'
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day5';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }else if (day.day == 'day6') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day6Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.backgroundColor = 'green';
    day6Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day6'
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day6';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }else if (day.day == 'day7') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day6Box.style.opacity = '100%';
    day7Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.backgroundColor = 'green';
    day6Box.style.backgroundColor = 'green';
    day7Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day7'
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day7';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }else if (day.day == 'day8') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day6Box.style.opacity = '100%';
    day7Box.style.opacity = '100%';
    day8Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.backgroundColor = 'green';
    day6Box.style.backgroundColor = 'green';
    day7Box.style.backgroundColor = 'green';
    day8Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day8'
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day8';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }else if (day.day == 'day9') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day6Box.style.opacity = '100%';
    day7Box.style.opacity = '100%';
    day8Box.style.opacity = '100%';
    day9Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.backgroundColor = 'green';
    day6Box.style.backgroundColor = 'green';
    day7Box.style.backgroundColor = 'green';
    day8Box.style.backgroundColor = 'green';
    day9Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day9'
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day9';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  }
  else if (day.day == 'day10') {
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day6Box.style.opacity = '100%';
    day7Box.style.opacity = '100%';
    day8Box.style.opacity = '100%';
    day9Box.style.opacity = '100%';
    day10Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.backgroundColor = 'green';
    day6Box.style.backgroundColor = 'green';
    day7Box.style.backgroundColor = 'green';
    day8Box.style.backgroundColor = 'green';
    day9Box.style.backgroundColor = 'green';
    day10Box.style.border = '3px solid green';
    popUpClaimButton.value = 'day10'
    if (day.canClaim != 'false'){
      popUpClaimButton.value = 'day10';
      popUpClaimButton.onclick = popUpClaimButtonOnclick;
    }
    else {
      popUpClaimButton.style.backgroundColor = 'red';
    }
  } else if(day.day == 'COMPLETED'){
    day1Box.style.opacity = '100%';
    day2Box.style.opacity = '100%';
    day3Box.style.opacity = '100%';
    day4Box.style.opacity = '100%';
    day5Box.style.opacity = '100%';
    day6Box.style.opacity = '100%';
    day7Box.style.opacity = '100%';
    day8Box.style.opacity = '100%';
    day9Box.style.opacity = '100%';
    day10Box.style.opacity = '100%';
    day1Box.style.backgroundColor = 'green';
    day2Box.style.backgroundColor = 'green';
    day3Box.style.backgroundColor = 'green';
    day4Box.style.backgroundColor = 'green';
    day5Box.style.backgroundColor = 'green';
    day6Box.style.backgroundColor = 'green';
    day7Box.style.backgroundColor = 'green';
    day8Box.style.backgroundColor = 'green';
    day9Box.style.backgroundColor = 'green';
    day10Box.style.backgroundColor = 'green';
    popUpClaimButton.textContent = 'Everything Claimed'
    popUpClaimButton.value = 'COMPLETED'
    popUpClaimButton.style.backgroundColor = 'green';
  }
}

function popUpClaimButtonOnclick () {
  const telegramId = getTelegramId();
  if (popUpClaimButton.value != 'COMPLETED'){
    postData('/updateDailyRewards', {
      telegramId: telegramId,
      day: popUpClaimButton.value,
      data: getCurrentDateFormatted()
    })
    .then(data => { 
      document.getElementById('dailyRewardsPopUpBox').style.display = 'none';
      const coins = getLeftCoins();
      const day = popUpClaimButton.value;
      const coins_data = {
        'day1': 500,
        'day2': 1000,
        'day3': 2500,
        'day4': 5000,
        'day5': 15000,
        'day6': 25000,
        'day7': 100000,
        'day8': 500000,
        'day9': 1000000,
        'day10': 5000000
      }
      const amount = coins_data[day]
      adjustCoinsVisual(coins+amount)
    });
  }
  popUpClaimButton.onclick = null;
}

function getCurrentDateFormatted() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

document.getElementById('youtubeUpdateBox').addEventListener('click', ()=>{
  window.location.href = 'https://youtu.be/geVLJ--2zgE?si=EpneavKxn31kVpjr';
});

document.getElementById('telegramJoinBox').addEventListener('click', ()=>{
  window.location.href = 'https://t.me/hamster_kombat';
});

document.getElementById('xAccountBox').addEventListener('click', ()=>{
  window.location.href = 'https://x.com/hamster_kombat';
});


function showMineField() {
  for (let i = 0; i < mineFieldElements.length; i++) {
    document.getElementById(mineFieldElements[i]).style.display = 'block'
  }
  gameField.style.display = 'block';
  body.style.height = '120vh'
  document.getElementById('menu').style.boxShadow = '0px 0px 5px 1px #000000';
  mineMenuMenu.style.display = 'block'
  coinsLabel.style.marginTop = '135px';
  coinMainLogo.style.marginTop = '128px';
  earnPerClickCoin.style.marginTop = '67px';
  earnPerClickLabel.style.marginTop = '67px';
  passiveClicksCoin.style.marginTop = '67px';
  passiveClicksLabel.style.marginTop = '67px';
  gameField.style.height = '1150px';
  gameField.style.marginTop = '16px';
  earnPerClickBox.style.marginTop = '36px'
  clicksTillLevelUp.style.marginTop = '36px'
  passiveClicks.style.marginTop = '36px'
  document.documentElement.style.overflow = 'auto';
  mineButton.style.backgroundColor = '#1C1F24';
}

function hideMineField() {
  for (let i = 0; i < mineFieldElements.length; i++) {
    document.getElementById(mineFieldElements[i]).style.display = 'none';
  }
  mineButton.style.backgroundColor = '#282B30';
  earnField.style.display = 'none'
}

const PROGRESSION = [
  {
    level: 'lvl 0',
    updatePrice: 0,
    coinPerHour: 0
  },
  {
    level: 'lvl 1',
    updatePrice: 500,
    coinPerHour: 250
  },
  {
    level: 'lvl 2',
    updatePrice: 516,
    coinPerHour: 275
  },
  {
    level: 'lvl 3',
    updatePrice: 524,
    coinPerHour: 300
  },
  {
    level: 'lvl 4',
    updatePrice: 782,
    coinPerHour: 325
  },
  {
    level: 'lvl 5',
    updatePrice: 941,
    coinPerHour: 350
  },
  {
    level: 'lvl 6',
    updatePrice: 1100,
    coinPerHour: 375
  },
  {
    level: 'lvl 7',
    updatePrice: 1258,
    coinPerHour: 400
  },
  {
    level: 'lvl 8',
    updatePrice: 1417,
    coinPerHour: 425
  },
  {
    level: 'lvl 9',
    updatePrice: 1576,
    coinPerHour: 450
  },
  {
    level: 'lvl 10',
    updatePrice: 1735,
    coinPerHour: 475
  },
  {
    level: 'lvl 11',
    updatePrice: 1894,
    coinPerHour: 500
  },
  {
    level: 'lvl 12',
    updatePrice: 2052,
    coinPerHour: 525
  },
  {
    level: 'lvl 13',
    updatePrice: 2211,
    coinPerHour: 550
  },
  {
    level: 'lvl 14',
    updatePrice: 2370,
    coinPerHour: 575
  },
  {
    level: 'lvl 15',
    updatePrice: 2529,
    coinPerHour: 600
  }
];

function adjustMineCards() {
  const telegramId = getTelegramId();
  postData('/getMineCardsInformation', {
    telegramId: telegramId
  })
  .then(data => {
    if (data.data != 'User added') {
      const information = Array.from(data.data)[0]
      console.log(information)
      showCurrentMineCards(information);
    }
  });
}

function showCurrentMineCards (information) {
  const cardsLevel = [
    'funTokenLevel', 'stakingLevel', 'btcPairLevel', 'ethPairLevel', 'cmcPairsLevel',
    'gameFiLevel', 'defiLevel', 'socialFiLevel', 'memeLevel', 'shitLevel'
  ]
  
  //fun tokens card data update
  let level = +information.funTokens_level;
  document.getElementById('funTokenLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('funTokenPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('funTokenPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('funTokensBox').setAttribute('data-value', level);

  level = +information.staking_level;
  document.getElementById('stakingLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('stakingPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('stakingPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('stakingBox').setAttribute('data-value', level);

  level = +information.btcPairs_level;
  document.getElementById('btcPairLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('btcPairPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('btcPairPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('btcPairsBox').setAttribute('data-value', level);

  level = +information.ethPairs_level;
  document.getElementById('ethPairLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('ethPairPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('ethPairPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('ethPairsBox').setAttribute('data-value', level);

  level = +information.top10_level;
  document.getElementById('cmcPairsLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('cmcPairsPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('cmcPairsPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('top10CMCBox').setAttribute('data-value', level);

  level = +information.gameFi_level;
  document.getElementById('gameFiLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('gameFiPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('gameFiPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('gameFiBox').setAttribute('data-value', level);

  level = +information.defi_level;
  document.getElementById('defiLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('defiPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('defiPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('defiBox').setAttribute('data-value', level);

  level = +information.socialFi_level;
  document.getElementById('socialFiLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('socialFiPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('socialFiPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('socialFiBox').setAttribute('data-value', level);

  level = +information.meme_level;
  document.getElementById('memeLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('memePrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('memePPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('memeCoinsBox').setAttribute('data-value', level);

  level = +information.shit_level;
  document.getElementById('shitLevel').innerHTML = PROGRESSION[level].level;
  document.getElementById('shitPrice').innerHTML = PROGRESSION[level+1].updatePrice;
  document.getElementById('shitPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('shitCoinsBox').setAttribute('data-value', level);

}

document.getElementById('mainButtonCover').addEventListener('dragstart', function(event) {
  event.preventDefault();
});

document.getElementById('mainButtonCover').addEventListener('touchmove', function(event) {
  event.preventDefault();
}, { passive: false });


document.getElementById('upgradeCardBoxClose').addEventListener('click', ()=>{
  upgradeCardBox.style.display = 'none'
})
/*
document.getElementById('funTokensBox').addEventListener('click', ()=>{
  const level = document.getElementById('funTokensBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('funTokensBox');
  }
});
*/
document.getElementById('stakingBox').addEventListener('click', ()=>{
  const level = document.getElementById('stakingBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('stakingBox');
  }
});

document.getElementById('btcPairsBox').addEventListener('click', ()=>{
  const level = document.getElementById('btcPairsBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('btcPairsBox');
  }
});

document.getElementById('ethPairsBox').addEventListener('click', ()=>{
  const level = document.getElementById('ethPairsBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('ethPairsBox');
  }
});

document.getElementById('top10CMCBox').addEventListener('click', ()=>{
  const level = document.getElementById('top10CMCBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('top10CMCBox');
  }
});

document.getElementById('gameFiBox').addEventListener('click', ()=>{
  const level = document.getElementById('gameFiBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('gameFiBox');
  }
});

document.getElementById('defiBox').addEventListener('click', ()=>{
  const level = document.getElementById('defiBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('defiBox');
  }
});

document.getElementById('socialFiBox').addEventListener('click', ()=>{
  const level = document.getElementById('socialFiBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('socialFiBox');
  }
});

document.getElementById('memeCoinsBox').addEventListener('click', ()=>{
  const level = document.getElementById('memeCoinsBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('memeCoinsBox');
  }
});

document.getElementById('shitCoinsBox').addEventListener('click', ()=>{
  const level = document.getElementById('shitCoinsBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('shitCoinsBox');
  }
});

const data = [
  {
    boxId: 'funTokensBox',
    image: 'sport.png',
    label: 'Fun tokens',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('funTokensBox').getAttribute('data-value')
  },
  {
    boxId: 'stakingBox',
    image: 'staking.png',
    label: 'Staking',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('stakingBox').getAttribute('data-value')
  },
  {
    boxId: 'btcPairsBox',
    image: 'bitcoin.png',
    label: 'BTC pairs',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('btcPairsBox').getAttribute('data-value')
  },
  {
    boxId: 'ethPairsBox',
    image: 'ethereum.png',
    label: 'ETH pairs',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('ethPairsBox').getAttribute('data-value')
  },
  {
    boxId: 'top10CMCBox',
    image: 'cmc.png',
    label: 'Top 10 cmc pairs',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('top10CMCBox').getAttribute('data-value')
  },
  {
    boxId: 'gameFiBox',
    image: 'gamefi.png',
    label: 'GameFi tokens',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('gameFiBox').getAttribute('data-value')
  },
  {
    boxId: 'defiBox',
    image: 'defi.png',
    label: 'Defi2.0 tokens',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('defiBox').getAttribute('data-value')
  },
  {
    boxId: 'socialFiBox',
    image: 'socialfi.png',
    label: 'SocialFi tokens',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('socialFiBox').getAttribute('data-value')
  },
  {
    boxId: 'memeCoinsBox',
    image: 'meme.png',
    label: 'Meme coins',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('memeCoinsBox').getAttribute('data-value')
  },
  {
    boxId: 'shitCoinsBox',
    image: 'shit.png',
    label: 'Shit coins',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('shitCoinsBox').getAttribute('data-value')
  },
  {
    boxId: 'shitCoinsBox',
    image: 'shit.png',
    label: 'Shit coins',
    description: 'Digital access to exclusive fan experiences and privileges',
    currentLevel: +document.getElementById('shitCoinsBox').getAttribute('data-value')
  }
];

const cardsData = [
  {
    boxId: 'funTokensBox',
    label: 'funTokensLabel',
    level: 'funTokenLevel',
    price: 'funTokenPrice',
    pph: 'funTokenPPH' 
  },
  {
    boxId: 'stakingBox',
    label: 'funTokensLabel',
    level: 'stakingLevel',
    price: 'stakingPrice',
    pph: 'stakingPPH' 
  },
  {
    boxId: 'btcPairsBox',
    label: 'funTokensLabel',
    level: 'btcPairLevel',
    price: 'btcPairPrice',
    pph: 'btcPairPPH' 
  },
  {
    boxId: 'ethPairsBox',
    label: 'funTokensLabel',
    level: 'ethPairLevel',
    price: 'ethPairPrice',
    pph: 'ethPairPPH' 
  },
  {
    boxId: 'top10CMCBox',
    label: 'funTokensLabel',
    level: 'cmcPairsLevel',
    price: 'cmcPairsPrice',
    pph: 'cmcPairsPPH' 
  },
  {
    boxId: 'gameFiBox',
    label: 'funTokensLabel',
    level: 'gameFiLevel',
    price: 'gameFiPrice',
    pph: 'gameFiPPH' 
  },
  {
    boxId: 'defiBox',
    label: 'funTokensLabel',
    level: 'defiLevel',
    price: 'defiPrice',
    pph: 'defiPPH' 
  },
  {
    boxId: 'socialFiBox',
    label: 'funTokensLabel',
    level: 'socialFiLevel',
    price: 'socialFiPrice',
    pph: 'socialFiPPH' 
  },
  {
    boxId: 'memeCoinsBox',
    label: 'funTokensLabel',
    level: 'memeLevel',
    price: 'memePrice',
    pph: 'memePPH' 
  },
  {
    boxId: 'shitCoinsBox',
    label: 'funTokensLabel',
    level: 'shitLevel',
    price: 'shitPrice',
    pph: 'shitPPH' 
  },
  {
    boxId: 'shitCoinsBox',
    label: 'funTokensLabel',
    level: 'shitLevel',
    price: 'shitPrice',
    pph: 'shitPPH' 
  }
]

function adjustUpgradeCardBox (id) {
  
  
  let cardIndex;
  for (let i = 0; i < data.length; i++) {
    if (data[i].boxId == id) {
      cardIndex = i;
      break;
    }
  }

  // get the next level data
  const cardId = data[cardIndex].boxId;
  const nextLevel = +document.getElementById(cardId).getAttribute('data-value')+1;
  if (nextLevel-1 != 15) {
    const nextLevelPPH = PROGRESSION[nextLevel].coinPerHour;
    const nextLevelPrice = PROGRESSION[nextLevel].updatePrice;
  
    // adjust upgrade box due to card
    document.getElementById('upgradeCardBoxImage').src = data[cardIndex].image;
    document.getElementById('upgradeCardBoxLabel').innerHTML = data[cardIndex].label;
    document.getElementById('upgradeCardBoxPPH').innerHTML = '+' + nextLevelPPH;
    document.getElementById('upgradeCardBoxPrice').innerHTML = nextLevelPrice;
  }
}

document.getElementById('upgradeCardBoxSubmit').addEventListener('click', ()=>{
  const labels = [
    'Fun tokens', 'Staking', 'BTC pairs', 'ETH pairs', 'Top 10 cmc pairs',
    'GameFi tokens', 'Defi2.0 tokens', 'SocialFi tokens', 'Meme coins', 'Shit coins'
  ]
  // get data needed for card upgarde
  const coins = +getLeftCoins();
  const price = +document.getElementById('upgradeCardBoxPrice').textContent;
  const cardLabel = document.getElementById('upgradeCardBoxLabel').textContent;
  // make coin update
  if (coins >= price) {
    // get current card
    let card;
    for (let i = 0; i < labels.length; i++) {
      if (cardLabel == labels[i]){
        card = labels[i];
        break;
      }
    }
    let index;
    for (let i = 0; i < data.length; i++) {
      if (card == data[i].label){
        index = i;
      }
    }
    const cardBox = data[index].boxId;
    // get current card's level
    const level = +document.getElementById(cardBox).getAttribute('data-value');
    if (level == 14){
      document.getElementById('upgradeCardBox').style.display = 'none';
    }
    // increase level
    document.getElementById(cardBox).setAttribute('data-value', level+1)
    // substract coins
    adjustCoinsVisual(coins-price);
    // get card's ids
    let cardData;
    for (let i = 0; i < cardsData.length; i++) {
      if (cardBox == cardsData[i].boxId) {
        cardData = cardsData[i];
      }
    }
    // adjust card visual
    document.getElementById(cardData.level).textContent = PROGRESSION[level+1].level;
    document.getElementById(cardData.price).textContent = PROGRESSION[level+2].updatePrice;
    document.getElementById(cardData.pph).textContent = '+' + PROGRESSION[level+1].coinPerHour;
    document.getElementById('upgradeCardBox').style.display = 'none';
  // update to db
  postData('/updateCardLevel', {
    telegramId: getTelegramId(),
    cardId: cardData.boxId,
    cardLevel: +document.getElementById(cardBox).getAttribute('data-value')
  })
  .then(data => {
    console.log('Card successfuly updated.')
  })
  }
});



function triggerHapticFeedback() {
  Telegram.WebApp.HapticFeedback.impactOccurred('light');
}

document.getElementById('prTeamMenu').addEventListener('click', ()=>{
  comingSoonDiv.style.display = 'block';
  prTeamMenu.style.backgroundColor = '#1c1f24';
  marketsMenu.style.backgroundColor = '#282B30';
  legalMenu.style.backgroundColor = '#282B30';
  specialsMenu.style.backgroundColor = '#282B30'
});

document.getElementById('legalMenu').addEventListener('click', ()=>{
  comingSoonDiv.style.display = 'block';
  prTeamMenu.style.backgroundColor = '#282B30';
  legalMenu.style.backgroundColor = '#1c1f24';
  marketsMenu.style.backgroundColor = '#282B30';
  specialsMenu.style.backgroundColor = '#282B30'
});

document.getElementById('specialsMenu').addEventListener('click', ()=>{
  comingSoonDiv.style.display = 'block';
  prTeamMenu.style.backgroundColor = '#282B30';
  legalMenu.style.backgroundColor = '#282B30';
  marketsMenu.style.backgroundColor = '#282B30';
  specialsMenu.style.backgroundColor = '#1c1f24'
});

document.getElementById('marketsMenu').addEventListener('click', ()=>{
  comingSoonDiv.style.display = 'none';
  prTeamMenu.style.backgroundColor = '#282B30';
  legalMenu.style.backgroundColor = '#282B30';
  marketsMenu.style.backgroundColor = '#1c1f24';
  specialsMenu.style.backgroundColor = '#282B30'
});

function alignCoinBox(){
  const imageWidth = document.getElementById('coinMainLogo').clientWidth;
  const coinsWidth = document.getElementById('coinsLabel').clientWidth;
  const screenWidth = document.getElementById('gameField').clientWidth;
  const imageConstMargin = 136;
  const coinsConstMargin = 223;
  const imageConstWidth = 75;
  const coinsConstWidth = 164;

  
  const newCoinMargin = coinsWidth * coinsConstMargin / coinsConstWidth;

  

  //document.getElementById('coinMainLogo').style.marginLeft = imageMargin + 'px';
  document.getElementById('coinsLabel').style.marginLeft = newCoinMargin + 'px';
}

const coinBoxPosition = [
  { coinAmount: 100, imageMargin: 195, coinsMargin: 275 },
  { coinAmount: 1000, imageMargin: 175, coinsMargin: 255 },
  { coinAmount: 10000, imageMargin: 155, coinsMargin: 235 },
  { coinAmount: 100000, imageMargin: 140, coinsMargin: 225 },
  { coinAmount: 1000000, imageMargin: 130, coinsMargin: 210 },
  { coinAmount: 10000000, imageMargin: 110, coinsMargin: 190 },
  { coinAmount: 100000000, imageMargin: 95, coinsMargin: 175 },
]

function adjustMarginCoinBox(){
  const coins = +getLeftCoins();
  const index = +identifyIndex(coins);
  console.log(coins)
  console.log(index)
  document.getElementById('coinsLabel').style.marginLeft = coinBoxPosition[index].coinsMargin + 'px';
  document.getElementById('coinMainLogo').style.marginLeft = coinBoxPosition[index].imageMargin + 'px'; 
}

function identifyIndex(coins) {
  if (coins < 100) return 0
  return coins.toString().length-2
}

document.getElementById('funTokensBox').addEventListener('click', function() {showCardUpgradeBox('funTokensBox')});

function showCardUpgradeBox (cardId) {
  document.getElementById('cardUpgradeBox').style.display = 'block';
}