function nums(S) {
    let count = 0;
    for(let i=0;i<S.length;i++){
        for(let j=i+1;j<S.length;j++){
            if(S[i]===S[j]){
                count +=1;
            }
        }  
    }
    return count;
};

let S = [1,2,3,1,1,3]
console.log( nums(S));