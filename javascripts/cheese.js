var SandwichMaker = (function(maker) {

  var cheesePrices = {
	"Swiss": 0.50,
	"American": 0.45,
	"cheddar": 0.75,
	"sharp cheddar": 0.85,
	"gouda": 0.90,
	"provolone": 0.65
  };

  maker.getCheeseList = function () {
  	return Object.keys(cheesePrices);
  }

  maker.addCheese = function(selectedTopping) {
    return cheesePrices[selectedTopping];
  };

	let cheeseBoxes = ''
	maker.cheeseBoxesMkr = function() {
		let cheeseOptions = SandwichMaker.getCheeseList();
		console.log("cheese Option", cheeseOptions);
		cheeseOptions.forEach(function(element) {
			cheeseBoxes += `<input type="checkbox" id="${element}" name="cheese" value="${element}">
			<label for="${element}">${element}</label>`
		});
		return cheeseBoxes;
	}
  return maker;
})(SandwichMaker || {});