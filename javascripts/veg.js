var SandwichMaker = (function(maker) {

  var vegPrices = {
  	"lettuce": 0.25,
  	"tomato": .25,
  	"onion": .35,
  	"pickles": .45,
  	"olives": .35
  };

  maker.addVeg = function(selected) {
    return vegPrices[selected];
  };

  maker.getVegList = function() {
  	return Object.keys(vegPrices);
  };

  let vegBoxes = '';
  maker.vegBoxesMkr = function() {
  	let vegOptions = maker.getVegList();
  	vegOptions.forEach(function(element) {
  		vegBoxes += `<input type="checkbox" id="${element}" name="veggies" value="${element}">
			<label for="${element}">${element}</label>`
  	});
  	return vegBoxes;
  }
  return maker;
})(SandwichMaker || {});