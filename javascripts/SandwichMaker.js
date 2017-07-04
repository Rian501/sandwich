var SandwichMaker = (function(maker) {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
    maker.addTopping = function(toppingPrice) {
      totalPrice += toppingPrice;
      return totalPrice;
    };

    maker.returnTotal = function() {
    	return totalPrice;
    }
  return maker;
})(SandwichMaker || {});