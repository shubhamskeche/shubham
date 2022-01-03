let numbers=[11,22,33,44,55]
console.log(numbers[0])
console.log(numbers[numbers.length-1])
//.............................
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
//methods
let fruits=["apple","banana","lemon","papaya"]
//console.log(fruits.push("chiuku"))
//console.log(fruits)
//pop
//console.log(fruits.pop())
//console.log(fruits)
//shift
//console.log(fruits.shift())
//console.log(fruits)
// //unshift
// console.log(fruits.unshift("watermelon"))
// console.log(fruits)
//incluide
console.log(fruits.includes("watermelon"))
console.log(fruits.indexOf("lemon"))




let marks=[11,22,33,44,55]
zz=[]
for(let i=0;i<marks.length;i++){
   // console.log(marks[i]-1)
    zz.push(marks[i])
}
console.log(zz)



//map
let ages=[11,22,33,44,55,66,77]
let aa=ages.map(function(el,index,array){
    return el+1
    
})

console.log(aa)


//reduce
let bb=ages.reduce(function(acc,el,index,array){
    return acc+el
},2)
console.log(bb)



//filter
let cc=ages.filter(function(el,index,array){
    return el>30
})
console.log(cc)

//foe each
let names=["shubham","ram","shyam"]
let dd=names.forEach(function(el,index,array){
    console.log(`congratulation ${el}`)
})

//every
let ff=ages.every(function(el,index,array){
    return el>10
})
console.log(ff)
//some
let gg=ages.some(function(el,index,array){
    return el>30
})
console.log(gg)
//find
let hh=ages.find(function(el,index,array){
    return el>30
})
console.log(hh)
//filter
let ii=ages.filter(function(el,index,array){
    return el>30
})
console.log(ii)

//find index
let jj=ages.findIndex(function(el,index,array){
    return el
})
console.log(jj)

//splice
//slice
//concat
//flat
//reverse
//fill
//split
//sort
//joint
























