function getPrimesInRange(n1,n2){
    // const num1= document.getElementById('num1').value;
    // const num2 = document.getElementById('num2').value;
    var f=0; //flag
    for(let i =n1; i<=n2;i++){
        
        console.log(i)
        if(i==0||i==1){
            f=-1;  
        }
        else {
            for(let j=2;j<=i/2;j++){
               if(i%j==0){
                f=-1;
                break;
               }
            }
        }
        if(f==-1){
            console.log("Not Prime",i);
            // document.getElementById('prime').innerHTML="Not Prime"+i
            f=0;
        }
        else{
            console.log("Prime",i);
            // document.getElementById('prime').innerHTML="Not Prime"+i
        }
        // document.getElementById('time1').appendChild('<br>')
    }
    
}