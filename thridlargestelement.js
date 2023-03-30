thirdLargest(a, n)
{
    if(n<3){
        return -1;
    }
let max = -1,second= -1,third=-1;
for(let i=0;i<n;i++){
    if(a[i] > max || a[i]> second || a[i]>third){
        if(a[i]>max){
             third=second;
                 second=max;
                 max=a[i];
        }
         if(a[i]<max && a[i]>second)
             {
                 third=second;
                 second=a[i];
             }
             
             if(a[i]<second)
             {
                 third=a[i];
             }
    }
}
return third;
}
