//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
  this.name = name;
  this.age = age;
}  //code here


//Now create three instances of Person with data you make up

var person1 = new Person("Balphagor", 1000);
var person2 = new Person('Medursula', 9999);
var person3 = new Person('Dr. Serious', 17);  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  alert(this.name);
}  //code here
