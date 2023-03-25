function isprime(n){
    let prime = true;
    if( n == 1){
        return 1;
    }
    else if(n>1){
        for(let i=2 ; i<n ;i++){
            if( n % i == 0){
                prime = false;
                break;
            }
        }
        if(prime){
            return 1;
        }
        else{
            return 0;
        }
    }
}
let n=15;
let answer = isprime(n);
console.log(answer);