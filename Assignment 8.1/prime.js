function myFunc(){

let num1= document.getElementById('num1').value;
let num2 = document.getElementById('num2').value;
// console.log( typeof num1);

let n1=parseInt(num1,10)
let n2=parseInt(num2,10)
console.log(n1,n2);
console.log( typeof n1);
let sum=0;

function getPrimesInRange(n1,n2){
    // const num1= document.getElementById('num1').value;
    // const num2 = document.getElementById('num2').value;
    
    var f=0; //flag
    for(let i =n1; i<=n2;i++){
        var node1 = document.createElement('div')
        var number1=document.createTextNode(i);
        node1.appendChild(number1)
        console.log(i)
        let start = performance.now();
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
            var node2 = document.createElement('div')
            var res1=document.createTextNode('Normal')
            node2.appendChild(res1)
            // document.getElementById('prime').innerHTML="Not Prime"+i
            f=0;
            let timeTaken = performance.now() - start;
            console.log(timeTaken);
            var node3 = document.createElement('div')
            var time1=document.createTextNode(timeTaken)
            node3.appendChild(time1)
            sum=sum+timeTaken;
        }
        else{
            console.log("Prime",i);
            // document.getElementById('prime').innerHTML="Not Prime"+i
            var nm = document.createElement('div')
            var nm1=document.createTextNode(i);
            nm.appendChild(nm1)
            document.getElementById('number2').appendChild(nm)
            let timeTaken = performance.now() - start;
            var node2 = document.createElement('div')
            var res1=document.createTextNode('Prime')
            node2.appendChild(res1)
            console.log(timeTaken);
            var node3 = document.createElement('div')
            var time1=document.createTextNode(timeTaken)
            var tm2 = document.createElement('div')
            var tin1=document.createTextNode(timeTaken)
            
           
            document.getElementById('time2').appendChild(tm2)
            node3.appendChild(time1)
            tm2.appendChild(tin1)
            sum=sum+timeTaken;
        }
        
        document.getElementById('number1').appendChild(node1)
    
        // document.getElementById('number1').appendChild('<br>')
        // node.appendChild(res1)
        document.getElementById('result1').appendChild(node2)
        // document.getElementById('result1').appendChild('<br>')
        // node.appendChild(time1)
        document.getElementById('time1').appendChild(node3)
        // document.getElementById('time1').appendChild('<br>')
        
    }
    
}

let s = performance.now();
getPrimesInRange(n1,n2)
// document.getElementById('details').innerHTML= 
let t = performance.now() - s;
t=t.toFixed(4)
console.log(t);
sum=sum/(n2-n1)
sum=sum.toFixed(4)
document.getElementById('prime').innerHTML= "The time taken to run all the instances of the function is: "+t+" ms <br> The Average time taken: "+sum
// document.getElementById('Details')
}