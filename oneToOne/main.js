const myArray = ['first', 'second', 'third'];

function oneToOne(arr, maxLevel) {
  const result = getLevel(maxLevel);
  function getLevel(deep) {
    const result = [];
    for (const el of arr) {
      const subResult = [el];
      if (deep > 1) {
        const subLevel = getLevel(deep - 1);
        for (const subel of subLevel) {
          result.push(subResult.concat(subel));
        }
      } else {
        result.push(subResult);
      }
    }
    return result;
  }
  return result;
}

const res = oneToOne(myArray, 3);
console.log(res, res.length);
