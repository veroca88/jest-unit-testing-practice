const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isFalsy: () => null,
  checkValue: (x) => x,
  creatUser: () => {
    const user = { firstName: "Vero" };
    user["lastName"] = "Donoso";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
