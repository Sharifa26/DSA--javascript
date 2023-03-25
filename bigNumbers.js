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
console.log(multiplyStrings(s1,s2));


function add(s1){ 
    let nu = arr.join('');
        let num =nu.toString();
        let numb = BigInt(num);
        let ans = numb+BigInt(1);
        let final = ans.toString().split('');
        return final;
}