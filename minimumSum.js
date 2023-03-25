// Input: N = 4, arr[] = {1, 6, 11, 5} 
// Output: 1
// Explanation: 
// Subset1 = {1, 5, 6}, sum of Subset1 = 12 
// Subset2 = {11}, sum of Subset2 = 11 


function minimumSum(array) {

  let s1 = Math.max(...array);

  let s2 = 0;
  let s3;
  
 let s= array.reduce((a,b)=>a+b);

  for (i = 0; i < array.length; i++) {
    s2 += array[i];
  }
  s2 = s2 - s1;
  if (s2 > s1) {
    s3 = s2 - s1;
  }
  else {
    s3 = s1 - s2;
  }
  console.log(s1);
  console.log(s2);

  return "value  = " + s3;
}
let array = [1, 1, 2, 7];
console.log(minimumSum(array));