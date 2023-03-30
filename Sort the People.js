/*Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.*/

let names = ["Mary","John","Emma"], heights = [180,165,170];
function sort(names, heights) {
    let max = Math.max(...heights);
    let min = Math.min(...heights);
    console.log(max);
    console.log(min);
    for(let i=0;i<heights.length;i++){
        for(let j=0;i<names.length;j++){
            
        }
    }
};
console.log(sort(names, heights));