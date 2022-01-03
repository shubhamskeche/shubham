let person =['shubham','keche',31,12]
//retrive
console.log(person[0])
console.log(person[2])
console.log(person[3])


//update//
person[3]=100
console.log(person)

//add//
// //in array if u want to add something in the given array then we use push and unshift method//
person.language="english"
person['skills']="javascript"

console.log(person)

// //in array we can store the duplicate value//
//delete//
delete person['skills']
console.log(person)

// let personA={
//     fullName:"shubham"
//     lastName:"keche"
//     age:25
//     rollno:50

// }
// //object does not store the value by index like array and string
// //there are two types of object for written
// //dotnotation and bracket notation

// //syntax
// //objName.propertyName=======>dot notation
// //objName['propertyName']=====>bracket notation

// //update//
// personA.fullName="sagar"
// console.log(personA.fullName)
// personA['fullName']="madhura"
// console.log(personA.fullName)







// let amol={
//     fullName:"amol rao"
//     roll no:34
//     age:22
//     skills:["python","javascript","c"]
//     Parents:{
//         father:"shirish"
//         mother:"kanchan"
//     },
//     is Married:true
// }

// for(let key in amol){
//     console.log(key,amol[key])
// }


//.........................................................>
let a = 10
let b = a
console.log(a)
console.log(b)




let y=10
let z=y
y=400
z=500
console.log(y)
console.log(z)



let arr=[11,22,34]
let arr2=arr
arr[0]=22
arr2[1]=33
console.log(arr)
console.log(arr2)















