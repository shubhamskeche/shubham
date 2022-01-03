//function as a parameter to another function
let div=function(a,b){
    return a/b
}
//console.log(div)
function division(fn){
    let zz=fn(20,10)
    return zz
}
let ss=division(div)
console.log(ss)


//2
let add=function (x,y) {
    return x+y
}
console.log(add)
function addition(fn){
   let dd= fn(22,20)
   return dd
}
let y=addition(add)
console.log(y)


//3 array as parameter to another function

let ages=[23,34,45,56]
function arrayReverse(arr){
   let aa= arr.reverse()
   return aa
}
let ds=arrayReverse(ages)
console.log(ds)


//object as parameter to another function 

audi={
    colour:"red",
    reNo:23,
    value:500000
}
function Updatevalue(obj){
    obj.value=700000
    return obj
}
let aaa=Updatevalue(audi)
console.log(aaa)
//console.log(audi)











