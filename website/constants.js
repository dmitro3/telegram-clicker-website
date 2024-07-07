//Mine Cards Constants
    //Fun Tokens Box
    var funTokensBoxModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 500, coinPerHour: 50},
            {level: 'lvl 2', updatePrice: 550, coinPerHour: 55},
            {level: 'lvl 3', updatePrice: 631, coinPerHour: 63},
            {level: 'lvl 4', updatePrice: 782, coinPerHour: 78},
            {level: 'lvl 5', updatePrice: 941, coinPerHour: 94},
            {level: 'lvl 6', updatePrice: 1100, coinPerHour: 110},
            {level: 'lvl 7', updatePrice: 1258, coinPerHour: 126},
            {level: 'lvl 8', updatePrice: 1417, coinPerHour: 142},
            {level: 'lvl 9', updatePrice: 1576, coinPerHour: 158},
            {level: 'lvl 10', updatePrice: 1735, coinPerHour: 173},
            {level: 'lvl 11', updatePrice: 1894, coinPerHour: 189},
            {level: 'lvl 12', updatePrice: 2052, coinPerHour: 205},
            {level: 'lvl 13', updatePrice: 2211, coinPerHour: 221},
            {level: 'lvl 14', updatePrice: 2370, coinPerHour: 237},
            {level: 'lvl 15', updatePrice: 2529, coinPerHour: 253}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //Staking Box
    var stakingBoxModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 756, coinPerHour: 76},
            {level: 'lvl 2', updatePrice: 830, coinPerHour: 83},
            {level: 'lvl 3', updatePrice: 1276, coinPerHour: 128},
            {level: 'lvl 4', updatePrice: 1660, coinPerHour: 166},
            {level: 'lvl 5', updatePrice: 2044, coinPerHour: 204},
            {level: 'lvl 6', updatePrice: 2428, coinPerHour: 243},
            {level: 'lvl 7', updatePrice: 2812, coinPerHour: 281},
            {level: 'lvl 8', updatePrice: 3196, coinPerHour: 320},
            {level: 'lvl 9', updatePrice: 3580, coinPerHour: 358},
            {level: 'lvl 10', updatePrice: 3964, coinPerHour: 396},
            {level: 'lvl 11', updatePrice: 4348, coinPerHour: 435},
            {level: 'lvl 12', updatePrice: 4732, coinPerHour: 473},
            {level: 'lvl 13', updatePrice: 5116, coinPerHour: 512},
            {level: 'lvl 14', updatePrice: 5500, coinPerHour: 550},
            {level: 'lvl 15', updatePrice: 5884, coinPerHour: 588}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
     //BTC Pairs
    var btcPairsModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 865, coinPerHour: 87},
            {level: 'lvl 2', updatePrice: 930, coinPerHour: 93},
            {level: 'lvl 3', updatePrice: 1455, coinPerHour: 146},
            {level: 'lvl 4', updatePrice: 1893, coinPerHour: 189},
            {level: 'lvl 5', updatePrice: 2330, coinPerHour: 233},
            {level: 'lvl 6', updatePrice: 2768, coinPerHour: 277},
            {level: 'lvl 7', updatePrice: 3205, coinPerHour: 321},
            {level: 'lvl 8', updatePrice: 3643, coinPerHour: 364},
            {level: 'lvl 9', updatePrice: 4080, coinPerHour: 408},
            {level: 'lvl 10', updatePrice: 4518, coinPerHour: 452},
            {level: 'lvl 11', updatePrice: 4955, coinPerHour: 496},
            {level: 'lvl 12', updatePrice: 5393, coinPerHour: 539},
            {level: 'lvl 13', updatePrice: 5830, coinPerHour: 583},
            {level: 'lvl 14', updatePrice: 6268, coinPerHour: 627},
            {level: 'lvl 15', updatePrice: 6705, coinPerHour: 671}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //ETH Pairs
    var ethPairsModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 974, coinPerHour: 97},
            {level: 'lvl 2', updatePrice: 1203, coinPerHour: 120},
            {level: 'lvl 3', updatePrice: 1635, coinPerHour: 164},
            {level: 'lvl 4', updatePrice: 2127, coinPerHour: 213},
            {level: 'lvl 5', updatePrice: 2618, coinPerHour: 262},
            {level: 'lvl 6', updatePrice: 3110, coinPerHour: 311},
            {level: 'lvl 7', updatePrice: 3601, coinPerHour: 360},
            {level: 'lvl 8', updatePrice: 4093, coinPerHour: 409},
            {level: 'lvl 9', updatePrice: 4584, coinPerHour: 458},
            {level: 'lvl 10', updatePrice: 5076, coinPerHour: 508},
            {level: 'lvl 11', updatePrice: 5567, coinPerHour: 557},
            {level: 'lvl 12', updatePrice: 6059, coinPerHour: 606},
            {level: 'lvl 13', updatePrice: 6550, coinPerHour: 655},
            {level: 'lvl 14', updatePrice: 7042, coinPerHour: 704},
            {level: 'lvl 15', updatePrice: 7533, coinPerHour: 753}
        ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //CMC Tokens
    var cmcModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 1100, coinPerHour: 110},
            {level: 'lvl 2', updatePrice: 1450, coinPerHour: 145},
            {level: 'lvl 3', updatePrice: 1863, coinPerHour: 186},
            {level: 'lvl 4', updatePrice: 2424, coinPerHour: 242},
            {level: 'lvl 5', updatePrice: 2985, coinPerHour: 298},
            {level: 'lvl 6', updatePrice: 3546, coinPerHour: 355},
            {level: 'lvl 7', updatePrice: 4107, coinPerHour: 411},
            {level: 'lvl 8', updatePrice: 4668, coinPerHour: 467},
            {level: 'lvl 9', updatePrice: 5229, coinPerHour: 523},
            {level: 'lvl 10', updatePrice: 5790, coinPerHour: 579},
            {level: 'lvl 11', updatePrice: 6351, coinPerHour: 635},
            {level: 'lvl 12', updatePrice: 6912, coinPerHour: 691},
            {level: 'lvl 13', updatePrice: 7473, coinPerHour: 747},
            {level: 'lvl 14', updatePrice: 8034, coinPerHour: 803},
            {level: 'lvl 15', updatePrice: 8595, coinPerHour: 859}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //GameFi Coins
    var gameModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 1500, coinPerHour: 150},
            {level: 'lvl 2', updatePrice: 1740, coinPerHour: 174},
            {level: 'lvl 3', updatePrice: 2529, coinPerHour: 253},
            {level: 'lvl 4', updatePrice: 3290, coinPerHour: 329},
            {level: 'lvl 5', updatePrice: 4051, coinPerHour: 405},
            {level: 'lvl 6', updatePrice: 4812, coinPerHour: 481},
            {level: 'lvl 7', updatePrice: 5573, coinPerHour: 557},
            {level: 'lvl 8', updatePrice: 6334, coinPerHour: 633},
            {level: 'lvl 9', updatePrice: 7095, coinPerHour: 710},
            {level: 'lvl 10', updatePrice: 7856, coinPerHour: 786},
            {level: 'lvl 11', updatePrice: 8617, coinPerHour: 862},
            {level: 'lvl 12', updatePrice: 9378, coinPerHour: 938},
            {level: 'lvl 13', updatePrice: 10139, coinPerHour: 1014},
            {level: 'lvl 14', updatePrice: 10900, coinPerHour: 1090},
            {level: 'lvl 15', updatePrice: 11661, coinPerHour: 1166}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //Defi2.0 Coins
    var defiModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 2000, coinPerHour: 200},
            {level: 'lvl 2', updatePrice: 2560, coinPerHour: 256},
            {level: 'lvl 3', updatePrice: 3380, coinPerHour: 338},
            {level: 'lvl 4', updatePrice: 4398, coinPerHour: 440},
            {level: 'lvl 5', updatePrice: 5415, coinPerHour: 542},
            {level: 'lvl 6', updatePrice: 6433, coinPerHour: 643},
            {level: 'lvl 7', updatePrice: 7450, coinPerHour: 745},
            {level: 'lvl 8', updatePrice: 8468, coinPerHour: 847},
            {level: 'lvl 9', updatePrice: 9485, coinPerHour: 949},
            {level: 'lvl 10', updatePrice: 10503, coinPerHour: 1050},
            {level: 'lvl 11', updatePrice: 11520, coinPerHour: 1152},
            {level: 'lvl 12', updatePrice: 12538, coinPerHour: 1254},
            {level: 'lvl 13', updatePrice: 13555, coinPerHour: 1356},
            {level: 'lvl 14', updatePrice: 14573, coinPerHour: 1457},
            {level: 'lvl 15', updatePrice: 15590, coinPerHour: 1559}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //SocialFi Coins
    var socialModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 2250, coinPerHour: 225},
            {level: 'lvl 2', updatePrice: 2890, coinPerHour: 289},
            {level: 'lvl 3', updatePrice: 3789, coinPerHour: 379},
            {level: 'lvl 4', updatePrice: 4928, coinPerHour: 493},
            {level: 'lvl 5', updatePrice: 6068, coinPerHour: 607},
            {level: 'lvl 6', updatePrice: 7207, coinPerHour: 721},
            {level: 'lvl 7', updatePrice: 8347, coinPerHour: 835},
            {level: 'lvl 8', updatePrice: 9486, coinPerHour: 949},
            {level: 'lvl 9', updatePrice: 10626, coinPerHour: 1063},
            {level: 'lvl 10', updatePrice: 11765, coinPerHour: 1177},
            {level: 'lvl 11', updatePrice: 12905, coinPerHour: 1290},
            {level: 'lvl 12', updatePrice: 14044, coinPerHour: 1404},
            {level: 'lvl 13', updatePrice: 15184, coinPerHour: 1518},
            {level: 'lvl 14', updatePrice: 16323, coinPerHour: 1632},
            {level: 'lvl 15', updatePrice: 17463, coinPerHour: 1746}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //Meme Tokens
    var memeModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 2600, coinPerHour: 260},
            {level: 'lvl 2', updatePrice: 3450, coinPerHour: 345},
            {level: 'lvl 3', updatePrice: 4424, coinPerHour: 442},
            {level: 'lvl 4', updatePrice: 5758, coinPerHour: 576},
            {level: 'lvl 5', updatePrice: 7092, coinPerHour: 709},
            {level: 'lvl 6', updatePrice: 8426, coinPerHour: 843},
            {level: 'lvl 7', updatePrice: 9760, coinPerHour: 976},
            {level: 'lvl 8', updatePrice: 11094, coinPerHour: 1109},
            {level: 'lvl 9', updatePrice: 12428, coinPerHour: 1243},
            {level: 'lvl 10', updatePrice: 13762, coinPerHour: 1376},
            {level: 'lvl 11', updatePrice: 15096, coinPerHour: 1510},
            {level: 'lvl 12', updatePrice: 16430, coinPerHour: 1643},
            {level: 'lvl 13', updatePrice: 17764, coinPerHour: 1776},
            {level: 'lvl 14', updatePrice: 19098, coinPerHour: 1910},
            {level: 'lvl 15', updatePrice: 20432, coinPerHour: 2043}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //Shit Tokens
    var shitModule = (function() {
        var values = [
            {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
            {level: 'lvl 1', updatePrice: 3500, coinPerHour: 350},
            {level: 'lvl 2', updatePrice: 4890, coinPerHour: 489},
            {level: 'lvl 3', updatePrice: 6167, coinPerHour: 617},
            {level: 'lvl 4', updatePrice: 8042, coinPerHour: 804},
            {level: 'lvl 5', updatePrice: 9917, coinPerHour: 992},
            {level: 'lvl 6', updatePrice: 11792, coinPerHour: 1179},
            {level: 'lvl 7', updatePrice: 13667, coinPerHour: 1367},
            {level: 'lvl 8', updatePrice: 15542, coinPerHour: 1554},
            {level: 'lvl 9', updatePrice: 17417, coinPerHour: 1742},
            {level: 'lvl 10', updatePrice: 19292, coinPerHour: 1929},
            {level: 'lvl 11', updatePrice: 21167, coinPerHour: 2117},
            {level: 'lvl 12', updatePrice: 23042, coinPerHour: 2304},
            {level: 'lvl 13', updatePrice: 24917, coinPerHour: 2492},
            {level: 'lvl 14', updatePrice: 26792, coinPerHour: 2679},
            {level: 'lvl 15', updatePrice: 28667, coinPerHour: 2867}
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();
    //Daily Rewards
    var dailyRewardsMoney = (function() {
        var values = [
            { 1: 500 },
            { 2: 1000 },
            { 3: 2500 },
            { 4: 5000 },
            { 5: 15000 },
            { 6: 25000 },
            { 7: 100000 },
            { 8: 500000 },
            { 9: 1000000 },
            { 10: 5000000 }
          ];
        
        return {
            getData: function() {
                return values;
            }
        };
    })();