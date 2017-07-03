var SandwichMaker = (function(maker) {
  var meatPrices = {
	"bacon": 1.15,
	"turkey": 1,
	"ham": 0.90,
	"roast beef": 1.10,
	"chicken": 0.85
  };

  maker.getMeatList = function () {
		console.log("meat prices", meatPrices);
		console.log("object keys thereof", Object.keys(meatPrices));
		return Object.keys(meatPrices);
		}
  maker.addMeat = function(selectedTopping) {
    return meatPrices[selectedTopping];
  };

  return maker;
})(SandwichMaker || {});

