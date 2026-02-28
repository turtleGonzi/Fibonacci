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

const mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }
  const leftSide = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const rightSide = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  if (!rightSide?.length || !leftSide?.length) {
    return rightSide || leftSide;
  }

  const merge = function () {
    const result = [];
    const length = leftSide?.length + rightSide?.length;
    for (let i = 0; i < length; i++) {
      if (
        leftSide[0] > rightSide[0] ||
        leftSide[0] === undefined ||
        leftSide[0] === rightSide[0]
      ) {
        result.push(rightSide[0]);
        rightSide.splice(0, 1);
      } else if (rightSide[0] > leftSide[0] || rightSide[0] === undefined) {
        result.push(leftSide[0]);
        leftSide.splice(0, 1);
      }
    }
    return result;
  };
  return merge();
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
