// let x=200
// let y=10
// console.log(x+y)
// console.log(x-y)    
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)

//donnot repeat yourself(DRY)
//therefore,


// function functionname(parameter1,parameter2) {
//    statement 
// }functionname(12,13)   //function calling with the argument

//.....................................................................>>>
// function add(a,b){
//     console.log(a+b)
// }
// add(12,13)




// //function with parameter with return type
// function mul(x,y){
//     return x*y
// }
// let ss=mul(10,9)
// console.log(ss)
// let ccc=ss+100
// console.log(ccc*0.10)
// console.log(ss*2)


// //..................................................>
// let c=12
// console.log(typeof c)
// let d=true
// console.log(typeof d )
// let e="shubham"
// console.log(typeof e)


// //................................
// let city="solapur"
// console.log(city.length)
// console.log(city[0])
// console.log(city.length-1)
// console.log(city[2])

// //methods.....
// console.log(city.toLowerCase())
// console.log(city.toUpperCase())
// console.log(city.toLowerCase().toUpperCase().length)


// let ocean="pacific"
// console.log(ocean.indexOf("i"))
// console.log(ocean.lastIndexOf("i"))

// for(let i=0;i<ocean.length;i++){
//     //console.log(i)    
//     console.log(ocean[i])
// }

// //............reverse
// for(let i=ocean.length-1;i>=0;i--){
//     //console.log(i)    
//     console.log(ocean[i])
// }



// ///slice

// let fname="shubham"
// console.log(fname.slice(0)) 
// console.log(fname.slice(1,4)) 
// console.log(fname.slice(3,1)) 
// console.log(fname.slice(-2)) 
// console.log(fname.slice(6))


// let fruit="apple"
// newstring=""
// for(let i=0;i<fruit.length;i++){
//     if(i==0){
//         newstring=newstring+fruit[i].toUpperCase()
//     }
//     else{
//         newstring=newstring+fruit[i].toLowerCase()
//     }
// }
// console.log(newstring)

// ////......reverse
// let revstring=""
// for(let i=0;i<fruit.length;i++){
//     revstring=fruit[i]+revstring
// }
// console.log(revstring)




// //arithmatic operators

// console.log(2>=1)
// console.log(77<22)
// console.log(4===4)
// console.log(5==="5")            ///here consider absolute value and tyoe //


// //for AND -----when both are true then only true
// //for OR-------when any one is true then true
// //for NOT----when true then flase and viceversa(compliment)

// // || OR
// // && AND
// // !  NOT
// console.log(23>4||5<4)
// console.log(22>=21 && 3!=="3")

// //........................................
// let fullName="shubhangi"
// //count of h
// count=0
// for(let i=0;i<fullName.length;i++){
//     if(fullName[i]==="h"){
//         count=count+1
//     }
// }
// console.log(count)

// //vowels count
// let vowels="chInmaye"
// let count2=0
// vowels=vowels.toLowerCase()
// for(let i=0;i<vowels.length;i++){
//     if(vowels[i]==="a"||vowels[i]==="e"||vowels[i]==="i"||vowels[i]==="o"||vowels[i]==="u"){
//         count2=count2+1
//     }
// }
// console.log(count2)



// //include
// fruit3="apple banana lemon chiku"
// console.log(fruit3.includes("banana"))
//...........................
//charAt//
// let bike="herohonda"
// console.log(bike.charAt(3))
// console.log(bike.charAt(7))
// console.log(bike.charAt(-1))                ///blank in the output


// ////charCodeAt//
// console.log(bike.charCodeAt(3))
// console.log(bike.charCodeAt(7))



    // string + string = string
    // string + number = string
    // number + string = string
    // number + number = number



// //string

// let firstname1="shubham"
// let lastname="keche"
// console.log(`my name is ${firstname1} and my last name is ${lastname} and my age is ${12+13}`)










































