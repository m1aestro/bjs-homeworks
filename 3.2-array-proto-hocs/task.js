function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function  compareArrays(arr1, arr2) {
  const parsedArray1 = Array.from(arr1);
  const parsedArray2 = Array.from(arr2);

  return parsedArray1.length === parsedArray2.length && parsedArray1.every((element, i) => element === parsedArray2[i]);
}

function memorize(fn, limit) {
    
  const memory = [];

  return function () {
      const foundElem = memory.find(element => compareArrays(element.args, arguments));
      if ( foundElem !== undefined) {
          return foundElem.result;
      }
      let result = fn(...arguments);
      memory.push({args: arguments, result});

      if (memory.length >= limit) {
          memory.unshift();
      }
  
      return result;
  }
  
}