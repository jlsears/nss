
var basicCarModule = {
  
  color: "blue",
  size: "Sedan",

  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
    leatherSeats: true,
    heatedSeats: true,
    underLighting: false
  }

},

setSpoilerOption: function (spoiler) {
  this.options.spoiler = spoiler;
},

setColor: function (color) {
  this.color = color;
},

setOptions: function (options) {
  this.options = options;
}


console.log("basicCarModule", basicCarModule);

basicCarModule.setColor("green");

console.log("basicCarModule", basicCarModule);

