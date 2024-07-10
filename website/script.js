body.height = window.innerHeight
var viewportWidth = window.innerWidth;
// width: 430
// height: 733
var viewportHeight = window.innerHeight;
window.Telegram.WebApp.enableClosingConfirmation()
let tg = window.Telegram.WebApp;
tg.expand();
let friendDivTopMargin = 451

function handleOrientationChange() {
  // Lock orientation to portrait mode (0 degrees)
  if (window.screen.orientation !== 0) {
      // Rotate the screen back to portrait orientation
      if (window.screen.orientation && window.screen.orientation.lock) {
          window.screen.orientation.lock('portrait');
      } else if (window.screen.lockOrientation) {
          window.screen.lockOrientation('portrait');
      }
  }
}
let process = false;

// JavaScript
const overflow = 0; // Adjust as needed
document.body.style.overflowY = 'hidden';
document.body.style.marginTop = `${overflow}px`;
document.body.style.height = `${window.innerHeight + overflow}px`;
document.body.style.paddingBottom = `${overflow}px`;
window.scrollTo(0, overflow);

let scrollableEl = document.getElementById('scroll'); // Identify your scrollable element here

const onTouchStart = (e) => {
  ts = e.touches[0].clientY;
};

const onTouchMove = (e) => {
  if (scrollableEl) {
    const scroll = scrollableEl.scrollTop;
    const te = e.changedTouches[0].clientY;
    if (scroll <= 0 && ts < te) {
      e.preventDefault();
    }
  } else {
    e.preventDefault();
  }
};

document.documentElement.addEventListener('touchstart', onTouchStart, { passive: false });
document.documentElement.addEventListener('touchmove', onTouchMove, { passive: false });

document.addEventListener('touchstart', function(e) {
  e.preventDefault();
});
//Margins of dot for createSubFriend div in r
const dotMargins = [
  { status: 'Bronze', margin: 115 },
  { status: 'Silver', margin: 105 },
  { status: 'Gold', margin: 104 },
  { status: 'Platinum', margin: 125 },
  { status: 'Diamond', margin: 127 },
  { status: 'Epic', margin: 100 },
  { status: 'Legendary', margin: 137 },
  { status: 'Master', margin: 118 },
  { status: 'Grand Master', margin:155 },
  { status: 'Lord', margin: 104 }
]

const fixedScrollPosition = { top: 0, left: 0 };

    // Function to maintain the fixed scroll position
    function maintainScrollPosition() {
      window.scrollTo(fixedScrollPosition.left, fixedScrollPosition.top);
    }

    // Listen to the scroll event
    window.addEventListener('scroll', maintainScrollPosition);

    //window.addEventListener('touchmove', maintainScrollPosition);

    // Optionally, ensure the scroll position is set on page load
    window.addEventListener('load', () => {
      window.scrollTo(fixedScrollPosition.left, fixedScrollPosition.top);
      
    });



window.addEventListener('orientationchange', function ()
{
    if (window.innerHeight > window.innerWidth)
    {
        document.getElementsByTagName('body')[0].style.transform = "rotate(90deg)";
    }
});

// Initial call to handle orientation based on current state
handleOrientationChange();

// Event listener for orientation change
window.addEventListener('orientationchange', handleOrientationChange);
/*
// Function to prevent scrolling
function preventScroll(event) {
  // Calculate the difference between current touch position and initial touch position
  var deltaY = event.touches[0].clientY - document.getElementById('body').touchStartY;
  
  // Check if scrolling is needed
  if (Math.abs(deltaY) >= 10) {
      event.preventDefault(); // Prevent default scrolling behavior
  }
}

// Event listener for touch start
document.getElementById('body').addEventListener('touchstart', function(event) {
  // Store the initial touch position
  this.touchStartY = event.touches[0].clientY;
  
  // Prevent scrolling on touchmove
});
*/    

const gameFieldElements = [
  'userLogoPhoto', 'userLogoBackgroundDiv', 'exchangeBox', 'exchangeBoxLabel', 'exchangeImage',
  'earnPerClickBox', 'clicksTillLevelUp', 'earnPerClickCoin', 'earnPerClickLabel', 'clicksTillLevelUpLabel',
  'insideEarnPerClickLabel', 'insideCoinsTillLevelUpLabel', 'passiveClicks', 'insidePassiveCLicksLabel', 'passiveClicksCoin', 'passiveClicksLabel',
  'coinMainLogo', 'coinsLabel', 'progressBarBoxStatusLabel', 'progressBarBoxLevelLabel', 'progressBarBoxBox', 'progressBarBox', 'progressBar',
  'mainButtonCover', 'energyImage', 'energyLabel', 'usernameLabel'
]

