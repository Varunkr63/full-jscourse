const userName = new String("Varun kuamr 123");

console.log( typeof userName);

// String methods

//# charAt()
console.log(userName.charAt(3));

//# indexOf()
console.log(userName.indexOf('k'));

// #toUpperCase()
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toUpperCase());


// substring()
console.log(userName.substring(0, 5));

console.log(`character code  ${userName.charCodeAt(4)},is equal to 
${userName.charAt(4)}`);

// concat()
console.log(userName.concat( " ","is a good"));

console.log(userName.startsWith('V'));
console.log(userName.endsWith('3'));

console.log(userName.includes('varunkumar123'));

// match()
const newUser = "Amit Kumar"
console.log(newUser.match(/[A-Z]/g));

// repeat()
const str="happy! ";
console.log(`i am feeling ${str.repeat(3)}`);

// replace()

const newUserOne = newUser.replace('Amit', 'Vimal');
console.log(newUserOne);

// replaceAll()

const paragrapgh = "Apples are sweet ,and apples are healthy";
console.log((paragrapgh.replaceAll('apples','oranges')));
console.log(paragrapgh.search('are'));  


console.log(paragrapgh.length);

console.log(paragrapgh.slice (19));

console.log(paragrapgh.slice (11,17));

console.log(paragrapgh.split(' -'));
console.log(typeof paragrapgh.split(' -'));


const userTwo = "  Ankur Singh   ";
console.log(userTwo);

console.log(userTwo.trim());
















