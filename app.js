console.log("Javascript Connected")

// Part 1:-Objects

// Assignment 1
var car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// Assignment 2
car.color = 'red';
delete car.year;
console.log(car);

// Assignment 3
var person = { name: 'muneer', age: 22 };
console.log(person.age);
console.log(person['age']);

// Assignment 4
var student = { name: 'muneer', marks: 90 };
student.showMarks = function() {
  alert(this.marks);
};

// Assignment 5
var user = {
  name: 'muneer',
  address: { city: 'karachi', zip: 54000 }
};
console.log(user.address.city);

// Assignment 6
var book = { title: 'JS Basics', author: 'muneer' };
for (var key in book) {
  console.log(key, book[key]);
}

// Assignment 7
var phone = { brand: 'tecno ', camera: '48MP' };
console.log('camera' in phone);

// Assignment 8
var obj = { a: 1, b: 2, c: 3 };
var count = 0;
for (var key in obj) { count++; }
console.log(count);

// Assignment 9
var arr = [];
for (var key in obj) { arr.push(key); }
console.log(arr);

// Assignment 10
var animal = { name: 'Dog', type: 'Mammal' };
var newAnimal = {};
for (var key in animal) {
  newAnimal[key] = animal[key];
}
console.log(newAnimal);


// Part:-2 Constructors

// Assignment 1
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Assignment 2
var p1 = new Person('Ali', 20);
var p2 = new Person('Sara', 25);
var p3 = new Person('Usman', 30);

// Assignment 3
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    alert('Hi, ' + this.name);
  };
}

// Assignment 4
var p1 = new Person('Ali', 20);
p1.sayHi(); // "Hi, Ali"

// Assignment 5
function Person(name, age) {
  this.name = name;
  this.age = age || 18; // default
}

// Assignment 6
p1.city = 'Karachi';
console.log(p1);

// Assignment 7
function Engine(type) {
  this.type = type;
}
function Car(brand, type) {
  this.brand = brand;
  this.engine = new Engine(type);
}
var c1 = new Car('Toyota', 'V8');

// Assignment 8
console.log(p1 instanceof Person);

// Assignment 9
function Person(name) {
  return { name: 'Custom' };
}
var p = new Person('Ali');
console.log(p);

// Assignment 10
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}
var students = [new Student('Ali', 90), new Student('Sara', 85)];
console.log(students);
   
// Part:-3 Prototypes

function Person(name) {
  this.name = name;
}

// Assignment 1
Person.prototype.greet = function() {
  alert('Hello!');
};

// Assignment 2
var p1 = new Person('Ali');
var p2 = new Person('Sara');
console.log(p1.greet === p2.greet); // true

// Assignment 3
Person.prototype.species = 'Human';
console.log(p1.species);

// Assignment 4
p1.greet = function() {
  alert('Hi there!');
};
p1.greet();

// Assignment 5
console.log('greet' in p1);

// Assignment 6
Person.prototype.eat = function() {};
Person.prototype.sleep = function() {};

// Assignment 7
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
Car.prototype.getInfo = function() {
  return this.brand + ' ' + this.year;
};

// Assignment 8
var c1 = new Car('Toyota', 2020);
var c2 = new Car('Honda', 2021);
console.log(c1.getInfo === c2.getInfo);

// Assignment 9
console.log(p1.constructor === Person);

// Assignment 10
function Animal() {}
Animal.prototype.speak = function() {
  console.log('Animal sound');
};

function Dog() {}
for (var key in Animal.prototype) {
  Dog.prototype[key] = Animal.prototype[key];
}


