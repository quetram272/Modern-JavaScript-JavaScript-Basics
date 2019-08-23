console.log('hello, world')

let email='mario@thenatninja.co.uk'
console.log(email);

let firstName= 'Brandon';
let lastName= 'Sanderson';

let fullName = firstName + '' + lastName;
console.log(fullName[2]);
console.log(fullName.length);
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase();
console.log(result);

let index= email.indexOf('@');
console.log(index);

// let email ='mario@thenatninja.co.uk';
// let result = email.lastIndexOf('n');
// console.log(result);

// let email ='mario@thenatninja.co.uk';
// let result = email.slice(0,10);
// console.log(result);

// let email ='mario@thenatninja.co.uk';
// let result = email.replace('m' , 'w');
// console.log(result);

// let likes =10;
// like ++ ;
// console.log(likes);

// const title = 'Best reads of 2019';
// const author= 'mariop';
// const likes =30;
// let result= 'the blb calles ${title} ny ${author} hs ${likes} likes'
// console.log(result);

let ninja = ['shaun' , 'ryu', 'chun-li'];
// ninja[1]
// console.log(ninja[1]);
// let ages =[20,25,30];
// console.log(ages[2]);
let result = ninja.join('-');
console.log(result)
let result = ninja.concat(['ken']);
console.log(result);
let result = ninja.push('ken');
console.log(result);

let age =null;
console.log(age);

console.log(true, false, "true" , "false");
let email = 'luigi@thenetninja.co.uk';
let result = email.includes('@');
console.log(result);
let name = 'shaun';
console.log(name =='shaun');
conssole.log(name);


let score='100';
// score = Number(score);
// console.log(score +1 );
// console.log(typeof score);
// let result = String(50);
let result = Boolean('0');
console.log(result,typeof result);
