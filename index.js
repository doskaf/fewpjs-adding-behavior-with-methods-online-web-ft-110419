class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  function speak() {
    return `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  function speak() {
    return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  function speak() {
    if (this.sex === "male")
    return `${this.name} says meow!`
  }
}