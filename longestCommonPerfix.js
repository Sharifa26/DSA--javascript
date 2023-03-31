

const moment = require("moment");



let date = '12/30/2011'
function ArrayDate(date){ //latex
    try{
        let string =  moment(new Date(date)).format('DDMMYYYY');
        string = string.split('');
        string = [...string];
        let array = Array.from(string);
        array = Object.assign([], string);
        return array
    }catch(error){
        return error;
    }    
}
 
let Name = 'sharifa',gender='Transgender',maritalStatus='Unmarried'
function getPrefix(Name,gender,maritalStatus){//latex
    try{
        let prefix ='';
        if(!Name){
            return prefix
        }
        if(gender == 'Male'){
            prefix = 'Mr'
            return prefix;
        }
        if(gender == 'Female' && maritalStatus == 'Unmarried' ){
            prefix = 'Ms'
            return prefix;
        }
        if(gender == 'Female' && maritalStatus == 'married' ){
            prefix = 'Mrs'
            return prefix;
        }
        if(gender == 'Transgender' ){
            prefix = 'Mx'
            return prefix;
        }
    }catch(error){
        return error;
    } 

}

console.log(ArrayDate(date));