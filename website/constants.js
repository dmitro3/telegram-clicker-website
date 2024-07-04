// script1.js
var myModule = (function() {
    var privateVariable = 'Hello, world!';
    
    // Return an object exposing the getVariable function
    return {
        getVariable: function() {
            return privateVariable;
        }
    };
})();