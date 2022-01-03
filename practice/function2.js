// let add=function(a,b){
//     return a+b
// }
// console.log(add)

// function addition(fn){
//     let yy=fn(2,3)
//     return yy
// }
// let z=addition(add)
// console.log(z)

//array as a parameter to the another function
// let numbers = [11, 22, 33, 44, 55]
// function arrayaddition(array) {
//     aa = array.reduce(function (acc, el, index, array) {
//         return acc + el
//     }, 0)
//     return aa
// }
// let zzz = arrayaddition(numbers)
// console.log(zzz)




//object as a pparameter to the another function
shubham={
    fullName:"shubham sanjay keche",
    age:25,
    roll:35
}
function updateage(obj) {
    obj.age=80
    return obj
}
let zz=updateage(shubham)
console.log(zz)
