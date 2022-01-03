// let x=11
// let y=22
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)

function addition(x, y) {
    return x + y
}
let aa = addition(2, 3)
console.log(aa)

//,...........................
function add() {
    console.log(1 + 1)
}
add()
add()
//...................................
let city = "pune"
console.log(city[0])
console.log(city.length - 1)
console.log(city[3])

console.log(city.toLocaleLowerCase())
console.log(city.toUpperCase())
console.log(city.slice(2, 3))
console.log(city.includes("n"))
console.log(city.indexOf("p"))
console.log(city.lastIndexOf("e"))

let name = "shubham sanjay keche"
console.log(name.split("a"))

let ab = "shubham"
console.log(ab.charAt("b"))
console.log(ab.charCodeAt("a"))
//,.....................................
firstname = "shubham"
lastname = "keche"
console.log(`my name is ${firstname} and my last name is ${lastname} and my age is ${15 + 10}`)
//......................................................................
let ocean = "pacific"
for (let i = 0; i < ocean.length; i++) {
    //console.log(i)
    console.log(ocean[i])
}

for(let i=ocean.length-1;i>=0;i--){
    console.log(ocean[i])
}

//.........................................
let mobile="apple"
newstring=""
for(let i=0;i<mobile.length;i++){
    if(i==0){
        newstring=newstring+mobile[i].toUpperCase()
    }
    else{
        newstring=newstring+mobile[i].toLowerCase()
    }
}
console.log(newstring)
//..................................

let fullname2="chinmayi"
count=0
for(let i=0;i<fullname2.length;i++){
    if(fullname2[i]=="i"){
        count=count+1
    }
}
console.log(count)









































































