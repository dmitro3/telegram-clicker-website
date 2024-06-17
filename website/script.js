body.height = window.innerHeight
var viewportWidth = window.innerWidth;
// width: 430
// height: 733
var viewportHeight = window.innerHeight;
let tg = window.Telegram.WebApp;
tg.expand();

window.onload = ()=> {
  registerUser();
  showReferrals();
  identifyReferral();
  adjustDailyRewards();
  adjustMineCards();
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

document.getElementById('friendsButton').addEventListener('click', ()=>{
  userLogoBackgroundDiv.style.display = 'none';
  body.height = '100vh'

  exchangeBox.style.display = 'none';
  usernameLabel.style.display = 'none';
    document.getElementById('gameField').style.display = 'none';
    document.getElementById('friendsButton').style.color = 'red';
    document.getElementById('gameButton').style.color ='white';
    document.getElementById('referalField').style.display = 'block';
    earnPerClickBox.style.display = 'none'
    clicksTillLevelUp.style.display = 'none'
    passiveClicks.style.display = 'none'
    progressBarBoxStatusLabel.style.display = 'none'
    progressBarBoxLevelLabel.style.display = 'none'
    progressBarBox.style.display = 'none'
    developerButton.style.color = 'white';
    devField.style.display = 'none'
    earnBox.style.display = 'none';
    earnButton.style.color = 'white';
    mineMenu.style.display = 'none';
    coinsBox.style.display = 'none';
    mineButton.style.color = 'white';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo({
      top: 0,
      behavior: 'auto'
  });
});

document.getElementById('gameButton').addEventListener('click', ()=>{
  adjustProgressBar()
  body.height = '100vh'

  coinsBox.style.marginTop = '24vh'
  mineMenu.style.display = 'none';
  mineButton.style.color = 'white';
  usernameLabel.style.display = 'block';
  userLogoBackgroundDiv.style.display = 'block';
  exchangeBox.style.display = 'block';
  earnPerClickBox.style.marginTop = '13vh'
  clicksTillLevelUp.style.marginTop = '13vh'
  passiveClicks.style.marginTop = '13vh'
  document.getElementById('gameField').style.display = 'block';
  document.getElementById('friendsButton').style.color = 'white';
  document.getElementById('gameButton').style.color ='red';
  document.getElementById('referalField').style.display = 'none';
  earnPerClickBox.style.display = 'block'
  clicksTillLevelUp.style.display = 'block'
  passiveClicks.style.display = 'block'
  progressBarBoxStatusLabel.style.display = 'block'
  progressBarBoxLevelLabel.style.display = 'block'
  progressBarBox.style.display = 'block'
  developerButton.style.color = 'white'
  devField.style.display = 'none'
  earnBox.style.display = 'none';
  earnButton.style.color = 'white';
  mineMenu.style.display = 'none';
  mineButton.style.color = 'white';
  coinsBox.style.display = 'block'
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo({
    top: 0,
    behavior: 'auto'
});
});

document.getElementById('earnButton').addEventListener('click', ()=>{
  userLogoBackgroundDiv.style.display = 'none';
  body.height = '100vh'

  exchangeBox.style.display = 'none';
  usernameLabel.style.display = 'none';
  mineButton.style.color = 'white';
  document.getElementById('gameField').style.display = 'none';
  document.getElementById('friendsButton').style.color = 'white';
  document.getElementById('gameButton').style.color ='white';
  document.getElementById('referalField').style.display = 'none';
  earnPerClickBox.style.display = 'none'
  clicksTillLevelUp.style.display = 'none'
  passiveClicks.style.display = 'none'
  progressBarBoxStatusLabel.style.display = 'none'
  progressBarBoxLevelLabel.style.display = 'none'
  progressBarBox.style.display = 'none'
  developerButton.style.color = 'white'
  earnBox.style.display = 'block';
  earnButton.style.color = 'red';
  devField.style.display = 'none'
  mineMenu.style.display = 'none';
  coinsBox.style.display = 'none'
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo({
    top: 0,
    behavior: 'auto'
});
})

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
    const x = event.clientX;
    const y = event.clientY;

    const plusOne = document.createElement('h2');
    plusOne.textContent = "+1";

    plusOne.style.position = "absolute";
    plusOne.style.left = (x-20) + "px";
    plusOne.style.top = (y-20) + "px";
    plusOne.style.color = "green";
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

  document.getElementById('progressBarBoxStatusLabel').innerHTML = level + ' >';
  document.getElementById('progressBarBoxLevelLabel').innerHTML = 'Level '+levelLabel +'/10'

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
  document.getElementById('progressBar').style.width = (barWidth-10) + 'vw'
} 

