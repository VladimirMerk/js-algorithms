function everything(input, deep = 1) {
  if (!Array.isArray(input)) {
    return new Error('Input must be an array!');
  }
  return input.reduce((resultArray, element) => {
    const currentLevelElements = [element];

    // Если последний уровень
    if (deep <= 1) {
      resultArray.push(currentLevelElements);
      return resultArray;
    }

    // Если не последний
    // Получаем очередной уровень
    const subLevel = everything(input, deep - 1);

    // Складывае все результаты уровня с элементом текущей итерации
    const subResults = subLevel.reduce((subArray, subElement) => {
      // Игнорируем подуровни содержащие основной элемент
      if (!subElement.includes(element)) {
        subArray.push(currentLevelElements.concat(subElement));
      }
      return subArray;
    }, []);

    resultArray.push(...subResults);
    return resultArray;
  }, []);
}

const myArray = ['first', 'second', 'third'];
console.time('Total time');
const res = [everything(myArray, 1), everything(myArray, 2), everything(myArray, 3)];
console.log(res, res[0].length + res[1].length + res[2].length);
console.timeEnd('Total time');

if (typeof module !== 'undefined' && module.exports != null) {
  exports.everything = everything;
}
