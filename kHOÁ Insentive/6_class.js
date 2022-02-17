class car{
    name;
    speed;
    brand;
    color;
    constructor(name, speed, brand, color){
        this.name = name;
        this.speed = speed;
        this.brand = brand;
        this.color = color;
    }
    drive(){
        console.log(this.name + 'is driving at ' + this.speed + ' km/h ');
    }
}

const fendy = new car('Audy', 350, 'Audy', "Dark");
const fendy2 = new car('BMW' , 500, 'BMW' , "Gray");
fendy.drive();