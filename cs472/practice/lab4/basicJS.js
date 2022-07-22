const age = 32;
let string = "ashu";
let boolean = false;
let array = [1, 2, 3, 4];
let obj = {
    a: 1,
    b: 2
};
// age = age + 3; not allowed to constant to modify
let othervar = age;

// console.log(age, string, boolean, array, obj)


const s = "Connie Client";
// console.log(s);
// console.log(s.length);
// console.log(s.substring(2));
// console.log(s.substring(1, 3));
// console.log(s.substring(0, s.indexOf(" ")));
// console.log(s.charAt(0));
// console.log(s.indexOf("e"));
// console.log(s.lastIndexOf("e"));
// console.log(s.split(" "));
// console.log(s.toUpperCase());


// //conversion
// let count = 10;
// let s1 = "" + count;
// console.log(typeof (count), typeof (s1));

// console.log(!!s1);


// let array2 = ["str1", "str2", "str3", s1];
// for (let index = 0; index < array2.length; index++) {
//     if (array2[index] === "str1") {
//         console.log(array2[index]);
//     }
// }
// let i = 0;
// while (i < array2.length) {
//     console.log(array2[i]);
//     i++;
// }

// let a = [];
// a[0] = 1;
// a[10] = 4;
// console.log(a.length);
// console.log(a);
// a.push(3); //add emelent on top
// console.log("push 3 to the end");
// console.log(a);
// a.pop();//delete on top
// console.log("pop the end element");
// console.log(a);
// a.unshift(5); // add to the begining 
// console.log("unshift add 5 at the begining");
// console.log(a);
// a.shift(); // remove the first element

// console.log("shift remove first element");
// console.log(a);
// a.sort();
// console.log("sort");
// console.log(a);
// a.splice(1, 10, 7, 8, 9, 10)
// console.log(a);

// console.log("concat");
// console.log(a.concat(a, [1, 2], [8, 8, 8]));

//function

const square = function (number) {
    return number * number;
}
console.log(square(3));

function sum(x, y) {
    return x + y;
}

function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(4, 6));
console.log(sum());
console.log(sum(4, 6, 5));


const maximum = function (x, y, z) {
    if (x >= y && x >= z) {
        return x;
    }
    else if (y >= z) {
        return y;
    }
    else {
        return z;
    }
}
console.log(maximum(5, 9, 2));

function a() {//K&R style
    return {
        a: 1
    }
}
function b() { //OTBS not good practice (Crockford, …)
    return //semicolon gets inserted here
    {
        a: 1;
    }
}
console.log(a()); //object
console.log(b()); //undefined -- oop