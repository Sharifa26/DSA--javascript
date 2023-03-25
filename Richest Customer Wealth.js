/*Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.*/

/*Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.*/

function  sum(accounts) {
    let arr=[];
    for( let i=0;i<accounts.length;i++){
        A = accounts[i].reduce((a,b)=>a+b);
         arr.push(A);
    }
    
    return Math.max(...arr);
};
let accounts = [[1,2,3],[3,2,1]]
console.log(sum(accounts));