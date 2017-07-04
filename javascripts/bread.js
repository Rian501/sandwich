var SandwichMaker = (function(maker) {

  var breadPrices = {
	"wheat": 0.50,
	"white": 0.35,
	"honey wheat": 0.75,
	"rye": 0.80,
	"bagel": 0.95,
	"lettuce wrap": .90
  };

  maker.getBreadList = function () {
		return Object.keys(breadPrices);
	}
  maker.addBread = function(selected) {
    return breadPrices[selected]
  };

	let breadBoxes = ''
	maker.breadBoxMkr = function() {
	  let breadOptions = SandwichMaker.getBreadList();
	  breadOptions.forEach(function(element) {
			breadBoxes += `<input type="checkbox" id="${element}" name="bread" value="${element}">
			<label for="${element}">${element}</label>`
		});
	  return breadBoxes;
	}
  return maker;
})(SandwichMaker || {})