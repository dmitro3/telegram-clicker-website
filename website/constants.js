var myModule = (function() {
    var privateVariable = 'Hello, world!';
    
    return {
        getVariable: function() {
            return privateVariable;
        }
    };
})();


//Mine Cards Constants
    //Fun Tokens Box
    var funTokensBoxModule = (function() {
        var values = [
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
        
        return {
            getData: function() {
                return privateVariable;
            }
        };
    })();