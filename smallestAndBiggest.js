function minMax(arr) {
    let min = arr.reduce((a, b) => Math.min(a, b));
    let max = arr.reduce((a, b) => Math.max(a,b));

    // let min = Math.min(...arr);
    // let max = Math.max(...arr);
    console.log("Minimum value = " + min );
    console.log("Maximum value  = " +  max );
}
let arr = [ 90, 5 ,9 , 66 , 15 , 18];
console.log(MinMax(arr));

function MinMax(arr){

    let max = arr[0];
    let min = arr[0];
    for (i=0 ; i<arr.length ; i++){
        if ( arr[i] < min )
             min  = arr[i];
        if ( arr[i] > max )
            max = arr[i];
    }return [min, max];
}

function lastIndex(S){
    return S.split('').lastIndexOf('1')
}