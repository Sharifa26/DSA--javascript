//complete
https://practice.geeksforgeeks.org/problems/remove-duplicates3034/1?page=1&difficulty[]=0&category[]=Strings&sortBy=submissions

/*Input: S = "zvvo"
Output: "zvo"
Explanation: Only keep the first
occurrence*/

function removeDups(str){
    let arr = str.split('');
    let newArr =[];
    for(let i=0;i<arr.length;i++){
        let con = newArr.includes(arr[i]);
        if(con == false){
            newArr.push(arr[i]);
            
        }
    }
    return newArr.join('');
}

let str ='zvvo';
//console.log(removeDups(str));

//completed
https://practice.geeksforgeeks.org/problems/remove-character3815/1?page=1&difficulty[]=-1&category[]=Strings&sortBy=submissions


/*string1 = "computer"
string2 = "cat"
Output: "ompuer"
Explanation: After removing characters(c, a, t)
from string1 we get "ompuer".*/

function removeChars(s1, s2){
    let oldArr =s1.split('');
    let newArr =[];
    let dummy =[];
    for(let i=0;i<oldArr.length;i++){
        let con = s2.includes(oldArr[i]);
        if(con == true){
            dummy.push(oldArr[i]);
        }
        else{
            newArr.push(oldArr[i])
        }
    }
    return newArr.join('');
}

let s1="computer",s2="cat"
//console.log(removeChars(s1, s2));


https://practice.geeksforgeeks.org/problems/array-subset-of-another-array2317/1?page=1&difficulty[]=0&curated[]=8&curated[]=2&sortBy=submissions


function print2largest(num){
    let ans = num.toString(2);
    return ans;
}
let num=8
console.log(print2largest(num));

//let arr = [1,1,1,3,5,6]
//console.log(print2largest(arr));

function print(arr,n){
    // let arra = [];
    // for(let i=0;i<n;i++){
    //     if( i % 2 == 0){
    //         arra.push(arr[i]);
    //     }
    // }
    // return arra;
    let output="";

    for(let i=0; i<arr.length; i++){
        
        if(i%2===0){
            output=output+arr[i]+" ";
        }
    }console.log(output);
}

let arr = [1, 2, 3, 4];
let n = arr.length;
//console.log(print(arr,n));