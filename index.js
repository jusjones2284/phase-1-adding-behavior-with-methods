// Your code here

class Cat {

  constructor(name, sex){

    this.name = name
    this.sex = sex
  }

  speak(){

    return this.name + " says meow!"
  }



}

let cat = new Cat("Sasha")

class Dog{

  constructor(name, sex){

    this.name = name
    this.sex = sex
  }

  speak(){

    return this.name + " says woof!"
  }

}

let dog = new Dog("Roy")



class Bird {

  constructor(name, sex){


    this.name = name
    this.sex = sex
  }

  speak(){

    return 'It\'s me!'+ this.name + 'the parrot!'
  }

}


let bird = new Bird('Pablo');
let bird2 = new Bird('Squawk!')