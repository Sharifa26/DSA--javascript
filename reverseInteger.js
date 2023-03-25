/*Input: x = 123
Output: 321*/

/*Input: x = -123
Output: -321*/

/*Input: x = 120
Output: 21*/

/*Input: x = 1534236469
Output: 0 */


 function reverse(x) {
    // let rev = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    // if (x > Math.pow(2,32)){
    //     return 0;
    // }
    // return rev;
    let ans = parseInt(x.toString().split('').reverse().join('').toString());

    if (x < 0) { ans *= -1; }

    if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
    return ans;
};
let x = 1203454654;
console.log(reverse(x));