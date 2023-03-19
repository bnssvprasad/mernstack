(function(){
    console.log("invoke");
})();

let number = [2,-3,-7,10,5];

 let num = number.filter((val) => {

 return val > 0;
  
 });
 console.log(num);
    
// num = [2,10,5]
let final = num.reduce((total,value,index)=>{
    total = total + value;
    return total;
},0);
console.log(final);

