// //1 push//
// fruits=["mango","banana","lemon"]
// let qqq=fruits.push("chiku")
// console.log(qqq)//return
// console.log(fruits)//action

// //2 pop//
// let fruitss=["mango","banana","lemon"]
// let qqqa=fruitss.pop()
// console.log(qqqa)//return
// console.log(fruitss)//action

// //3 unshift//
// //action =add eement at the start
// //return=new length

// let fruits1=["mango","banana","lemon"]
// let aaa=fruits1.unshift("watermelon")
// console.log(aaa)
// console.log(fruits1)


// //4 shift//
// //action=remove the element from start
// //return=removed element

// let fruits2=["mango","banana","lemon"]
// let bbb=fruits2.shift()
// console.log(bbb)
// console.log(fruits2)

// //5 indexOf//
// let number=[11,22,33,44,55]
// let a=number.indexOf(22)
// console.log(a)

// //6 include//
// let number2=[11,22,33,44,55]
// console.log(number2.includes(33))
// console.log(number2.includes(77))




// let marks=[11,22,33,44]
// z=[]
// //here i  want -2 from each element
// for(let i=0;i<marks.length;i++){
//    // console.log(marks[i]-2)
//    z.push(marks[i]-2)
// }
// console.log(z)



// //7 map//
// let ages=[11,22,33,44,55]
// let b=ages.map(function(el,index,array){
//     return el + 1
// })
// console.log(b)

// //8 filter//
// let marks2=[12,32,13,43]
// let bb=marks2.filter(function(el,index,array){
//     return el>15
// })
// console.log(bb)

// //9 reduce//

// //here first consider for loop
// let markss=[11,22,1]
// let sum=0
// for(let i=0;i<markss.length;i++){
//     sum=sum+markss[i]
// }
// console.log(sum)
// ///same here we are calculate by using reduce method(accumulator)

// let marks3=[2,3,4,1]
// let a2=marks3.reduce(function(acc,el,index,array){
//     return acc + el
// },0)
// console.log(a2)

// //10 for each

// let name4=['ram','shyam','sagar']
// for(let i=0;i<name4.length;i++){
//     console.log(`congratulations ${name4[i]}`)
// }

// //simillarly
// let aab=name4.forEach(function(el,index,array){
//     console.log(`congratulations ${el}`)
// })
// console.log(aab)

// //11 every//boolean value
// let numbers3=[11,22,9,33,44,55,66]
// let zz1=numbers3.every(function(el,index,array){
//     return el>5
// })
// console.log(zz1)


// //12 some//boolean value
// let numbers4=[11,22,9,33,44,55,66]
// let zz2=numbers4.some(function(el,index,array){
//     return el>20
// })
// console.log(zz2)


// //13 find
// let numbers5=[11,22,9,33,44,55,66]
// let zz3=numbers5.find(function(el,index,array){
//     return el>30
// })
// console.log(zz3)



// //14 filter

// let numbers6=[11,22,9,33,44,55,66]
// let zz4=numbers6.filter(function(el,index,array){
//     return el>30
// })
// console.log(zz4)


// // 15 find index//here element not present or beyond then like el>70 then output is -1
// let numbers7=[11,22,9,33,44,55,66]
// let zz5=numbers7.findIndex(function(el,index,array){
//     return el>70
// })
// console.log(zz5)


// // 16 fill//
// let cc=[11,22,33,44,55,66]
// let mm=cc.fill('s',2,5)
// console.log(mm)

// //17 splice//
// fruits5=['apple','banana','mango','grapes']
// let zz9=fruits5.splice(1,2,'chiku','papaya')
// console.log(zz9)
// console.log(fruits5)


// //18 reverse
// let ages9=[12,34,13,50]
// let xxz=ages9.reverse()
// console.log(xxz)

// //19 sort//(alphabetical sorting)
// let vowelss=['a','o','i','e','u']
// let ss=vowelss.sort()
// console.log(ss)

// //20 slice//(here start position,end position,end position is not include)
// let city=['pune','solapur','kolhapur','mumbai']
// console.log(city.slice(1))
// console.log(city.slice(2,4))
// console.log(city.slice(-2))


// //21 flat//(multidimensinal array into single array)
// marks11=[[12,13,14],[45],[67,89]]
// console.log(marks11.flat())


// //22 concat//joining to array
// let numA=[1,2,3]
// let numB=[4,5,6]
// console.log(numA.concat(numB).concat([8,9,10]))

// //23 split//
// let fullname="shubham-sanjay-keche"
// console.log(fullname.split('-'))


// //24 join//
// console.log([fullname].join('-'))





