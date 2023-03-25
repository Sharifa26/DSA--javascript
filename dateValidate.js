const moment = require ('moment');
function timeForMilkAndCookies(date) {
let now= moment(date).format('YYYY,MM,DD');
let dat = new Date(now).getDate();
let month = new Date(now).getMonth();
let year = new Date(now).getFullYear();
console.log(dat);
console.log(month);
console.log(year);

if(  month =='11' && dat == '24'  ){
    return true;
}
else if(dat == '11'){
    return true;
}
// else if(month !='00'){
//     return No;
// }
else{
    return false;
}
}
let date =new Date(2000, 11, 24);
console.log(timeForMilkAndCookies(date));