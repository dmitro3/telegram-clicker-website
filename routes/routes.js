const express = require('express');

const updateGameData = require('./updateGameData');
const getGameData = require('./getGameData');
const addReferral = require('./addReferral');
const getReferrals = require('./getReferrals');
const addUserInformation = require('./addUserInformation');
const getUserInformation = require('./getUserInformation');
const verifyReferral = require('./verifyReferral');
const getDailyRewardsState = require('./getDailyRewardsState');
const updateDailyRewards = require('./updateDailyRewards');
const getMineCardsInformation = require('./getMineCardsInformation');
const updateCardLevel = require('./updateCardLevel');
const getPPHInfo = require('./getPPHInfo');
const updatePPH = require('./updatePPH');

module.exports = (app) => {
  app.use('/updateGameData', updateGameData); //done
  app.use('/getGameData', getGameData); //done

  app.use('/addReferral', addReferral); //done
  app.use('/getReferrals', getReferrals); //done
  app.use('/verifyReferral', verifyReferral); //done

  app.use('/addUserInformation', addUserInformation);//done
  app.use('/getUserInformation', getUserInformation);//done

  app.use('/getDailyRewardsState', getDailyRewardsState);//done
  app.use('/updateDailyRewards', updateDailyRewards);//done

  app.use('/getMineCardsInformation', getMineCardsInformation);
  app.use('/updateCardLevel', updateCardLevel);

  app.use('/getPPHInfo', getPPHInfo);
  app.use('/updatePPH', updatePPH);
};