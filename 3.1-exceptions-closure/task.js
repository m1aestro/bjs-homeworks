// Задача №1

function parseCount(value) {
  const parsedValue = Number.parseInt(value);
  if (isNaN(parsedValue)) {
    throw new Error ("Невалидное значение");
  }

  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задача №2

class Triangle {
  constructor(a, b, c) {
      if (a + b < c || a + c < b || b + c < a) {
          throw new Error("Треугольник с такими сторонами не существует");
      }

      this.a = a;
      this.b = b;
      this.c = c;
  }

  getPerimeter() {
      return this.a + this.b + this.c;
  }

  getArea() {
      const p = (this.a + this.b + this.c) / 2;
      return Number.parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  }

}

function getTriangle(a, b, c) {
  try {
      return new Triangle(a, b, c);
  } catch (error) {
      return {
          getArea: () => "Ошибка! Треугольник не существует",
          getPerimeter: () => "Ошибка! Треугольник не существует"
      }    
  }
}
