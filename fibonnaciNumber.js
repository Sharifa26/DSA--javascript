function printFibb(N)
{
    let n1 =1,n2=1,n3;
    let arr=[n1,n2];
    for(let i=2;i<N ;i++){
        n3=n1+n2;    
        arr.push(n3)    
        n1=n2;    
        n2=n3;  
    }
    return arr;
}

let N = 5;

console.log(printFibb(N));




