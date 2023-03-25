const { convertRoutesToDataRoutes } = require("@remix-run/router/dist/utils");
const moment = require("moment");
//arry
const obj = ['gsvg','jsgd','jwg']
obj[0] = 'rrr'
obj.push('Audi')//adding

//object
const fruits = { name:'apple', price : 40}
fruits.place = 'delhi'//adding

//typeof 
//instanceof 
const cal = typeof fruits

let x = 5;
x++;
let z = Math.pow(x,2)

let a = 'sharifa'+4 + 5 + 'jdg'

let num = [4,3,2,5,1]
let len = num.length
function bubble(num){
    for( let i = 0; i < len ; i++ ){
        for( let j = 0; j < (len -i -1); j++){
            if(num[j] > num[j+1] ){
                let temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            }
        }
    }
    return num
}

let date = 12/01/2023
function arrayDate(date){ //latex
    try{
        let string =  moment(new Date(date)).format('DDMMYYYY');
        return Array.from(string);
    }catch(error){
        return error;
    }    
}

//reverse a String
let fr = 'bhdsgcuhy';
function reverse(fr){
    let ans = fr.toString().split('').reverse().join('');
   if( ans == fr){
    return 'the word is palindrome'
   }
   else{
    return 'the word is not  palindrome'
   }
}


//Write a JavaScript function that generates all combinations of a string
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g

let string = 'hvasgdfhsvhgwcygvd'
function combinations(string){

    let arr =[];
    let len = string.length;
    for(let i =0; i<len; i++){
        let j =1;
        let sub = string.substr(i,j)
        arr.push(sub);
        j++;
    }
    return arr;
}

function Sort(string){
    let ans = string.toString().split('').sort().join('');
    return ans;
}

let str = 'i m fine'
function convertToUpper(str){
 const arr = str.split(' ');

 for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
 }
 const str2 = arr.join(" ");
 console.log(str2);
}
console.log(convertToUpper(str));