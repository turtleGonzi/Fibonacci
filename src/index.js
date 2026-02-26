const fibonacci = function (num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result.at(-2) + result.at(-1));
    }
  }
  return result;
};

console.log(fibonacci(8));

const fibsRec = function (num) {
  if (num < 0) {
    return [];
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    fibsRec(num - 1);
    return [0, 1];
  } else {
    const newArr = fibsRec(num - 1);
    newArr.push(newArr.at(-2) + newArr.at(-1));
    return newArr;
  }
};

console.log(fibsRec(8));
