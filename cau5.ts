class department {
    public readonly id : number
    private name : string
    private employee : string[]
    constructor(id:number , name:string , employee:string[]){
        this.id = id
        this.name = name
        this.employee = employee
    }
    describe():void{
        console.log(this.id + " " + this.name);
    }
}

let department1 = new department(1,"AHA",["anh" , "quang"]);
department1.describe();