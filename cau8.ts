class rectangle {
    private width : number
    private height : number
    constructor(width : number , height : number){
        this.width = width;
        this.height = height;
    }
    get width_and_height():number{
        return this.width;
        return this.height;
    }
    set width_value(value:number){
        this.width = value;
    }
    set height_value(value:number){
        this.height = value;
    }
    perimeter_of_rectangle():number{
        return (this.width + this.height)*2;
    }
    area_of_rectangle():number{
        return this.width * this.height;
    }
}
let rectangle1 = new rectangle(15,10);
console.log(rectangle1.perimeter_of_rectangle());
console.log(rectangle1.area_of_rectangle());

