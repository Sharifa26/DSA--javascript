// function reverse(array , n , k){
//     for(i=0 ; i<n ; i += k)
//     {
//         let left = i;
//         let right  = Math.min(i + k - 1, n - 1);

//         while(left < right) {
//             //swap(array[left++], array[right--]);
            
//         }
//     }
//     //return swap;
// }

let arr = [3,4,6,8,9,11,6], n = arr.length , k=3;

function reverse1(arr,n,k){
    for(let i=0; i<n ;i+=k){
        let left = i;
        let right = Math.min(i+k-1,n-1);
        console.log(right);
        let temp;

        while(left<right){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left +=1;
            right -=1;
        }
    }
    return arr;
}
console.log(reverse1(arr,n,k));