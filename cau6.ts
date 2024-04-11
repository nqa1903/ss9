class song{
    public readonly id : number
    private name : string
    private length : number
    constructor(id : number, name : string , length : number){
        this.id = id;
        this.name = name;
        this.length = length;
    }
    get song_name_and_length(){
        return this.name + this.length;
    }
    set song_name(name:string){
        this.name = name;
    }
    set song_length(length:number){
        this.length = length;
    }
}
let song1 = new song(1,"ii hands ii heaven" , 90);
console.log(song1.song_name_and_length);
song1.song_name = "cowboy cater";
song1.song_length = 120;
console.log(song1.song_name_and_length);


