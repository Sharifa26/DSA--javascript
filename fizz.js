/*create a for loop that iterates up to 100 while outputting “fizz” at multiples of 3, “buzz” at multiples of 5 and “fizzbuzz” at multiples of 3 and 5*/

function fizz(n){
    if( n % 3 == 0 && n % 5 == 0){
        return "fizzbuzz";
    }
    else if( n % 3 == 0){
        return "fizz";
    }
    else if( n % 5 == 0 ){
        return "buzz";
    }
    else {
        return 0;
    }
};

//let n = 50;
//console.log(fizz(n));


function Buzz(n) {
    let arr=[];
    let i;
    for(i=1; i<=n ; i++){
    
        if( i % 3 != 0 && i % 5 != 0){
            arr.push(i.toString());
        }
        if(  i % 3 == 0 && i % 5 == 0){
            arr.push("FizzBuzz")
        }
        else if( i % 3 == 0){
             arr.push("Fizz")
        }
        else if( i % 5 == 0 ){
            arr.push("Buzz")
        }
    }
    return arr;
};
let n=100;
console.log(Buzz(n));
