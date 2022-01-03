class Person2{
    constructor(fn,ag,rn){
        this.fullname=fn
        this.age=ag
        this.rollno=rn
    }
    display(){
        console.log(this.fullname)
    }
}
let amol3=new Person2("amol patil",23,45)
console.log(amol3)
amol3.display()
//retrive
//update
//add
//delete
//............................................>
//SET METHOD
class Person4{
    setfullname(a){
        this.fullname=a
    }
    setage(b){
        this.age=b
    }
    setrollno(c){
        this.rollno=c
    }

}
let shubham3=new Person4()
console.log(shubham3)
shubham3.fullname="shubham sanjay keche"
console.log(shubham3)




