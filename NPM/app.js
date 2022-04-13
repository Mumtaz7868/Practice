const sum = require("./sum");
const { sub, div } = require("./calculator");
const axios = require("axios");
console.log(sum(9, 10));
console.log(sub(9, 10));
console.log(div(9, 10));

axios
  .get("https://haseeb-apis.herokuapp.com/api/person")
  .then((response) => {
    console.log(response.data);
  })

  .catch((error) => {
    console.log(error.message);
  });
