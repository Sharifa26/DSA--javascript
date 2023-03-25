let s = '12:00:45PM'
function time(s){
    let string = s.slice(0,8);
    let str = string.split(':');
    let m = s.slice(8,10);
    if((m == 'AM' || m == 'am') && str[0] == '12')
    {
        return '00'+string.slice(2,8);
    }
    if( m == 'AM' || m == 'am'){
        return string;
    }
    if((m == 'PM' || m == 'pm') && str[0] == '12')
    {
        return string;
    }
    if( m == 'PM' || m == 'pm'){
        str = parseInt(str[0]);
        str = str + 12;
        return str+string.slice(2,8);
    } 
}

console.log(time(s));