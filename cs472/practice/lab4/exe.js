/**
 * 
1. Create Array empty/some elements,
2. Update Array - change the value of element at nth position,
3. Delete Item - remove the element at nth position
4. Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
should be changed independently without changing the Others)
5. Get subset of array
6. Length of array
7. Splice/slice/concat
 * 
 */


let array = [1, 2, 3, 4, 5, 6];
console.log(array);
//update 4th element
array[4] = 90;
console.log(array);

//delete 3rd element
array.splice(3, 1);
console.log(array);



//Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
//should be changed independently without changing the Others)


let copy = array;
copy[3] = 30;
console.log(copy);
console.log(array);


//clone
let clone = array.slice();
clone[3] = 40;
console.log(clone);
console.log(array);


//get subset of array
let subset = array.slice(1, 3);
console.log(subset);

console.log(array.length);


array.push(99);
let concat = array.concat(clone);
console.log(concat);



const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(citrus);