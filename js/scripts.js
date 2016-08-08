var gallonsToLiters = function(gallons) {
  return(gallons*3.785411784);
};

var gallons = parseInt(prompt("Enter the amount of gallons to be converted to liters"))

alert(gallonsToLiters(gallons));
