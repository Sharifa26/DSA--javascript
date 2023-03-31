class Solutions{
    var minDifference(int arr[], int n){
         int s1;

        int s2 = 0;
        int s3,i;
        
            for(i = 1;i < n; ++i) {

            if(arr[0] < arr[i])
            s1 = arr[i];
            //int s= array.reduce((a,b)=>a+b);

            for (i = 0; i < arr[].length; i++) {
                s2 += array[i];
            }
            s2 = s2 - s1;
            if (s2 > s1) {
                s3 = s2 - s1;
            }
            else {
                s3 = s1 - s2;
            }
        //onsole.log(s2);

            return  s3;
        }
    }
}

