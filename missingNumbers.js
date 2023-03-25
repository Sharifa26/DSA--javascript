function MissingNumber(array,n){
    //let no = array.length + 1;
    //console.log(no);
    //console.log(added);
    let add = 0;
	for (let i =0 ; i<=n ; i++){
        add += i;
    }

    let sum = array.reduce((a,b)=> a + b);
    
    return add - sum;
}


function miss(array,n){
    let sum = parseInt(n*(n+1)/2);
        let sumOfArr = 0;
        for (let i=0; i<n-1 ;i++ )
        {
            sumOfArr +=array[i];
        }
        return sum - sumOfArr;
}

let  array=[1,2,3,4,5,6,7,9],n=array.length+1;
//console.log(MissingNumber(array,n));

function divAddress(add){
    const arrayAdd = add.split(',');
    let first = arrayAdd.slice(0,arrayAdd.length/2);
    let second = arrayAdd.slice(arrayAdd.length/2);

    return [first.join(',')+',',second.join(',')+'.'];
}

let add='Marathon Futurex, 1301, A Wing, N M Joshi Marg, Lower Parel, BDD Chawl, Lower Parel, Mumbai, Maharashtra 400013, India';
console.log(divAddress(add));