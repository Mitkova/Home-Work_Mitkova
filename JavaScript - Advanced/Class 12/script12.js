class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
    }

    
    eat(food) {
        if (food instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
                return
            // -----PROBAV NESTO VAKA, AMA NE MI USPEJA !!!----------
            // } if (this.type !== "herbivore"){
            //     food.isEaten = true
            //     console.log(`The animal ${this.name} ate the ${food.name}`)
            //     return
            // } else if  (this.size >= food.size * 2) {
            //     console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large.`)
            //     return
            // }

            } else if (this.size >= food.size * 2) {
                food.isEaten = true
                console.log(`The animal ${this.name} ate the ${food.name}`)
                return 
            } else {
                console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large.`)
                return
            
            }
        }
        console.log(`The animal ${this.name} is eating ${food}`)
    }
}


let wolf = new Animal ("Wolf", "carnivore", 5, 40);
let cow = new Animal ("Cow", "herbivore",3, 150);
let mouse = new Animal ("Mouse", "omnivore", 2, 1);

console.log(wolf);
console.log(cow);
console.log(mouse);

cow.eat(wolf)
wolf.eat(mouse)
mouse.eat(cow)