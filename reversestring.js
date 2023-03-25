

function reverseWords(s)
{
  let arr =[];
  let newArr= [];
  arr=s.split('.');
  for(let i = arr.length;i>=0;i--){
      if( i == 0){
        newArr.push(arr[i]);
      }
      else{
        newArr.push(arr[i]+'.');
      }
  }
  let str = newArr.shift();
  return newArr.join('');
}

let s ='i.like.this.program.very.much';

console.log(reverseWords(s));