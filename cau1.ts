class vehicle {
    name : string
    year : number
    company : string
    constructor(name:string, year:number , company:string){
        this.name = name
        this.year = year
        this.company = company
    }
}

let car1 = new vehicle("mitsibushi" , 2003 , "Japan");
let car2 = new vehicle("Toyato" , 2012 , "Japan");
console.log(`${car1.name} was made in ${car1.year} in ${car1.company}`);
console.log(`${car2.name} was made in ${car2.year} in ${car2.company}`);
