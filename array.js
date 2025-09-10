const myArr = [0, 1, 2, 3, 4, 5 ]
// console.log(myArray);

// console.log(myArr.push(6));
// console.log(myArr.pop());
// console.log(myArr.unshift(6));
// console.log(myArr.shift());

// console.log(myArr.indexOf(3));
// console.log(myArr.includes(3));

// const newArr =  myArr.join()
// console.log(newArr);

// console.log(myArr);

//  #slice() and #splice()

// console.log("A", myArr);

// const mn1= myArr.slice(1,3);
// console.log(mn1);


// console.log("B", myArr);

// const mn2 = myArr.splice(1,3);
// console.log(mn2);

// // splice modifies the original array
// //  slice is for extracting part of an array without  changing the original array 
// // while splice is for modifying the original array by removing or replacing existing elements and/or adding new elements in place.
// console.log("C", myArr);

//  let numbers = [[1,2],[3,4],[5,6]]
// console.log(numbers[2][0]);


const marvel_Heros =["spiderman", "ironman", "thor", "hulk", ]
const dc_Heros =["batman", "superman", "flash", "aquaman", ]

// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);

// const all_heros = marvel_Heros.concat(dc_Heros);
// console.log(all_heros);

// const all_heros1 =[...marvel_Heros, ...dc_Heros]
// console.log(all_heros1);


// const anotherArr= [1,2,3, [4,5,6],7,[8,9]]

// const flatArr = anotherArr.flat(Infinity)
// console.log(flatArr);


console.log(Array.isArray(marvel_Heros));

console.log(Array.from("varun"));

// console.log(marvel_Heros.fill("captain america",1,3));
// console.log(marvel_Heros);

console.log(Array.from({name: "varun"}));

console.log(Array.of(1,2,3,4,5));






