//1.Hamster
class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

class Person {
    constructor(name,age,height,weight,mood,hamsters,bankAccount){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }
// 1.Instantiate a new Person named Timmy
let timmy = new Person('Timmy')
console.log(timmy)
// 2.Age Timmy five years
//let TimmyAge = new Person('Timmy',5)
timmy.age = 5
console.log(timmy)

// 3.At this point Timmy's a little bummed. As a precocious child, 
//he feels he's "seen it all" already. Have him eat five times.

for(let i=1; i<=5 ; i++){
  timmy.eat() 
}
console.log(timmy)

// 4.Now Timmy's a little heavier than he wants to be. 
//Kindergarten's coming up and he wants to look good. Have him exercise five times
for(let i=1; i<=5 ; i++){
  timmy.exercise() 
}
console.log(timmy)

// 5.Age Timmy 9 years
timmy.age = 9
// 6.Create a hamster named "Gus"
let hamster = new Hamster("Gus")

console.log(timmy)
// 7.Set Gus's owner to the string "Timmy"
hamster.owner = timmy.name
console.log(timmy)
// 8.Have Timmy "buy" Gus
timmy.buyHamster(hamster)
console.log(timmy)
// 9.Age Timmy 15 years
timmy.age = 15
// 10.Have Timmy eat twice
timmy.eat()
timmy.eat()

// 11.Have Timmy exercise twice
timmy.exercise()
timmy.exercise()
console.log(timmy)


//2.Chef Make Dinners
class Dinner {
    constructor(appetizer,entree,dessert){ // Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
        
    }
  

}
// Chef should be a factory of Dinner
class Chef {
 getDinner(appetizer,entree,dessert){
    return new Dinner(appetizer, entree, dessert)
 }
  
}
// Have the Chef create 3 dinners, log the dinners
let chef = new Chef() //Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
let dinner1 = chef.getDinner("Grilled Shrimp","Smothered Chicken","Big Ol' Brownie")
let dinner2 = chef.getDinner("Rattle Snake Bites","Grilled Salmon","Pista Caramel Crunch")
let dinner3 = chef.getDinner("Smoked Wings","Roadhouse Kebab","Lil' Ranger Dessert")
console.log(dinner1)
console.log(dinner2)
console.log(dinner3)




