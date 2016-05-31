var gallons = parseInt(prompt("How many gallons?"));
//var liters = parseInt(prompt("How many liters?"));

var calcLiters = function(gallons) {return gallons / 0.26417};

alert("Liters: " + calcLiters(gallons));
