shubham={
    fullName:"shubham sanjay keche",
    age:26,
    rollNo:45,
    skills:["javascript","python","HTML"]

}

//retrive
console.log(shubham.fullName)
console.log(shubham["age"])
//update
shubham.fullName="amar patil"
console.log(shubham)
shubham["age"]=56
console.log(shubham)
//addition
shubham.lang="marathi"
shubham["city"]="akluj"
console.log(shubham)
//delete
delete shubham.lang
delete shubham["skills"]
console.log(shubham)


let shubham2={
    fullName:"shubham sanjay keche",
    age:23,
    rollNo:34,
    skills:["java","javascript","python","html"],
    parents:{
        father:"sanjay",
        mother:"alka"
    },
    ismarried:true
}

for(let key in shubham2){
    console.log(key,shubham2[key])
}








