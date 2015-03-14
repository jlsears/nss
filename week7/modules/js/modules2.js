


//IIFE
//Immediately invoked function expression


var module = (function () {
    var color = "blue";

    return {
        a: 1,
        getColor: function () {
            return color;
        },
        setColor: function (newColor) {
            color = newColor;
        }
    };
    
}) ();


module.setColor("green");
console.log(module.getColor());