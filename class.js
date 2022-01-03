// let amol = {
//     fullName: "amol rao",
//     age: 23,
//     roll: 25
// }

// let chinmay = {
//     fullName: "chinamay deshpande",
//     age: 22,
//     roll: 33
// }

// //update
// chinmay.fullName = "chinmay shishish deshpande"
// console.log(chinmay)
// //add
// chinmay.lang = "marathi"
// console.log(chinmay)
// //retrive
// console.log(chinmay["lang"])
// //delete
// delete chinmay.age
// console.log(chinmay)
// //............................................................>
// //setting the object values outside the class
// class Person {
//     //here class name should always start with capital letter
//     fullName = undefined
//     roll = undefined
//     age = undefined
// }
// let amol2 = new Person()             //constructor
// console.log(amol2)
// //update amol2
// amol2.fullName="amol rao"
// amol2.roll=23
// amol2.age=33
// console.log(amol2)
// //adding the new property in amol2
// amol2.lang="marathi"
// amol2.skills="javascript"
// console.log(amol2)
// //retrive
// console.log(amol2.skills)
// //delete
// delete amol2.skills
// console.log(amol2)

// //every oject will have different property value 
// //setting the object values at the time of object creation

// class Person2{
//     constructor(fn,ag,rn){
//         this.fullName=fn
//         this.age=ag
//         this.rollno=rn
//     }
//     display(){
//         console.log(this.fullName)
//     }
// }
// let amol3=new Person2("amol rao",12,33)
// console.log(amol3)
// amol3.display()

// //setting the property of class object
// //1)outside the class
// //2) at the time of object creation
// //3)set method

// //Now ,set method
// class Person4{
//     setAge(a){
//         this.age=a
//     }
//     setFullName(b){
//         this.fullName=b
//     }
//     setRollNumber(c){
//         this.RollNumber=c
//     }
// }
// let amol4=new Person4()
// console.log(amol4)
// amol4.Age(12)
// console.log(amol4)
// amol4.FullName("shubham sanjay keche")
// console.log(amol4)
// amol4.RollNumber(33)
// console.log(amol4)



//another example (bank)//
//accName,accNo,bal
//depoist(),withdrawls(),transactions()
//last 5 transactions


class Bank {
    constructor(fn, accn, bal) {
        this.fullname = fn
        this.accountnumber = accn
        this.balance = bal
        this.transactions = []
    }
    deposit(amount) {
        this.transactions.push(amount)
        this.balance = this.balance + amount
        console.log(`the current balance is ${this.balance}`)
        return this.balance
    }
    withdrawl(amount) {
        if (this.balance > amount) {
            this.transactions.push(-amount)
            this.balance = this.balance - amount
            return this.balance
        }
        else {
            console.log(`insufficient balance`)
        }

    }


}
let shubham=new Bank("shubham keche",12,10000000)
console.log(shubham)
shubham.deposit(10000000)
console.log(shubham)
shubham.withdrawl(10000000)
console.log(shubham)





























