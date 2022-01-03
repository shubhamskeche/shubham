//three types of function
//1. function declaration
//2.function expression
//3.arrow function


//function declaration
function mul(x,y){
    return x*y
}
let zz=mul(12,10)
console.log(zz)

//function expression
let mul2=function(x,y){
    return x*y
}
let zz1=mul2(11,10)
console.log(zz1)

//arrow function
let mul3=(x,y)=>{
    return x*y
}
let yy=mul3(7,8)
console.log(yy)

//(In arrow function we can remove the block and retuen keyword also.
//also if only one parameter is given then we can remove the bracket () )
