/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
let car = new Object()

function Cars (make, model, year, drive, brake, park) {
  this.make = make
  this.model = model
  this.year = year
  this.drive = drive
  this.brake = brake
  this.park = park
}
var car1 = new Cars('Toyota', 'land cruiser', 2018, true, false, false)
var car2 = new Cars('Nissan', 'maxima', 2018, true, true, false)
var car3 = new Cars('Ford', 'taurus', 2018, false, false, true)
console.log(car1)
console.log(car2)
console.log(car3)
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  var pet_owner;

  // Answer Starts Here
  pet_owner = [
              {name: "Ali",address: "King Fahad Road 3980, Riyadh"},
              {name: "Ahmad",address: "King Abdullah Road 7865, Riyadh"},
              {name: "Sara",address: "King Abduaziz Road 0998, Riyadh"}]
  console.log(pet_owner)
  // Answer Ends Here
  
  // 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.
  
    // Pet
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'pet' has:
    // - a name
    // - a species
    // - a breed
    // - a noise that it can make (e.g. 'bark', 'meow', etc.)
    // Every pet can:
    // - make noise (each pet makes its own unique noise, as specified by `noise`.
  
  var some_pet;
  
  // Answer Starts Here
  some_pet = [
              {name: "tom", species: "cat", breed:"Himalayan", noise: 'meow'},
              {name: "jack", species: "dog", breed:"Golden Retriever", noise: 'bark'},
              {name: "nars", species: "parrot", breed:"Grey parrot", noise: 'talk'}]
  console.log(some_pet)
  // Answer Ends Here
  
  // 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
  //    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
  //    which behaves as described in Q3.
  
  var Pet;
  // Answer Starts Here
  function Pet(name, species, breed, noise){
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.noise = noise;
    this.makeNoise = function(){
      if(this.species ==="cat"){
       return 'meooowwwww'
      } 
      else if(this.species ==="dog"){
        return 'baaark'
      }
      else if(this.species ==="parrot"){
        return 'kaak kaak'
      }
    }  
  }
  var pet1 = new Pet("nanssi", "cat", "Persian",'meow')
  console.log(pet1 + pet1.makeNoise())
  // Answer Ends Here
  
  module.exports = {
    answerTwo: pet_owner,
    answerThree: some_pet,
    answerFour: Pet
  }
  
  /////////////////////////////////////////////////////////////
  
  // You're done! Refer back to README.md.
  
  /////////////////////////////////////////////////////////////
