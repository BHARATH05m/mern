var a;      
a = 10;       

var a = 20;    
a = 30;    
console.log(a);//can redeclare and reassign

let b;       
b = 15;      
b = 35;
console.log(b);// cannot redeclare but can reassign

const c = 50;  
console.log(c);// cannot redeclare or reassign

//ternary operator example
var age = 18;
var eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);   

//spread operator example
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums); 

// destructuring example
var marks=[10, 20, 30, 40];
var [m1, m2, m3, m4] = marks;
console.log(m1, m2, m3, m4); 

//demo function
function demo(){
    console.log("This is a demo function");
}

var callback=(func)=>{
    console.log("Callback function called");
    func();
}
callback(demo);

//map
var arr=[10,20,30,40,50];
var double =arr.map(nums=> nums * 2);
console.log(double);

//filter
var odd= arr.filter(num => num % 2 !== 0);
console.log(odd);

//reduce
var total= arr.reduce((val,num)=> val + num, 0);
console.log(total); 

