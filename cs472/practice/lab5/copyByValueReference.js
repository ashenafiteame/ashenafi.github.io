let array = [1, 2, 3, 4];
let myArray = array;

console.log(array, myArray);
myArray.pop();
myArray[3] = 9;
console.log(array, myArray);

// array is an object and it is copy by reference

// array reassignment it is by value
array = [];

console.log(array, myArray);
// but primitives are copy by value

let a = 5;
let b = a;
console.log(a, b);
b++;
console.log(a, b);


//cloning an aray

let thirdArray = myArray.slice(0);
thirdArray.pop();

console.log(myArray, thirdArray);


console.log(typeof (function a() { console.log() }))
console.log(typeof (null));
console.log(typeof (undefined));

console.log(Array.isArray([1, 2, function () { console.log("hello") }]));
console.log(Array.isArray({ a: 1 }));


//in array we can have a function as a member 

let obj = { a: 1, b: 2 };


let obj1 = obj; //copy by reference

let obj2 = Object.assign({}, obj); //copy by value

let obj3 = JSON.parse(JSON.stringify(obj)); //copy by value

obj1.a = "ashu";
obj1.c = "ashu2";


console.log(obj, obj1, obj2, obj3);

///


let array5 = [2, 3];
array5[0] = 5;
array5[4] = 10;
console.log(array5, typeof array5[2]);

// object properties

let employee = {
    firstName: "ashenafi",
    lastname: "teame",
    age: 25
}


console.log(employee.firstName);
employee.salary = 500;
console.log(employee);
delete employee.age;
console.log(employee);



//functions
//function decleration are hoisted : you can call them before they appear in the source code.
function square() {
    return 0;
}


//function expression
let squareOne = function () {
    return 0;
}

//Anonymous functions
// arrowfunction
let arrowfunction = (a) => console.log("hello arrow ", a);
console.log(arrowfunction(2));

console.log("arrowfunction(2)");



/// semicolen

function a1() {
    return {
        d: 1
    }
}

console.log(a1());