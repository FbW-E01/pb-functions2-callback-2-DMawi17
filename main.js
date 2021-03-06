// # Callbacks

// #### Number Sqaure
// * Write a function which will return sqaure of given number
// * Write a function which will return sqaure of every number in array

const array = [1, 2, 3, 4, 5, 6];

const square = (arr, fn) => {
    for (const n of arr) {
        console.log(fn(n));
    }
};

const squareNumber = (n) => Math.pow(n, 2);

square(array, squareNumber); // return [1,4,9,16,25]
