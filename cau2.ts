class student {
    id : number
    age : number
    email : string
    constructor(id:number , age:number , email:string){
        this.id = id
        this.age = age
        this.email = email
    }
}

let Students = [];
let std1 = new student(1, 20 , "email1.com");
let std2 = new student(2, 21 , "email2.com");
Students.push(std1 , std2);
console.log(Students);
