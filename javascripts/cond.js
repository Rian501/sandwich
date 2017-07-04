var SandwichMaker = (function(maker) {

  var condimentPrices = {
	"ketchup": 2.00,
	"mayo": 1.00,
	"mustard": 1.50,
	"dijon": 1.75,
	"relish": 1.65
  };

  maker.addCond = function(selected) {
    return condimentPrices[selected];
  };

  maker.getCondList = function () {
  	return Object.keys(condimentPrices);
  }

  let condBoxes = ''
  maker.condBoxesMkr = function() {
  	let condOptions = maker.getCondList();
  	condOptions.forEach(function(element) {
  		condBoxes += `<input type="checkbox" id="${element}" name="condiment" value="${element}">
			<label for="${element}">${element}</label>`
  	});
  	return condBoxes;
  }

  return maker;
})(SandwichMaker || {});