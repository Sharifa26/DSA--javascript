//Day 2

/*
charAt()
charCodeAt()
concat()
endsWith()
includes()
indexOf()
lastIndexOf()
length()
match()
repeat()
replace()
search()
split()
startsWith()
subStr(),subString()
toLowerCase()
toUpperCase()
trim()
*/

let string = 'Javascript'
let lastIndex = string.length - 1
console.log(string[2]);
console.log(string.charAt(4));
console.log(lastIndex);

let msg = 'I am Good and fine';
let last = msg.length - 1;
console.log(last);
console.log(msg.charCodeAt(last));
console.log(msg.concat('hasfyg', 'asguygsfd', '723561'));
console.log(string.concat(" tutorial"));
console.log(string.endsWith('t'));
console.log(msg.endsWith('fine'));
console.log(msg.includes('Good'));

console.log(msg.indexOf('f'));

console.log(msg.lastIndexOf('fine'));

let sss = 'I love you';
let pattern = /Love/gi
console.log(sss.match(pattern));

let text = 'I m born on 26th may 2001';
let regex = /\d/g
let list = 'fdgh , jdjkje , jeivn'
let name = '  sharifa hsgyd'
console.log(text.match(regex));
console.log(text.match(/\d+/g));
console.log(sss.repeat(3));
console.log(sss.replace('love', 'hate'));
console.log(sss.search('you'));
console.log(sss.split());
console.log(sss.split(' '));
console.log(list.split(','));
console.log(name.split(''));
console.log(text.startsWith('Love'));

let Country = 'Finland';

console.log(Country.substring(0, 3));
console.log(Country.substr(0, 3));
console.log(Country.toUpperCase());
console.log(Country.toLowerCase());
console.log(name.trim());

let PI = Math.PI;

console.log(PI);
console.log(Math.round(PI));
console.log(Math.round(10.5));
console.log(Math.floor(10.5));
console.log(Math.ceil(10.5));
console.log(Math.ceil(PI));
console.log(Math.min(22, 4, 5, 7, 0));
console.log(Math.max(-2, -3, -6, -10));
console.log((Math.random() * 100).toFixed(0));
console.log(Math.abs(-11));
console.log(Math.sqrt(10000));

let a = 10;
let b = 22;

let ans = `sum of ${a} and ${b} = ${a + b}`;

console.log(ans);
console.log(`${a} is greater than ${b}: ${a > b}`)



console.log(typeof ans);
console.log(typeof 100);
console.log(typeof 12.8);
console.log(typeof true);
console.log(typeof 'shbeudd');
console.log(typeof hsg);
console.log(typeof undefined);
console.log(typeof '2752');
console.log(typeof null);

let num = '100';
let n = '3.77'
console.log(parseInt(num));
console.log(Number(num));
console.log(parseFloat(n));
console.log(parseInt(n));


let sen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sen.match('Love'));


let isRaining = 1
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')


const now = new Date()
console.log(now.getMinutes());


const date = new Date();
const dt = date.getDate();
const month = date.getMonth() +1 ;
const year = date.getFullYear();
const hr = date.getHours();
const min = date.getMinutes();
const day = date.getDay() + 1; 

console.log(`${dt}/${month}/${year},${hr}:${min} -- ${day}`);

const eightEmptyValues = Array(8) 
eightEmptyValues.push(0 ,2)
console.log(eightEmptyValues)

const four = Array(4).fill(4);
console.log(four);

const one = [ 1,1,1,1,0,0,0,0,];
const two = [ 2,2,2,2];
console.log(one.concat(3, 'd', 0));
console.log(one.length);

let games = ['criket' , 'hockey' , 'volleyball','tennis','balls'];

let index = games.indexOf('balls');

index == -1 ? console.log('This games is not in the array') : console.log('this game is present in the array');

console.log(Array.isArray(two));

console.log(games.toString());

console.log(one.join(' ##'));
let m = [1,4,5,6,7,8,9,3,0]
m =m.sort();
console.log(m.reverse());