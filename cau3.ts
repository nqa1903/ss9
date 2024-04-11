class employee {
    public name:string
    protected company:string
    private phone:string
    constructor(name:string , company:string , phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():string{
        return "employee: " + this.name + "work in " + this.company + "has phone number : " + this.phone;
    }
}

let employee1 = new employee('A' , "B" , "123");
employee1.printInfo();