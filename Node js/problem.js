function makePizza(flavour) {
  setTimeout(function () {
    console.log("preparing pizza");
    return "prepared" + flavour + "pizza";
  }, 1000);
  return "orderd recieved " + flavour + "Pizza";
}

console.log(makePizza("Tikka"));