//gggggggggggggggggggggggggggggggggggggggggggg

document.getElementById('refreshFriendsList').addEventListener('click', ()=>{
  adjustProgressBar();

});

developerButton.addEventListener('click', ()=>{
  userLogoBackgroundDiv.style.display = 'none';
  document.documentElement.style.overflow = 'hidden';
  body.height = '100vh'
  window.scrollTo({
    top: 0,
    behavior: 'auto'
});
  exchangeBox.style.display = 'none';
  usernameLabel.style.display = 'none';
  coinsBox.style.display = 'none'
  mineButton.style.color = 'white';
  mineMenu.style.display = 'none';
  document.getElementById('gameField').style.display = 'none';
  document.getElementById('friendsButton').style.color = 'white';
  document.getElementById('gameButton').style.color ='white';
  document.getElementById('referalField').style.display = 'none';
  earnPerClickBox.style.display = 'none'
  clicksTillLevelUp.style.display = 'none'
  passiveClicks.style.display = 'none'
  progressBarBoxStatusLabel.style.display = 'none'
  progressBarBoxLevelLabel.style.display = 'none'
  progressBarBox.style.display = 'none';
  developerButton.style.color = 'red';
  devField.style.display = 'block'
  earnBox.style.display = 'none';
  earnButton.style.color = 'white';
})

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

document.getElementById('mineButton').addEventListener('click', ()=>{
  document.getElementById('gameField').style.display = 'none';
  document.getElementById('friendsButton').style.color = 'white';
  document.getElementById('gameButton').style.color ='white';
  document.getElementById('referalField').style.display = 'none';
  earnPerClickBox.style.display = 'block'
  clicksTillLevelUp.style.display = 'block'
  passiveClicks.style.display = 'block'
  progressBarBoxStatusLabel.style.display = 'none'
  progressBarBoxLevelLabel.style.display = 'none'
  progressBarBox.style.display = 'none';
  developerButton.style.color = 'white';
  devField.style.display = 'none'
  earnBox.style.display = 'none';
  earnButton.style.color = 'white';
  mineMenu.style.display = 'block';
  mineButton.style.color = 'red';
  coinsBox.style.display = 'block'
  userLogoBackgroundDiv.style.display = 'none';
  exchangeBox.style.display = 'none';
  usernameLabel.style.display = 'none';
  earnPerClickBox.style.marginTop = '3vh'
  clicksTillLevelUp.style.marginTop = '3vh'
  passiveClicks.style.marginTop = '3vh'
  coinsBox.style.marginTop = '14vh';
  document.documentElement.style.overflow = 'auto';
});

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
  document.getElementById('funTokenPrice').innerHTML = PROGRESSION[level].updatePrice;
  document.getElementById('funTokenPPH').innerHTML = '+' + PROGRESSION[level].coinPerHour;
  document.getElementById('funTokensBox').value = level;
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

document.getElementById('funTokensBox').addEventListener('click', ()=>{
  const level = document.getElementById('funTokensBox').getAttribute('data-value');
  if (level != 15) {
    upgradeCardBox.style.display = 'block';
    adjustUpgradeCardBox('funTokensBox');
  }
});

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
  }
  // update to db
  postData('/updateCardLevel', {
    telegramId: getTelegramId(),
    cardId: cardData.boxId,
    cardLevel: +document.getElementById(cardBox).getAttribute('data-value')
  })
  .then(data => {
    console.log('Card successfuly updated.')
  })
});

