const axios = require("axios");

const getAll = () => {
  axios
    .get("https://haseeb-apis.herokuapp.com/api/person")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const getOne = (id) => {
  axios
    .get("https://haseeb-apis.herokuapp.com/api/person/" + id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const post = (data) => {
  axios
    .post("https://haseeb-apis.herokuapp.com/api/person/", data)
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
    });
};
const put = (id, data) => {
  axios
    .put("https://haseeb-apis.herokuapp.com/api/person/" + id, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const deleteOne = (id) => {
  axios
    .delete("https://haseeb-apis.herokuapp.com/api/person/" + id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// deleteOne("62239eeb9cc5dabfe86128e9");
// getAll();
// getOne("62239eeb9cc5dabfe86128e9");
// put("621e0cc5560cbb53880559b8", { name: "newMumtaz" });
post({
  name: "Akram",
  age: 22,
  gender: true,
  city: "lahore",
});
