var singleNumber = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i = i + 2) {
    // console.log(i);

    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
