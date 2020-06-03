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
};

module.exports = functions;
