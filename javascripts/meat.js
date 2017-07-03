var SandwichMaker = (function(maker) {
  var meatPrices = {
	"bacon": 1.15,
	"turkey": 1,
	"ham": 0.90,
	"roast beef": 1.10,
	"chicken": 0.85
  };

  maker.getMeatList = function () {
	return Object.keys(meatPrices);
  }
  maker.addMeat = function(selectedTopping) {
    return meatPrices[selectedTopping];
  };

	let meatBoxes = ''
	maker.meatBoxesMkr = function() {
	  let meatOptions = SandwichMaker.getMeatList();
		meatOptions.forEach(function(element) {
		meatBoxes += `<input type="checkbox" id="${element}" name="meat" value="${element}">
			<label for="${element}">${element}</label>`
		});
		return meatBoxes;
	}
  return maker;
})(SandwichMaker || {});

