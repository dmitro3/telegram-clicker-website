var myModule = (function() {
    var privateVariable = 'Hello, world!';
    
    return {
        getVariable: function() {
            return privateVariable;
        }
    };
})();
/*
    var values = [
        {level: 'lvl 0', updatePrice: 0, coinPerHour: 0},
        {level: 'lvl 1', updatePrice: , coinPerHour: },
        {level: 'lvl 2', updatePrice: , coinPerHour: },
        {level: 'lvl 3', updatePrice: , coinPerHour: },
        {level: 'lvl 4', updatePrice: , coinPerHour: },
        {level: 'lvl 5', updatePrice: , coinPerHour: },
        {level: 'lvl 6', updatePrice: , coinPerHour: },
        {level: 'lvl 7', updatePrice: , coinPerHour: },
        {level: 'lvl 8', updatePrice: , coinPerHour: },
        {level: 'lvl 9', updatePrice: , coinPerHour: },
        {level: 'lvl 10', updatePrice: , coinPerHour: },
        {level: 'lvl 11', updatePrice: , coinPerHour: },
        {level: 'lvl 12', updatePrice: , coinPerHour: },
        {level: 'lvl 13', updatePrice: , coinPerHour: },
        {level: 'lvl 14', updatePrice: , coinPerHour: },
        {level: 'lvl 15', updatePrice: , coinPerHour: }
      ];
*/
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