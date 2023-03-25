
function sum(n) {
    let ans = 1
    if (n == 0 || n == 1) {
        return ans;
    }
    else {
        for (let i = 1; i <= n; i++) {
            ans *= i;
        }
        return ans;
    }
}

let n = 10;
let answer = sum(n);
console.log(answer);


https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1?page=1&difficulty[]=1&category[]=Strings&sortBy=submissions


https://practice.geeksforgeeks.org/problems/build-the-smallest2841/1?page=3&difficulty[]=1&category[]=Strings&sortBy=submissions

