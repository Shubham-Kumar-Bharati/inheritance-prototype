//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

//Write code to explain prototype chaining
function person(n,a,g){
    this.name = n;
    this.age = a;
    this.gender = g;
}

let person1 = new person("shubham" , 23 , "male");
let person2 = new person("sweta" , 22 , "female"); 

console.log(person1);
console.log(person2);

//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

Array.prototype.add = function(){
    let sum = 0;
    for(let i=0 ; i<this.length ; i++){
       sum = this[i] + sum;
    }
    console.log(sum);
}
const arr1 = [1,2,3,4];
const arr2 = [5,6,8,7];

arr1.add();
arr2.add();

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Shubham")));

