amol={
    fullname:"amol patil",
    age:23,
    rollno:34,
    skills:["c","c++","python"]
}
shubham={
    fullname:"shubham sanjay keche",
    age:34,
    rollno:50,
    skills:["java","python","css"]
}
console.log(amol)
console.log(shubham)
//........................................>
class Person{
    fullname=undefined
    age=undefined
    rollno=undefined
    skills=undefined
}
let shubham2=new Person()
console.log(shubham2)
//to set the value from outside the object
shubham2.fullname="shubham sanjay keche"
shubham2["age"]=23
shubham2["skills"]="javascript,python"
shubham2.rollno=24
console.log(shubham2)
//retrive
console.log(shubham2["skills"])
console.log(shubham2.age)
//update
shubham2.fullname="SHUBHAM SANJAY KECHE"
shubham2["age"]=45
console.log(shubham2)
//add
shubham2.city="pune"
console.log(shubham2)
//delete
delete shubham2.fullname
console.log(shubham2)
















