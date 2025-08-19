var majorityElement = function (nums) {
  let appearancesCounte = {};
  let majorityElement = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    if (appearancesCounte[currentNumber]) {
      appearancesCounte[currentNumber]++;
    } else {
      appearancesCounte[currentNumber] = 1;
    }

    if (appearancesCounte[currentNumber] > appearancesCounte[majorityElement]) {
      majorityElement = currentNumber;
    }
  }

  return majorityElement;
};
