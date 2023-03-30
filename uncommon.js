https://practice.geeksforgeeks.org/problems/uncommon-characters4932/1?page=1&difficulty[]=-1&category[]=Strings&curated[]=1&sortBy=submissions


/*Input:
A = geeksforgeeks
B = geeksquiz
Output: fioqruz
Explanation: 
The characters 'f', 'i', 'o', 'q', 'r', 'u','z' 
are either present in A or B, but not in both.*/

function UncommonChars(A, B){
    let newArr =[];
    for(let i=0;i<A.length;i++){
        let con = B.includes(A[i]);
        if(con == false){
            newArr.push(A[i]);
        }
        let can = A.includes(B[i]);
        if(can == false){
            newArr.push(B[i]);
        }
        
    }
   let ans = newArr.sort().join('');
   let final=[];
   for(let i=0;i<ans.length;i++){
    let fin = final.includes(ans[i]);
        if(fin == false){
            final.push(ans[i]);
        }
   }
   return final.sort().join('');

}

let A='characters',
B ='alphabets'
//console.log(UncommonChars(A, B));



https://practice.geeksforgeeks.org/problems/anagram-1587115620/1?page=1&difficulty[]=-1&difficulty[]=0&category[]=Strings&sortBy=submissions


/*Input:a = allergy, b = allergic
Output: NO
Explanation: Characters in both the strings are 
        not same, so they are not anagrams.*/


function isAnagram(a, b)
{
//    let count =0;
//    for(let i=0;i<a.length ;i++){
//     let con = a.includes(b[i]);
//     if( con == true){
//         count++;
//     }
//    }
//    if(count == a.length){
//     return 'YES'
//    }
//    else{
//     return 'NO'
//    }
return a.split("").sort().join("") === b.split("").sort().join("")
}

let a ='b',b='d';
//console.log(isAnagram('b','d'));




function multiplyStrings(s1,s2){ 
    if(s1 == 0 || s2 ==0){
        return 0;
    }
    let first = BigInt(s1);
    let sec = BigInt(s2);
    let num = first*sec;
    const ans = num.toString().split('');
    return ans.join('');
}

let s1='7',s2='2'
//console.log(multiplyStrings(s1,s2));


function transform(s){
    let string = s.split(" ");
    let array =[];
    for(let i=0;i<string.length;i++){
        let first =string[i].slice(0,1);
        let second = string[i].slice(1,string[i].length);
        array.push(first.toUpperCase()+second);
    }
    return array.join(' ');
}
//let s='i love programming'
//console.log(transform(s));


function countCamelCase(s){
    let count=0;
        for(let i=0;i<s.length;i++){
            console.log(s[i] === s[i].toUpperCase());
            if(s[i] === s[i].toUpperCase())
            {
             count++;
            }
        }
    return count;
}

let s='ckjkUUYII'
console.log(countCamelCase(s));