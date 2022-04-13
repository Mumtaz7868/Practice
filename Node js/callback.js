function makePizza(flavour, callback) {
  console.log("orderd recieved");
  console.log("preparing pizza");
  setTimeout(function () {
    callback(flavour + "pizza");
  }, 1000);
}
function handlePizza(pizza) {
  console.log("eating " + pizza);
}
makePizza("Tikka", handlePizza);
console.log("pizza orderd");