const cardInfo = [
  { cardId: 'funTokensBox', label: 'IT Specialists', level: 'funTokenLevel', price: 'funTokenPrice', pph: 'funTokenPPH', image: 'sport.png', infoModule: funTokensBoxModule.getData(), description: 'Hire highly skilled programmers to increase the efficiency and speed of development.'},
  { cardId: 'stakingBox', label: 'Producer', level: 'stakingLevel', price: 'stakingPrice', pph: 'stakingPPH', image: 'staking.png', infoModule: stakingBoxModule.getData(), description: 'Delegate tasks to your assistant. Reduce workload, enhancing work efficiency.' },
  { cardId: 'btcPairsBox', label: 'Game Engine', level: 'btcPairLevel', price: 'btcPairPrice', pph: 'btcPairPPH', image: 'bitcoin.png', infoModule: btcPairsModule.getData(), description: 'Developing a game engine reduces the cost of developing future games, improves game performance, and adds exclusive features that attract players.' },
  { cardId: 'ethPairsBox', label: 'Servers', level: 'ethPairLevel', price: 'ethPairPrice', pph: 'ethPairPPH', image: 'ethereum.png', infoModule: ethPairsModule.getData(), description: 'Upgrade your infrastructure to improve game server stability and reduce the failure rate.' },
  { cardId: 'top10CMCBox', label: 'Technical Upgrades', level: 'cmcPairsLevel', price: 'cmcPairsPrice', pph: 'cmcPairsPPH', image: 'cmc.png', infoModule: cmcModule.getData(), description: 'Improve automated testing systems to reduce the number of bugs and errors.' },
  { cardId: 'gameFiBox', label: 'UI/UX Department', level: 'gameFiLevel', price: 'gameFiPrice', pph: 'gameFiPPH', image: 'gamefi.png', infoModule: gameModule.getData(), description: 'Interface updates improve user experience, increasing player retention.' },
  { cardId: 'defiBox', label: 'DAO', level: 'defiLevel', price: 'defiPrice', pph: 'defiPPH', image: 'defi.png', infoModule: defiModule.getData(), description: 'Decentralized Autonomous Organizations add the ability for players to vote on game updates, increasing their loyalty.' },
  { cardId: 'socialFiBox', label: 'Team Building', level: 'socialFiLevel', price: 'socialFiPrice', pph: 'socialFiPPH', image: 'socialfi.png', infoModule: socialModule.getData(), description: 'Improve team morale and increase their motivation through team-building activities to reduce task completion time and increase employee loyalty.' },
  { cardId: 'memeCoinsBox', label: 'Office', level: 'memeLevel', price: 'memePrice', pph: 'memePPH', image: 'mem.png', infoModule: memeModule.getData(), description: 'Create a flexible work schedule and improve the office environment. Increase comfort to boost productivity. Reduce team stress levels to enhance efficiency.' },
  { cardId: 'shitCoinsBox', label: 'Art Department', level: 'shitLevel', price: 'shitPrice', pph: 'shitPPH', image: 'shit.png', infoModule: shitModule.getData(), description: 'Hire highly skilled artists to improve the quality and speed of art creation for games.' }
];


const mineFieldElements = [
  'earnPerClickBox', 'clicksTillLevelUp', 'earnPerClickCoin', 'earnPerClickLabel', 'clicksTillLevelUpLabel',
  'insideEarnPerClickLabel', 'insideCoinsTillLevelUpLabel', 'passiveClicks', 'insidePassiveCLicksLabel', 'passiveClicksCoin', 'passiveClicksLabel',
  'coinMainLogo', 'coinsLabel', 'funTokensBox', 'stakingBox', 'btcPairsBox', 'ethPairsBox', 'top10CMCBox', 'gameFiBox', 'defiBox', 'socialFiBox', 
  'memeCoinsBox', 'shitCoinsBox', 'mineMenuMenu', 'mineScrollDiv'
]

window.onload = ()=> {
  body.style.height = '1000px';
  body.height = '1000px';
  adjustReferrals();
  adjustScreenSize();
  dailyRewards();
  registerUser();
  adjustMineCards();
  adjustProgressBar();
  const coins = +getLeftCoins();
  let tg = window.Telegram.WebApp;

  document.getElementById('usernameLabel').innerHTML = tg.initDataUnsafe.user.username;
  if (coins > 0 && coins < 10){
    adjustClickedReferral(getTelegramId());
  }
  tg.expand();
  postData('/getGameData', { telegramId: getTelegramId() })
  .then(data => {
    if (!data.message && data) {
      const { energy, coins, time } = data;
      document.getElementById('energyLabel').innerHTML = calculateEnergy(energy, time);
      adjustCoinsVisual(coins);
      adjustProgressBar();
      showPassiveMining(time);
    } else {
      console.log('No data received from the server');
    }
  });
}

