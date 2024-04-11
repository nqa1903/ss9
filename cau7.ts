class circle {
    private radius : number
    constructor(radius : number){
        this.radius = radius;
    }
    get radius_value():number{
        return this.radius;
    }
    set radius_value(value:number){
        this.radius = value;
    }
    perimeter_of_circle():number{
        return this.radius * 2 * Math.PI;
    }
    area_of_circle():number{
        return this.radius * this.radius * Math.PI
    }
}
let circle1 = new circle(5);
console.log(circle1.perimeter_of_circle());
console.log(circle1.area_of_circle());

