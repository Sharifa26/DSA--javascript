

let a = [9,14,10,10,1,2,1,7,10,10,14,19,9] ;
let size = a.length;
function majorityElement(a, size)
{
    let arr =[];
    let N = size / 2;
    if(size == 1){
        return a[0];
    }
    for(let i=0;i<size;i++){
        for( let j=i+1; j<size ; j++){
        if(a[i] == a[j]){
            arr.push(a[i]);
        }
        console.log(arr);
    }
    }
    if(arr.length > N){
        return arr[0];
    }
    else{
        return -1
    }
}

let arr = [9,14,10,10,1,2,1,7,10,10,14,19,9];
function major(a){
    const threshold = Math.floor(a.length / 2);
    const map = {};
    for (let i = 0; i < a.length; i++) {
       const value = a[i];
       map[value] = map[value] + 1 || 1;
       if (map[value] > threshold)
          return value
    };
    return -1;
}
console.log(major(a));
