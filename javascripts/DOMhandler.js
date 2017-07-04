var finalSandwichPrice = 0;
var selectedTopping;

var meatChooser = document.getElementById("meat-chooser");
meatChooser.innerHTML = SandwichMaker.meatBoxesMkr();


var breadChooser = document.getElementById("bread-chooser");
breadChooser.innerHTML += SandwichMaker.breadBoxMkr();;


var cheeseChooser = document.getElementById("cheese-chooser");
cheeseChooser.innerHTML += SandwichMaker.cheeseBoxesMkr();

var condChooser = document.getElementById("cond-chooser");
condChooser.innerHTML += SandwichMaker.condBoxesMkr();

var vegChooser = document.getElementById("veg-chooser");
vegChooser.innerHTML += SandwichMaker.vegBoxesMkr();

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addMeat(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
  displayPrice ();
});

vegChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addVeg(selectedTopping);
	SandwichMaker.addTopping(selectedToppingPrice);
		displayPrice ();

})


breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addBread(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
  	displayPrice ();

});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addCheese(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
  	displayPrice ();

});

condChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addCond(selectedTopping);
	SandwichMaker.addTopping(selectedToppingPrice);
	displayPrice ();
})


function displayPrice () {
	priceOutput = document.getElementById("outputPrice");
	priceToDisplay = SandwichMaker.returnTotal();
	priceToDisplay = priceToDisplay.toFixed(2);
	console.log("total?", SandwichMaker.returnTotal());
	priceOutput.innerHTML = `<h3>$${priceToDisplay}</h3>`;

}
