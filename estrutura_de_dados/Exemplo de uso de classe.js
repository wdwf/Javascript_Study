class Book {
  constructor(title, page) {
    this.title = title;
    this.page = page;
  }
  printTitle() {
    console.log(this.title);
  }
}

class ITBook extends Book {
  constructor(title, page, technology) {
    super(title, page)
    this.technology = technology;
  }
  printTechnology() {
    console.log(this.technology);
  }
}


let newBook = new ITBook("js Super")

console.log(newBook);
