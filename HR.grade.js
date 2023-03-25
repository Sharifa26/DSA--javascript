let grades = [73,67,38,33,50,41];
function marks(grades){
    let arr = [];
    for(let i=0; i<grades.length; i++){
        if( grades[i] < 38 ){
            arr.push(grades[i]);
        }
        else if( grades[i] >= 38 && (grades[i]+2) % 5 == 0 ){
            let ans = grades[i]+2
            arr.push(ans);
        }
        else if( grades[i] >= 38 && (grades[i]+1) % 5 == 0 ){
            let ans =  grades[i]+1
            arr.push(ans);
        }
        else if( grades[i] >= 38 && (grades[i]+3) % 5 == 0 ){
            arr.push(grades[i]);
        }
        else if( grades[i] >= 38 && (grades[i]+4) % 5 == 0 ){
            arr.push(grades[i]);
        }
        else{
            arr.push(grades[i]);
        }
    }
    return arr;
}
console.log(marks(grades));