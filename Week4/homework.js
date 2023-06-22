class Hamster {
constructor(name) {
this.owner = ''
this.name = name
this.price = 15
}
wheelRun() {
  console.log("squeak squeak"); 
}
eatFood(){ 
  console.log("nibble nibble");
}

getPrice(){ 
  return this.price;
}
toString(){
  return ` Meet you hamster, ${this.name}, Price: ${this.price}`;
}
}

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  getWeight() {
    return this.weight
  }
  greet() {
    console.log(`Hi, ${this.name}!`);
  }

  eat() {
    this.weight +=60;
    this.mood +=50;
  }

  exercise(){
    this.weight -=10;
  }

  ageUp(){
    this.age +=1;
    this.height +=5;
    this.weight +=10;
    this.mood -=4;
    this.bankAccount+=10
  }

  buyHamster(hamster){
    this.bankAccount -= hamster.getPrice();
    this.hamsters.push(hamster);
    this.mood+=10;
  }
}

//Create story with Person Class

const boy = new Person('Timmy',5)
//Timmy eats 5 times

console.log(`At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Timmy's weight today is ${boy.getWeight()} pounds`);

for(let i=0; i<5;i++) {
  boy.eat();
  console.log(`Now Timmy's weight is ${boy.getWeight()} pounds`);
}

console.log(`Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Timmy decides to start exercising.`);

for(let i=0; i<5;i++) {
  boy.exercise();
  console.log(`Timmy has been exercising for ${i+1} month(s). Timmy now weighs ${boy.getWeight()} pounds`);
}

for(let j=0; j<9; j++) {
boy.ageUp();
}
console.log(`Time is passing quickly! Timmy is ${boy.age} years old.`);

const ham1 = new Hamster('Gus','Timmy');

console.log(`Timmy decides he wants to be responsible and buys a pet.`);
boy.buyHamster(ham1);
boy.buyHamster(ham1);

console.log(`Timmy is so excited. He gets home and reads the info card about his new friend. It says: ${ham1}`);
// boy.ageUp()*6;
// boy.eat()*2;
// boy.exercise()*2; 
console.log(`Time is passing quickly again.`);

for(let j=0; j<15; j++) {
  boy.ageUp();
  }

  console.log(`Timmy is ${boy.age} years old now!`);

  for(let i=0; i<2;i++) {
    boy.eat();
    console.log(`Now Timmy's weight is ${boy.getWeight()} pounds`);
  }
  for(let i=0; i<2;i++) {
    boy.exercise();
    console.log(`Timmy has been exercising for ${i+1} month(s). Timmy now weighs ${boy.getWeight()} pounds`);
  }

  //Chef Make Dinners

  class Dinner {
    constructor(appetizer,entree,dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
    newMenu(app,entr,dess){
      console.log(`the new menu is ${this.appetizer} with ${this.entree} and ${this.dessert}.Bon Appetite!`);
    }
  }

  class Chef {
    createDinners(){
      const dinner1 = new Dinner('Wings', 'Chicken Ceasar Salad', 'Cheesecake');
      const dinner2 = new Dinner('Samosas', 'Curry Chicken', 'Mango Lassi');
      const dinner3 = new Dinner('Egg rolls', 'General Tso\'s ','Fortune Cookie');
      
      return [dinner1, dinner2, dinner3];
    }
  }
  
  const chef = new Chef();
  const dinners = chef.createDinners();
  
  for (const dinner of dinners) {
    dinner.newMenu();
  }

