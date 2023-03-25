function remove(nums, val) {
    let i;
    arr =[]
    for (i = 0; i< nums.length ; i++){
        if(nums[i] != val){
          let j = nums[i];
            arr.push(j)
        }
    }
    return arr;
};
let nums = [2,3,2,3,4,5,6,7] , val= 3;
console.log(remove(nums, val));