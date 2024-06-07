body.height = window.innerHeight
window.onload = ()=> {
  adjustProgressBar()
  registerUser();
  showReferrals();
  identifyReferral()
  const coins = +getLeftCoins();
  if (coins > 0 && coins < 10){
    adjustClickedReferral(getTelegramId());
  }
  const tg = window.Telegram.WebApp;
  tg.expand();
  postData('/getGameData', {
      telegramId: getTelegramId(),
    })
    .then(data => {
      newData = Array.from(data.data);
      const record = newData[newData.length-1];
      const coins = record.coins;
      adjustCoinsVisual(coins);

      document.getElementById('coinsLabel').innerHTML = record.coins;
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


});

document.getElementById('gameButton').addEventListener('click', ()=>{
  adjustProgressBar()
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

});

document.getElementById('mainButtonBox').addEventListener('touchstart', ()=>{
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

document.getElementById('mainButtonBox').addEventListener('click', ()=>{
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
        telegramId: data
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
            const coins = +document.getElementById('coinsLabel').textContent;

            document.getElementById('coinsLabel').innerHTML = (coins+5000)
          } else {
            state.innerHTML = '-- +25000 --';
            document.getElementById('coinsLabel').innerHTML = (coins+25000)
          }
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

  console.log('coins:', coins);
  console.log('maxValue:', maxValue);
  console.log('progression:', progression);
  console.log('barWidth:', barWidth);

  document.getElementById('progressBar').style.width = (barWidth-10) + 'vw'
} 

//gggggggggggggggggggggggggggggggggggggggggggg

document.getElementById('refreshFriendsList').addEventListener('click', ()=>{
  adjustProgressBar();

});

developerButton.addEventListener('click', ()=>{
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