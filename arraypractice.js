student = [
    {
        firstName: "shubham keche",
        age: 25,
        rollNo: 50,
        skills: ["javascript", "python", "CSS"],
        city: "pune"
    },
    {
        firstName: "amar patil",
        age: 21,
        rollNo: 32,
        skills: ["python", "cpp", "HTML", "CSS"],
        city: "Mumbai"
    },
    {
        firstName: "komal patil",
        age: 30,
        rollNo: 56,
        skills: ["javascript", "HTML", "java"],
        city: "banglore"
    },
    {
        firstName: "amol rao",
        age: 35,
        rollNo: 24,
        skills: ["python", "javascript", "HTML", "CSS"],
        city: "chennai"
    }
]
//----------------------------------------------------------------------------->
//program one
//skills of person whose name start with "a"
// let a=student.filter(function (el){
//     return el.firstName[0]==="a"||el.firstName[0]==="A"
// })
// a.forEach(element => {
//     console.log(`${element.firstName}:${element.skills}`)

// });

//program two
// let b = student.filter(function (el) {
//     return el.firstName.startsWith('a') || el.firstName.startsWith('A')
// })
// b.forEach(element => {
//     console.log(`${element.firstName}:${element.skills.length}`)
// });



// //program three
// //add user name for all users
// student.forEach(function (el) {
//     el.username = el.firstName.split('')[0][0] + el.firstName.split('')[1][0]
// })
// console.log(student)


// //program 4
// //find out average age
// let r = student.reduce(function (acc, el) {
//     return acc + el.age
// }, 0) / student.length
// console.log(r)



// //program 5
//first user more than 3 skills
// let u = student.filter(function (el, index, array) {
//     return el.skills.length >3
// }).forEach(function(el,index,array) {
//     console.log(el.firstName)
// });


// // //program 6

// // //pune and python
// let ra = student.filter(function (el) {
//     return el.city === "pune" && el.skills.includes('python')
// }).forEach(function (el) {
//     console.log(el.firstName)
// });
//simillarly
// let da = student.filter(function (el) {
//     return el.city === "pune" && el.skills.indexOf('python') > 0
// }).forEach(function (el) {
//     console.log(el.firstName)
// });

//program 7

//push  non  duplicate element
// let ia = [11, 22, 33, 44, 55, 66, 77, 11, 22]
// let nonduplicate = []
// let duplicate = []
// for (let i = 0; i < ia.length; i++) {
//     if (nonduplicate.indexOf(ia[i]) < 0) {
//         nonduplicate.push(ia[i])
//     }
//     else {
//         duplicate.push(ia[i])
//     }
// }
// console.log(nonduplicate)
// console.log(duplicate)

//simillarly push duplicate element into the new array
// let iaa = [11, 22, 33, 44, 55, 66, 77, 11, 22]
// let z=iaa.filter(function(el,index,array){
//     return array.indexOf(el)===index
// })
// console.log(z)


//program 8
// let s = [22, 33, 44, 22]
// let p = s.filter(function (el, index, array) {
//     return array.indexOf(el) !== index
// })
// console.log(p)






















