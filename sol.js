var maximum69Number = function (num) {
  let numArray = num.toString().split("");

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === "6") {
      numArray[i] = "9";
      break;
    }
  }
  return +numArray.join("");
};

console.log(maximum69Number(9669));
