function sum(nums) {
    let arr=[];
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
      
    }
    return nums
};
let nums = [1,2,3,4];
//console.log(sum(nums));

function count(operations) {
    let A = operations.count('X++');
    let B = operations.count('++X');
    let C = operations.count('--X');
    let D = operations.count('X--');
    return A+B-C-D;
};

let operations=['--X','X++','--X','X++'];
console.log(countOp(operations));

function countOp(operations){
    let plus=0;
    let minus=0;
    for(let i=0;i<operations.length;i++){
        if(operations[i]=='X++' || operations[i]=='++X'){
            plus+=1;
        }
        else if (operations[i]=='X--' || operations[i]=='--X'){
            minus+=1;
        }
    }
    return plus-minus;
}