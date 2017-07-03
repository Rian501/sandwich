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

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addMeat(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
});


breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addBread(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addCheese(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
});

condChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addCond(selectedTopping);
	SandwichMaker.addTopping(selectedToppingPrice);
})