function adjustReferrals () {
  const currentUrl = `${window.location.href}`;
  console.log('url - ' + currentUrl)
  const code = currentUrl.match(/start=([^#]*)#/)[1];
  console.log('code - ' + code)
  if (`${code}` != 'undefined') {
    addReferal(+code);
  } else {
    showReferrals(+getTelegramId());
  }
};

function showReferrals(id) {
  process = true
  postData('/getReferrals', {
    telegramSourceId: id
  })
  .then(data => { 
    console.log(data)
    if (data && !data.message){
      const newData = Array.from(data);
      console.log(newData)
      document.getElementById('refFriendsNumber').textContent = +newData.length;
      if (newData.length != 0){
        const invitedFriendBoxes = document.querySelectorAll('.invitedFriendBox');
        invitedFriendBoxes.forEach(box => {
        box.remove();
        });
        friendDivTopMargin = 451;
        for (let i = 0; i < newData.length; i++) {
          createSubFriend(newData[i].telegramReferralId, newData[i].verified)
        }
      }
    }
  });
}

function identifyReferral(){
  const currentUrl = `${window.location.href}`;
  const regex = /start=([^#]*)#/;
  const match = currentUrl.match(regex);
  const code = match[1];
  console.log('code - ' + code)
  if (code != 'undefined') {
    postData('/getReferrals', {
      telegramSourceId: +code,
    })
    .then(data => { 
      console.log(data)
      if (data && !data.message){
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
    }
    });
  }
}

function adjustScreenSize () {
  const basicwidth = 519;
  body.height = +window.innerHeight;
  const userWidth = +window.innerWidth;
  const newScale = userWidth/basicwidth;
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    let newContent = `width=device-width, initial-scale=${newScale}`;
    viewportMeta.setAttribute('content', newContent);
  }
}

function showFriendsMenu() {
  document.getElementById('inviteBoxSimpleImage').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('inviteBoxPremiumImage1').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('inviteBoxPremiumImage2').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('inviteBoxPremiumImage3').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('friendsFieldBringFriends').style.animation = 'moveToLeft 0.2s forwards';
  document.getElementById('friendsFieldBringSubLabel').style.animation = 'moveToRight 0.2s forwards';
  document.getElementById('inviteFriendCopyDiv').style.animation = 'moveToTop 0.2s forwards';
  document.getElementById('inviteFriendDiv').style.animation = 'moveToTop 0.2s forwards'


  document.getElementById('html').style.height = '797px'
  body.style.height = '1000px';
  body.height = '1000px';
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  friendsField.style.display = 'block';
  friendsField.style.height = '797px'
  friendsButton.style.backgroundColor = '#1C1F24';
  document.documentElement.style.overflow = 'hidden';
  gameField.style.display = 'none';
  body.style.background = '#000000';
}

function hideFriendsMenu() {
  friendsField.style.display = 'none';
  body.style.background = '#282B30';
  friendsButton.style.backgroundColor = '#282B30';
}


function showGameMenu() {
  document.getElementById('earnPerClickBox').style.animation = 'movingBlock 0.2s forwards';
  document.getElementById('clicksTillLevelUp').style.animation = 'movingBlock 0.2s forwards';
  document.getElementById('passiveClicks').style.animation = 'movingBlock 0.2s forwards';
  document.getElementById('mainButtonCover').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('energyImage').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('energyLabel').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('cover').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('progressBarBoxStatusLabel').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('progressBarBoxLevelLabel').style.animation = 'scaleAnimation 0.2s forwards'
  document.getElementById('progressBarBoxBox').style.animation = 'scaleAnimation 0.2s forwards'

  unwhiteButton(image, label)
  whiteButton('exchangeImage1', 'exchangeLabel')
  image = 'exchangeImage1'
  label = 'exchangeLabel'
  for (let i = 0; i < gameFieldElements.length; i++) {
    document.getElementById(gameFieldElements[i]).style.display = 'block';
  }
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  gameField.style.display = 'block';
  earnPerClickBox.style.marginTop = '114px';
  clicksTillLevelUp.style.marginTop = '114px';
  passiveClicks.style.marginTop = '114px';
  document.documentElement.style.overflow = 'hidden';
  gameButton.style.backgroundColor = '#1C1F24';
  gameField.style.height = '880px';
  earnPerClickBox.style.marginTop = '114px';
  clicksTillLevelUp.style.marginTop = '114px';
  passiveClicks.style.marginTop = '114px';
  cover.style.marginTop = '130px'
  body.style.height = '100vh'
  document.documentElement.style.overflow = 'hidden';
  gameButton.style.backgroundColor = '#1C1F24';
  gameField.style.marginTop = '95px';
  menu.style.boxShadow = '0px 0px 0px 0px #000000'
}

function hideGameMenu() {
  for (let i = 0; i < gameFieldElements.length; i++) {
    document.getElementById(gameFieldElements[i]).style.display = 'none';
  }
  gameButton.style.backgroundColor = '#282B30';
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
}

let image = 'exchangeImage1';
let label = 'exchangeLabel';
document.getElementById('gameButton').addEventListener('click', ()=>{
  hapticFeedback()
  adjustProgressBar()
  hideEarnMenu();
  hideMineField();
  hideFriendsMenu();
  hideDeveloperField();
  showGameMenu();
});

document.getElementById('earnButton').addEventListener('click', ()=>{
  hapticFeedback()
  hideGameMenu();
  hideMineField();
  hideFriendsMenu();
  hideDeveloperField();
  showEarnMenu();
});

developerButton.addEventListener('click', ()=>{
  hapticFeedback()
  hideEarnMenu();
  hideMineField();
  hideFriendsMenu();
  hideGameMenu();
  showDeveloperField();
});

function whiteButton(image, label) {
  document.getElementById(image).style.animation = 'whiteImage 0.5s forwards';
  document.getElementById(label).style.animation = 'whiteText 0.5s forwards'
}


function unwhiteButton(image, label) {
    document.getElementById(image).style.animation = 'unwhiteImage 0.5s forwards';
    document.getElementById(label).style.animation = 'unwhiteText 0.5s forwards'
  }

document.getElementById('mineButton').addEventListener('click', ()=>{
  document.getElementById('earnPerClickBox').style.animation = 'none';
  document.getElementById('clicksTillLevelUp').style.animation = 'none';
  document.getElementById('passiveClicks').style.animation = 'none';
  unwhiteButton(image, label)
  whiteButton('mineImage', 'mineLabel')
  image = 'mineImage'
  label = 'mineLabel'
  hapticFeedback()
  document.documentElement.style.overflow = 'hidden';
  hideGameMenu();
  hideEarnMenu();
  hideFriendsMenu();
  hideDeveloperField();
  showMineField();
});


document.getElementById('friendsButton').addEventListener('click', ()=>{
  unwhiteButton(image, label)
  whiteButton('friendsImage', 'friendsLabel')
  image = 'friendsImage'
  label = 'friendsLabel'
  hapticFeedback()
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  hideGameMenu();
  hideEarnMenu();
  hideMineField();
  hideDeveloperField();
  showFriendsMenu();
});


function showEarnMenu() {
  document.getElementById('earnFieldCoinLogo').style.animation = 'moveToBottom 0.2s forwards';
  document.getElementById('earnFieldLabel').style.animation = 'showMoveToRight 0.2s forwards';
  document.getElementById('calendarImg').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('telegramImg').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('youtubeImg').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('xImg').style.animation = 'scaleAnimation 0.2s forwards';

  unwhiteButton(image, label)
  whiteButton('earnImage', 'earnLabel')
  image = 'earnImage'
  label = 'earnLabel'
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  body.style.backgroundColor = '#000000'
  body.style.height = '1000px'
  html.style.height = '100vh'
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

let activeTouches = new Set();
let touchQueue = [];
let processingTouches = false;

document.getElementById('mainButtonCover').addEventListener('touchmove', function(event) {
  console.log('prevented')
  event.preventDefault();
}, { passive: false });

document.getElementById('mainButtonCover').addEventListener('touchstart', (event) => {
  event.preventDefault();
  adjustProgressBar();

  if (window.Telegram.WebApp.platform === 'ios') {
    // Add all touches to the queue immediately
    for (let i = 0; i < event.touches.length; i++) {
      let touchId = event.touches[i].identifier;
      if (!activeTouches.has(touchId)) {
        activeTouches.add(touchId);
        touchQueue.push(event.touches[i]);
      }
    }

    // Start processing only if not already processing
    if (!processingTouches) {
      processingTouches = true;
      setTimeout(processTouches, 0); // Process touches in the next available frame
    }
  }
});

document.getElementById('mainButtonCover').addEventListener('touchend', (event) => {
  for (let i = 0; i < event.changedTouches.length; i++) {
    let touchId = event.changedTouches[i].identifier;
    activeTouches.delete(touchId);
  }
});

function processTouches() {
  requestAnimationFrame(() => {
    let maxTouchesPerFrame = 5; // Adjust as needed
    let touchesProcessed = 0;

    while (touchQueue.length > 0 && touchesProcessed < maxTouchesPerFrame) {
      let touch = touchQueue.shift();
      let energy = getLeftEnergy();
      if (energy >= 1) {
        let coins = getLeftCoins();
        energy -= 1;
        coins += 1;
        document.getElementById('energyLabel').innerHTML = `${energy}/1000`;
        adjustCoinsVisual(coins);
        showClick(touch);
      }
      touchesProcessed++;
    }

    if (touchQueue.length > 0) {
      // If there are remaining touches, continue processing in the next frame
      setTimeout(processTouches, 0);
    } else {
      processingTouches = false;
    }
  });
}

/*
document.getElementById('mainButtonCover').addEventListener('touchstart', (event)=>{
  event.preventDefault()
  adjustProgressBar()
  //adjustMarginCoinBox();
    if (window.Telegram.WebApp.platform == 'ios'){
        for (let i = 0; i < event.touches.length; i++) {
          showClick(event.touches[i]);
          if (i % 2 == 0){
            let energy = getLeftEnergy();
            if (energy >= 1){
              let coins = getLeftCoins();
              energy -= 1;
              coins += 1;
              document.getElementById('energyLabel').innerHTML = energy + '/1000'
              adjustCoinsVisual(coins);
            }
          }
        }
      }
  });
*/
/*
document.getElementById('mainButtonCover').addEventListener('click', ()=>{
  const e = +getLeftEnergy();
  if (e >= 0){
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
  }
});
*/
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
    const parts = energy.split(' ');
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
  const rotateX = (yy / rect.height) * 30;
  const rotateY = (xx / rect.width) * -30;
  setTimeout(()=>{button.style.transform = `rotateX(0deg) rotateY(0deg)`},100);
  button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    const x = event.clientX;
    const y = event.clientY;

    const plusOne = document.createElement('h1');
    plusOne.textContent = "+1";
    plusOne.className = 'plusOne';
    plusOne.style.position = "absolute";
    plusOne.style.left = (x-20) + "px";
    plusOne.style.top = (y-20) + "px";
    plusOne.style.zIndex = '5';
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
    


function addReferal(srcTelegramId){
  const refTelegramId = getTelegramId();
  postData('/addReferral', {
    telegramSourceId: srcTelegramId,
    telegramReferralId: refTelegramId,
    clicked: 0,
    verified: 0
  })
  .then(data => {
    console.log()
  });
}

function createElement(type, className, src) {
  const element = document.createElement(type);
  if (className) element.className = className;
  if (src) element.src = src;
  return element;
}

  function createSubFriend(id, verified){
    console.log([id, verified])
    let aaab;
      postData('/getUserInformation', {
        telegramId: id
      })
      .then(data => {
        username = Array.from(data)[0];
        console.log(username)
        aaab = username;
        postData('/getGameData', {
          telegramId: id
        })
        .then(data1 => {
          console.log(data1)
          if (data1) {
            const { coins } = data1;
          let username = aaab;
          const telegramUsername = username.telegramUsername;
          const premium = username.isPremium;

          if (+verified == 0){
            verifyReferral(id);
            if (premium == 'false'){
              const coins = +getLeftCoins();
              adjustCoinsVisual(coins+5000);
            } else {
              const coins = +getLeftCoins();
              adjustCoinsVisual(coins+25000);
          }
        }
          let nameLabel;
          if (coins >= 0 && coins <= 5000) {
            nameLabel = 'Bronze';
          } else if (coins > 5000 && coins <= 25000) {
            nameLabel = 'Silver';
          } else if (coins > 25000 && coins <= 100000) {
            nameLabel = 'Gold';
          } else if (coins > 100000 && coins <= 1000000) {
            nameLabel = 'Platinum';
          } else if (coins > 1000000 && coins <= 2000000) {
            nameLabel = 'Diamond';
          } else if (coins > 2000000 && coins <= 10000000) {
            nameLabel = 'Epic';
          } else if (coins > 10000000 && coins <= 50000000) {
            nameLabel = 'Legendary';
          } else if (coins > 50000000 && coins <= 100000000) {
            nameLabel = 'Master';
          }else if (coins > 100000000 && coins <= 1000000000) {
            nameLabel = 'Grand Master';
          }else if (coins > 1000000000) {
            nameLabel = 'Lord';
          }

          const mainDiv = createElement('div', 'invitedFriendBox')
          mainDiv.style.marginTop = friendDivTopMargin + 'px';
          friendDivTopMargin += 95;
          const div = createElement('div', 'invitedFriendImageDiv');
          const image = createElement('img', 'invitedFriendImage', 'icon.png');
          const usernameLabel = createElement('h6', 'invitedFriendName');
          const status = createElement('h6', 'inviteFriendStatus');
          const dot = createElement('div', 'inviteFriendDot');
          const coin = createElement('img', 'inviteFriendCoinImage', 'coin.png');
          const money = createElement('h6', 'invitedFriendMoney');
          status.style.width = 'auto';
          usernameLabel.textContent = telegramUsername;
          status.textContent = nameLabel;
          money.textContent = coins;

          adjustDotMargin(nameLabel, dot, coin, money);

          div.appendChild(image)
          div.appendChild(usernameLabel)
          div.appendChild(status)
          div.appendChild(dot)
          div.appendChild(coin)
          div.appendChild(money)
          mainDiv.appendChild(div)
          friendsField.appendChild(mainDiv)
        }
        })
    });
  }


function registerUser() {
  const tg = window.Telegram.WebApp;

  if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      const user = tg.initDataUnsafe.user;

      const telegramId = getTelegramId(); 
      const telegramUsername = user.username || 'No username';
      const isPremium = user.is_premium || false;

      postData('/addUserInformation', {
        telegramId: telegramId,
        telegramUsername: telegramUsername,
        isPremium: isPremium
      })
      .then(data => { 
        console.log(data)
      });
  } 
}

function verifyReferral(telegramId){
  postData('/verifyReferral', {
    telegramReferralId: telegramId,
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
document.getElementById('friendBoxRestart').addEventListener('click', function(){
  if (process == false) {   showReferrals(+getTelegramId()); process = false}
})

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



function showDeveloperField() {
  document.getElementById('airdropFieldCoinImage').style.animation = 'moveToBottom 0.2s forwards';
  document.getElementById('airdropFieldLabel1').style.animation = 'scaleAnimation 0.2s forwards';
  document.getElementById('airdropFieldLabel2').style.animation = 'scaleAnimation 0.2s forwards';
  unwhiteButton(image, label)
  whiteButton('airdropImage1', 'airdropLabell')
  image = 'airdropImage1'
  label = 'airdropLabell'
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

function adjustCoinsVisual (coins) {
  document.getElementById('coinsLabel').innerHTML = coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function adjustPassiveLabel (coins) {
  
  let symolicAddition = '';
  if (coins >= 1000 && coins < 1000000) symolicAddition = ' K'
  if (coins >= 1000000 && coins < 1000000000) symolicAddition = ' M'
  if (coins >= 1000000000) symbolicAddition = ' B';
  document.getElementById('passiveClicksLabel').textContent = document.getElementById('passiveClicksLabel').textContent + symolicAddition;
}

/*
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
*/
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

function showMineField() {
  document.getElementById('cover').style.animation = 'none'
  document.getElementById('mineMenuMenu').style.animation = 'flowRight 0.2s forwards';
  document.getElementById('mineScrollDiv').style.animation = 'flowLeft 0.2s forwards'
  adjustCardsAvailability();
  menuShadow.style.display = 'block';
  for (let i = 0; i < mineFieldElements.length; i++) {
    document.getElementById(mineFieldElements[i]).style.display = 'block'
  }
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });

  gameField.style.display = 'block';
  gameField.style.position = 'fixed';
  document.documentElement.style.overflow = 'hidden';

  document.getElementById('menu').style.boxShadow = '0px 0px 5px 1px #000000';
  mineMenuMenu.style.display = 'block'

  cover.style.marginTop = '47px'
  body.style.height = '100vh'
  document.documentElement.style.overflow = 'hidden';
 
  gameField.style.height = '979px';

  gameField.style.marginTop = '16px';

  earnPerClickBox.style.marginTop = '36px'

  clicksTillLevelUp.style.marginTop = '36px'

  passiveClicks.style.marginTop = '36px'
  mineButton.style.backgroundColor = '#1C1F24';

  //asdfasdf
  
}

function adjustCardsAvailability() {
  const coins = +getLeftCoins();
  for (let i = 0; i < 10; i++){
    document.getElementById('shadow'+(i+1)).style.opacity = 0.3;
    if (coins > +document.getElementById(cardInfo[i].price).textContent){
      document.getElementById('shadow'+(i+1)).style.opacity = 1;
    }
  }
}

function hideMineField() {
  menuShadow.style.display = 'none';
  menuShadow.style.display = 'none'
  document.documentElement.style.maxHeight = '100vh';
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  body.style.touchAction = 'none';
  body.style.webkitUserSelect = 'none';
  body.style.mozUserSelect = 'none';
  body.style.msUserSelect = 'none';
  body.style.userSelect = 'none';
  body.style.webkitUserDrag = 'none';
  body.style.mozUserDrag = 'none';
  body.style.msUserDrag = 'none';
  for (let i = 0; i < mineFieldElements.length; i++) {
    document.getElementById(mineFieldElements[i]).style.display = 'none';
  }
  mineButton.style.backgroundColor = '#282B30';
  earnField.style.display = 'none'
  body.style.height = '100vh';
}

const levelProgression = [
  {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
  {level: 'lvl 1',updatePrice: 500,coinPerHour: 250},
  {level: 'lvl 2',updatePrice: 516,coinPerHour: 275},
  {level: 'lvl 3',updatePrice: 524,coinPerHour: 300},
  {level: 'lvl 4',updatePrice: 782,coinPerHour: 325},
  {level: 'lvl 5',updatePrice: 941,coinPerHour: 350},
  {level: 'lvl 6',updatePrice: 1100,coinPerHour: 375},
  {level: 'lvl 7', updatePrice: 1258,coinPerHour: 400},
  {level: 'lvl 8',updatePrice: 1417,coinPerHour: 425},
  {level: 'lvl 9',updatePrice: 1576, coinPerHour: 450},
  {level: 'lvl 10',updatePrice: 1735,coinPerHour: 475},
  {level: 'lvl 11',updatePrice: 1894,coinPerHour: 500},
  {level: 'lvl 12',updatePrice: 2052,coinPerHour: 525},
  {level: 'lvl 13', updatePrice: 2211,coinPerHour: 550},
  {level: 'lvl 14', updatePrice: 2370,coinPerHour: 575},
  {level: 'lvl 15',updatePrice: 2529,coinPerHour: 600}
];

const levelProgress = [
  {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
  {level: 'lvl 1', updatePrice: 500, coinPerHour: 250},
  {level: 'lvl 2', updatePrice: 516, coinPerHour: 275},
  {level: 'lvl 3', updatePrice: 524, coinPerHour: 300},
  {level: 'lvl 4', updatePrice: 782, coinPerHour: 325},
  {level: 'lvl 5', updatePrice: 941, coinPerHour: 350},
  {level: 'lvl 6', updatePrice: 1100, coinPerHour: 375},
  {level: 'lvl 7', updatePrice: 1258, coinPerHour: 400},
  {level: 'lvl 8', updatePrice: 1417, coinPerHour: 425},
  {level: 'lvl 9', updatePrice: 1576, coinPerHour: 450},
  {level: 'lvl 10', updatePrice: 1735, coinPerHour: 475},
  {level: 'lvl 11', updatePrice: 1894, coinPerHour: 500},
  {level: 'lvl 12', updatePrice: 2052, coinPerHour: 525},
  {level: 'lvl 13', updatePrice: 2211, coinPerHour: 550},
  {level: 'lvl 14', updatePrice: 2370, coinPerHour: 575},
  {level: 'lvl 15', updatePrice: 2529, coinPerHour: 600}
];




function adjustMineCards() {
  const telegramId = getTelegramId();
  postData('/getMineCardsInformation', {
    telegramId: telegramId
  })
  .then(data => {
    if (data.length != 0) {
      const information = Array.from(data)[0];
      showCurrentMineCards(information);
    }
  });
}


function showCurrentMineCards (information) {
  console.log('information');
  console.log(information)
  for (let i = 0; i < cardInfo.length; i++) {
    const cardId = cardInfo[i].cardId;
    const level = information[cardId];
    console.log(cardId, level)
    updateCardVisual(cardId, level)
  }
};

function updateCardVisual(cardId, level) {
  console.log(cardId)
  const card = cardInfo.find(card => card.cardId === cardId);
  console.log(card)
  const balance = card.infoModule;
  console.log(balance)
  const price = balance[level+1].updatePrice;
  const pph = balance[level].coinPerHour;
  const levelLabel = balance[level].level;

  document.getElementById(card.level).textContent = levelLabel;
  document.getElementById(card.pph).textContent = pph;
  document.getElementById(card.price).textContent = price;
};

document.getElementById('mainButtonCover').addEventListener('dragstart', function(event) {
  event.preventDefault();
});





/*
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
*/
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




function triggerHapticFeedback() {
  Telegram.WebApp.HapticFeedback.impactOccurred('light');
}

function hapticFeedback() {
  Telegram.WebApp.HapticFeedback.impactOccurred('medium');
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



function identifyIndex(coins) {
  if (coins < 100) return 0
  return coins.toString().length-2
}

document.getElementById('cardUpgradeBoxClose').addEventListener('click', ()=>{
  document.getElementById('cardUpgradeBox').style.display = 'none';
  unBlur()
});

// mine cards upgrade menu
document.getElementById('funTokensBox').addEventListener('click', function() {showCardUpgradeBox('funTokensBox')});
document.getElementById('stakingBox').addEventListener('click', function() {showCardUpgradeBox('stakingBox')});
document.getElementById('btcPairsBox').addEventListener('click', function() {showCardUpgradeBox('btcPairsBox')});
document.getElementById('ethPairsBox').addEventListener('click', function() {showCardUpgradeBox('ethPairsBox')});
document.getElementById('top10CMCBox').addEventListener('click', function() {showCardUpgradeBox('top10CMCBox')});
document.getElementById('gameFiBox').addEventListener('click', function() {showCardUpgradeBox('gameFiBox')});
document.getElementById('defiBox').addEventListener('click', function() {showCardUpgradeBox('defiBox')});
document.getElementById('socialFiBox').addEventListener('click', function() {showCardUpgradeBox('socialFiBox')});
document.getElementById('memeCoinsBox').addEventListener('click', function() {showCardUpgradeBox('memeCoinsBox')});
document.getElementById('shitCoinsBox').addEventListener('click', function() {showCardUpgradeBox('shitCoinsBox')});
document.getElementById('getUpgradeBox').addEventListener('click', updateCard)

function showCardUpgradeBox (cardId) {
  adjustCardsAvailability()
  blur()
  const coins = +getLeftCoins();
  const card = cardInfo.find(card => card.cardId === cardId);
  const balance = card.infoModule;
  const currentPPH = +document.getElementById(card.pph).textContent;
  const index = balance.findIndex(level => level.coinPerHour === currentPPH);
  const moneyData = balance[index+1];
  
  if (card.cardId == 'btcPairsBox' || card.cardId == 'socialFiBox' || card.cardId == 'defiBox' || card.cardId == 'memeCoinsBox') {
    document.getElementById('updateContainerPPH').style.top = '340px';
    document.getElementById('updateContainerPrice').style.top = '430px';
  } else {
    document.getElementById('updateContainerPPH').style.top = '320px';
    document.getElementById('updateContainerPrice').style.top = '400px';
  }

  if (coins >= +moneyData.updatePrice) {
    document.getElementById('getUpgradeBox').style.backgroundColor = '#A472D7'
    document.getElementById('getUpgradeBoxLabel').textContent = 'Get'
  } else {
    document.getElementById('getUpgradeBox').style.backgroundColor = '#454648'
    document.getElementById('getUpgradeBoxLabel').textContent = 'You do not have enough funds'
  }
  if (currentPPH !== 600){
    document.getElementById('cardUpgradeBoxImage').src = card.image;
    document.getElementById('cardUpgradeBoxLabel').textContent = card.label;
    document.getElementById('profitPerHourPrice').textContent = '+' + moneyData.coinPerHour;
    document.getElementById('upgradePriceLabel').textContent = moneyData.updatePrice;
    document.getElementById('cardUpgradeBox').style.display = 'block';
    document.getElementById('cardUpgradeBoxSubLabel1').textContent = card.description;
    document.getElementById('getUpgradeBox').setAttribute('data-value', cardId)
  }
}

function updateCard () {
  adjustCardsAvailability()
  const cardId = document.getElementById('getUpgradeBox').getAttribute('data-value');
  const card = cardInfo.find(card => card.cardId === cardId);
  const balance = card.infoModule;
  const currentPPH = +document.getElementById(card.pph).textContent;
  const index = balance.findIndex(level => level.coinPerHour === currentPPH) + 1;
  const moneyData = balance[index];

  const price = moneyData.updatePrice;
  const userCoins = +getLeftCoins();

  if (userCoins >= price){
    hapticFeedback();
    adjustCoinsVisual(userCoins - price);
    adjustCardsAvailability()
    postData('/updateCardLevel', {
      telegramId: getTelegramId(),
      cardId: cardId,
      level: +moneyData.level.slice(4)
    })
    .then(data => {});
    const prevPPH = +document.getElementById(card.pph).textContent;
    const newPPH = +balance[index].coinPerHour;
    const diff = newPPH - prevPPH;
    if (currentPPH != 575) {
      document.getElementById(card.level).textContent = moneyData.level;
      document.getElementById(card.price).textContent = balance[index+1].updatePrice;
      document.getElementById(card.pph).textContent = '+' + balance[index].coinPerHour;
      document.getElementById('passiveClicksLabel').setAttribute('data-value', +document.getElementById('passiveClicksLabel').getAttribute('data-value') + +diff);
      document.getElementById('passiveClicksLabel').innerHTML = encodePassiveLabel();
      document.getElementById('cardUpgradeBox').style.display = 'none';
      adjustCardsAvailability()
      unBlur()
      postData('/updatePPH', {
        telegramId: getTelegramId(),
        pph: +document.getElementById('passiveClicksLabel').getAttribute('data-value')
      })
      .then(data => {});
    } else{
      unBlur();
      document.getElementById(card.level).textContent = moneyData.level;
      document.getElementById(card.price).textContent = 'Completed';
      document.getElementById(card.pph).textContent = '+' + balance[index].coinPerHour;
      document.getElementById('passiveClicksLabel').setAttribute('data-value', +document.getElementById('passiveClicksLabel').getAttribute('data-value'));
      document.getElementById('passiveClicksLabel').innerHTML = encodePassiveLabel();
      document.getElementById('cardUpgradeBox').style.display = 'none';
      adjustCardsAvailability()
      postData('/updatePPH', {
        telegramId: getTelegramId(),
        pph: +document.getElementById('passiveClicksLabel').getAttribute('data-value')
      })
      .then(data => {
        adjustCardsAvailability()
      });
    }
  } 
}

// get daily reward menu
function getCurrentDatee () {
  const currentDate = new Date();

  const year = String(currentDate.getFullYear()).slice(-2); // Last two digits of the year
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
document.getElementById('dailyRewardsWindowClose').addEventListener('click', function () {
  document.getElementById('dailyRewardsWindow').style.display = 'none';
  unBlur()
});

document.getElementById('earnFieldDailyRewardDiv').addEventListener('click', showDailyRewardsWindow);

function showDailyRewardsWindow () {
  dailyRewards();
  document.getElementById('dailyRewardsWindow').style.display = 'block';
  blur()
}

const dailyRewardsBegining = {
  "ID": undefined,"telegramId": getTelegramId(),
  "day1_claimed": "false","day1_date": "false",
  "day2_claimed": "false","day2_date": "false",
  "day3_claimed": "false","day3_date": "false",
  "day4_claimed": "false","day4_date": "false",
  "day5_claimed": "false","day5_date": "false",
  "day6_claimed": "false","day6_date": "false",
  "day7_claimed": "false","day7_date": "false",
  "day8_claimed": "false","day8_date": "false",
  "day9_claimed": "false","day9_date": "false",
  "day10_claimed": "false","day10_date": "false"
};

function dailyRewards() {
  postData('/getDailyRewardsState', {
    telegramId: getTelegramId(),
  })
  .then(data => {
    let dailyRewData;
    if (data.length != 0) {
      const information = Array.from(data)[0];
      dailyRewData = information;
    } else { dailyRewData = dailyRewardsBegining }
    modifyDailyRewardsWindow(dailyRewData);
  });
};

function modifyDailyRewardsWindow (data) {
  document.getElementById('dailyRewLabel').style.color = 'white';
  document.getElementById('dailyRewMoney').style.color = 'white';
  document.getElementById('doneImage').style.display = 'none'
  console.log(data)
  for (let i = 2; i < 12; i++) {
    if (data[`day${i-2}_claimed`] == 'true') {
      document.getElementById(`dailyRewardsWindowDay${i-2}`).style.background = 'linear-gradient(to bottom, #A472D7, #7C59A0, #6D4C8E)';
      document.getElementById(`dailyRewardsWindowDay${i-2}`).style.boxShadow = 'inset 0 0 0 0px #A472D7';
      document.getElementById(`dailyRewardsWindowDay${i-2}`).style.opacity = '100';
      continue;
    } else if (data[`day${i-2}_claimed`] == 'false'){
        if (data[`day${i-3}_date`] != getCurrentDatee()) {
          document.getElementById(`dailyRewardsWindowDay${i-2}`).style.boxShadow = 'inset 0 0 0 2px #A472D7';
          document.getElementById(`dailyRewardsWindowDay${i-2}`).style.opacity = '100';
          document.getElementById('dailyRewardsGet').setAttribute('data-value', i-2)
        } else {
          document.getElementById('dailyRewardsGet').style.backgroundColor = '#454648';
          document.getElementById('dailyRewardsGetLabel').innerHTML = 'Come back tomorrow';
          document.getElementById('dailyRewardsGet').removeEventListener('click', getDailyRewards);
          document.getElementById('dailyRewardsGet').setAttribute('data-value', 0);
          document.getElementById('dailyRewLabel').style.color = '#888888';
          document.getElementById('dailyRewMoney').style.color = '#888888';
          document.getElementById('doneImage').style.display = 'block'
        }
      break;
    }
  }
};

document.getElementById('dailyRewardsGet').addEventListener('click', getDailyRewards);

function getDailyRewards() {
  const i = +document.getElementById('dailyRewardsGet').getAttribute('data-value');
  postData('/updateDailyRewards', {
    telegramId: getTelegramId(),
    day: i,
    date: getCurrentDatee()
  })
  .then(data => {
    hapticFeedback();
    const money = [500 , 1000, 2500, 5000, 15000, 25000, 100000, 500000, 1000000, 5000000]
    document.getElementById('dailyRewardsWindow').style.display = 'none';
    adjustCoinsVisual(+getLeftCoins() + money[i == 0 ? 0 : i-1])
    dailyRewards()
    unBlur();
  });
};

// referral system
document.getElementById('inviteFriendDiv').addEventListener('click', ()=>{
  hapticFeedback();
  const shareUrl = `https://t.me/share/url?url=https%3A%2F%2Ft.me/clicker_test_test_bot?start=${getTelegramId()}&text=Join%20this%20game!`;

    Telegram.WebApp.openTelegramLink(shareUrl);
});

document.getElementById('inviteFriendCopyDiv').addEventListener('click', ()=>{
  hapticFeedback();
  navigator.clipboard.writeText(`https://t.me/share/url?url=https%3A%2F%2Ft.me/clicker_test_test_bot?start=${getTelegramId()}&text=Join%20this%20game!`);
            
  Telegram.WebApp.showPopup({
      message: 'Link copied to clipboard!',
      buttons: [{ type: 'ok', text: 'OK' }]
  });

});

// double click fix
document.addEventListener('dblclick', function(event) {
  event.preventDefault();
}, { passive: false });

document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
      event.preventDefault();
  }
}, { passive: false });

// passive clicks calculation
let passiveCounter = 0;
setInterval(()=>{
  const pph = +document.getElementById('passiveClicksLabel').getAttribute('data-value');
  const value = pph / 3600;
  passiveCounter += value;
  if (passiveCounter >= 1) {
    const wholePart = Math.floor(passiveCounter);
    const smallPart = passiveCounter - wholePart;
    passiveCounter = smallPart;
    adjustCoinsVisual(+getLeftCoins() + wholePart);
  }
}, 1000)

function showPassiveMining(time) {
  const telegramId = getTelegramId();
  postData('/getPPHInfo', {
    telegramId: telegramId
  })
  .then(data => {
    if (data && data.length!=0) {
      console.log('hello')
      console.log(data)
      const info = Array.from(data)[0];
      document.getElementById('passiveClicksLabel').setAttribute('data-value', info.profitPerHour);
      document.getElementById('passiveClicksLabel').innerHTML = encodePassiveLabel();
      const pph = info.profitPerHour / 3600;
      const difference = getTimeInSeconds(getCurrentTime()) - getTimeInSeconds(time);
      console.log(difference)
      if (difference >= 10 && difference <= 10800){
        const passiveProfit = Math.floor(pph * difference);
        console.log(passiveProfit)
        showPassiveMiningPopUp(passiveProfit)
      }
    }
  });
};

function getTimeInSeconds (time) {
  let date = new Date(time);
  return date.getTime() / 1000;
}

function showPassiveMiningPopUp(text){
  document.getElementById('passiveIncomePopUp').style.display = 'block';
  document.getElementById('passivePopUpLabel').textContent = text;
  blur();
}

function unBlur(){
  document.getElementById('blurCover').style.display = 'none';
}

function blur(){
  document.getElementById('blurCover').style.display = 'block';
}

document.getElementById('closeImage1').addEventListener('click', ()=>{
  document.getElementById('passiveIncomePopUp').style.display = 'none';
  unBlur();
});

document.getElementById('thanksFunticoLabel').addEventListener('click', ()=>{
  const money = +document.getElementById('passivePopUpLabel').textContent;
  adjustCoinsVisual(+getLeftCoins() + money);
  document.getElementById('passiveIncomePopUp').style.display = 'none';
  unBlur();
});

//shadow tracking
document.getElementById('scroll').addEventListener('scroll', ()=>{
  const scrollableDiv = document.getElementById('scroll');
  const scrollTop = scrollableDiv.scrollTop;
  const scrollHeight = scrollableDiv.scrollHeight;
  const clientHeight = scrollableDiv.clientHeight;
  const scrolledPercentage = Math.floor((scrollTop / (scrollHeight - clientHeight))*100)/100;
    document.getElementById('menuShadow').style.background = `background: linear-gradient(to bottom, rgba(28, 31, 36, 0) 0%, rgba(28, 31, 36, ${0.75-scrolledPercentage+0.05}) 52%, rgba(28, 31, 36, ${0.75-scrolledPercentage+0.05}) 100%)`;
    document.getElementById('menuShadow').style.top = `${650+scrolledPercentage*50}px`;
    document.getElementById('menuShadow').style.height = `${345-scrolledPercentage*50}px`;
})


function adjustDotMargin(status, dot, coin, money){
  const margin = dotMargins.find(margin => margin.status === status);
  dot.style.marginLeft = margin.margin + 'px';
  coin.style.marginLeft = (margin.margin + 9) + 'px';
  money.style.marginLeft = (margin.margin + 31) + 'px';
}

function encodePassiveLabel () {
  const number = getPassiveLabel();
  if (number >= 1000000) {
    // Handle millions
    return (number / 1000000).toFixed(3).replace('.', ',') + 'M';
} else if (number >= 1000) {
    // Handle thousands
    return (number / 1000).toFixed(2).replace('.', ',') + 'K';
}
// Handle numbers less than 1000
return number.toString();
}

function getPassiveLabel () {
  return +document.getElementById('passiveClicksLabel').getAttribute('data-value');
}