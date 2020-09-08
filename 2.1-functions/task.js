function getSolutions(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
      return {D: D, roots: []};
  } else if (D == 0) {
      const x1 = -b / (2 * a);
      return {D: D, roots: [x1]}
  } else {
      const x1 = (-b + Math.sqrt(D)) / (2 * a);
      const x2 = (-b - Math.sqrt(D)) / (2 * a);
      return {D: D, roots: [x1, x2]};
  }
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots.length == 1) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.roots.length == 2) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else {
      console.log('Уравнение не имеет вещественных корней');
  }
}

function getAverageScore(data){
  let result = new Object();
  let arrayAvgMarks = [];
  for (let proper in data) {
      result[proper] = getAverageMark(data[proper]);
      arrayAvgMarks.push(result[proper]);
  }
  result.average = getAverageMark(arrayAvgMarks);

  return result;
}

function getAverageMark(marks){
  let marksSum = 0;   
  
  if (marks.length == 0) {
      return 0;
  }
  for (let i = 0; i < marks.length; i++) {
      marksSum += marks[i];
  }

  return marksSum / marks.length;
}

function getPersonData(secretData){

  return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};

}

function getDecodedValue(secret){
  return secret ? 'Эмильо' : 'Родриго';
}