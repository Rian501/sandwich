var finalSandwichPrice = 0;
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
let meatOptions = SandwichMaker.getMeatList();
console.log("meat options?", meatOptions);
let meatBoxes = ''
console.log("meat boxes?", meatBoxes);
for (let i=0; i < meatOptions.length; i++) {
	meatBoxes += `<input type="checkbox" id="${meatOptions[i]}" name="meat" value="${meatOptions[i]}">
	<label for="${meatOptions[i]}">${meatOptions[i]}</label>`
};
console.log("meat boxes?", meatBoxes);
meatChooser.innerHTML += meatBoxes;


meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  let selectedToppingPrice = SandwichMaker.addMeat(selectedTopping);
  console.log(selectedToppingPrice);
  SandwichMaker.addTopping(selectedToppingPrice);
});