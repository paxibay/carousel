var ridingsFake = require('./model.ridings');

module.exports = (function (ridingsFake) {
  
  var ridingsList = function myFunction() {
    return ridingsFake;
  };

  var ridingsReadOne = function myFunction(index) {
    return ridingsFake[index];
  };
  
  return {
    ridingsList: ridingsList,
    ridingsReadOne: ridingsReadOne
  }

})(ridingsFake);



