// #primitive

// 7types-
 // string, Number, Boolean, Undefined, Null, Symbol(make value unique), BigInt(large numbers)

  const score=100
  const scoreValue= 100.3

  const isLoggedIn = true
   let useEmail;
   const outsideTemp= null

   const id = Symbol("123")
   const anotherId = Symbol("123" )

  // console.log(id === anotherId);

   const bigNUmber = 21354654654654654654654n
    




 // #non-primitive(reference types)-

// object, array, functions
//#array
const heros=["spiderman" ,"batman", "suprman"];

//#objects

let myobj = {
   name: "varun",
   age: 22,

}
//#functions

const myFunction=  function(){
   console.log("hello world");
   
}

console.table([typeof myobj,typeof outsideTemp, typeof useEmail, typeof bigNUmber,])


//           │ 'object'    │
// │ 1       │ 'object'    │
// │ 2       │ 'undefined' │
// │ 3       │ 'bigint'    |

// #function unlimited arguments
function addNumbers(){
   let ans=0
   for(let i=0; i < arguments.length; i=i+1){
      ans=ans + arguments[i];

   }
   return ans
}
let sum = addNumbers(20,40,60,100);
console.log(sum);

