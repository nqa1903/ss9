class vehicles {
    public name : string
    protected year : number
    private company : string
    readonly id : number
    constructor(name:string, year:number , company:string , id:number){
        this.name = name
        this.year = year
        this.company = company
        this.id = id
    }
    printInfo():string{
        return this.name + " was made in " + this.year + " by " + this.company + " and " + this.id;
    }
}
let car = new vehicles("A" , 2003 , "mitsibushi" , 1);
console.log(car.printInfo());
