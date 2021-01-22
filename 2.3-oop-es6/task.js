// Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}


// Задача №2

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const foundBook = this.findBookBy("name", bookName);
    if (foundBook !== null) {
      return this.books.splice(this.books.indexOf(foundBook), 1)[0];
    }
    return null;
  }
}

// Задача 3

class StudentLog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (typeof this[subject] === "undefined") {
      this[subject] = [];
    }

    if (grade >= 1 && grade <= 5) {
      this[subject].push(grade);
      return this[subject].length;
    } else {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      return this[subject].length;
    }
  }

  getAverageBySubject(subject) {
    if (typeof this[subject] === "undefined") {
      return 0;
    }

    let marksSum = 0;

    if (this[subject].length == 0) {
      return 0;
    }

    for (let i = 0; i < this[subject].length; i++) {
      marksSum += this[subject][i];
    }

    return Math.round(marksSum / this[subject].length);
  }

  getTotalAverage() {
    let averageMarksSum = 0;
    let countSubjects = 0;
    
    for (let proper in this) {
      if (proper == "name") {
        continue;
      }
      averageMarksSum += this.getAverageBySubject(proper);
        ++countSubjects;
    }

    if (countSubjects === 0) {
        return 0;
    }

    return averageMarksSum / countSubjects;
  }
}
