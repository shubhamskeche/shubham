// //function as a parameter to another function
// //  let add=function (x,y){
// //      return x+y
// //  }
// //  console.log(add)
// //  function addition (fn){
// //      let sq=fn(20,30)
// //      return sq
// //  }
// //  let zz=addition(add)
// //  console.log(zz)


//  //example 2
// //  let sub=function(a,b){
// //      return a-b
// //  }
// //  console.log(sub)
// //  function substraction (fn){
// //      let aa=fn(5,3)
// //      return aa
// //  }
// //  let bb=substraction(sub)
// //  console.log(bb)

// //  //example 3//by using function declaration
// //  function mul(c,d){
// //      return c*d
// //  }
// //  console.log(mul)
// //  function multiplication(fn){
// //      let dd=fn(2,3)
// //      return dd
// //  }
// //  let ff=multiplication (mul)
// //  console.log(ff)

// //  //example 4  by using arrow function
// //  let  mul2=(c,d)=> c*d
// // console.log(mul2)
// // function multiplication(fn){
// //     let qq=fn(5,6)  
// //     return qq
// // }
// // let ss= multiplication (mul2)
// // console.log(ss)



// // //array as a parameter to the function
// let numbers=[11,22,33,44,55]
// function arrayaddition(arr){
//     let ss=arr.reduce(function(acc,el,index,array){
//         return acc+el
//     },0)
//     return ss
// }  
// let ccc=arrayaddition(numbers)
// console.log(ccc)      

    
// //array as a parameter to another function 
// let rr=[11,22,33]
// function Arr(ar) {
//     return ar
// }
// let q = Arr(rr)
// console.log(q)
// console.log(rr)




// //example 2
let rrr=[11,22,33,44,55,66]
function Arr(ar){
    return ar
}
let qq = Arr(rrr)
console.log(qq) 
console.log(rrr)



// //object as aparameter to another function

let shubham ={
    age:30,
    rollNo:50
}
function UpdateAge(obj){
    obj.age=80
    return obj
}
let e=UpdateAge(shubham)
//console.log(e)
console.log(shubham)

