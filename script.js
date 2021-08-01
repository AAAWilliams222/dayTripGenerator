let userChoice = [];

let destination = ["Fiji", "Ireland", "Greece", "Brazil"];
let restaurant = ["PF Chang's", "Outback Steakhouse", "Olive Garden", "Red Lobster"];
let transportation = ["Private Jet", "Tesla", "Yacht", "Mountian Bike"];
let entertainment = ["Movie", "Concert", "Sporting Event", "Netflix and Hangout, lol"];


let randomDestination = destination[Math.floor(Math.random() * destination.length)];
  userChoice.push(randomDestination);

let randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)];
    userChoice.push(randomRestaurant);

let randomTransportation = transportation[Math.floor(Math.random() * transportation.length)];
    userChoice.push(randomTransportation);

let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
    userChoice.push(randomEntertainment);
  console.log(userChoice);

  function dayTripGenerator(){
    let destination = ["Fiji", "Ireland", "Greece", "Brazil"];
    let randomDestination = destination[Math.floor(Math.random() * destination.length)];
      userChoice[0] = randomDestination;
    let restaurant = ["PF Chang's", "Outback Steakhouse", "Olive Garden", "Red Lobster"];
    let randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)];
        userChoice[1] = randomRestaurant;
    let transportation = ["Private Jet", "Tesla", "Yacht", "Mountain Bike"];
    let randomTransportation = transportation[Math.floor(Math.random() * transportation.length)];
        userChoice[2] = randomTransportation;;
    let entertainment = ["Movie", "Concert", "Sporting Event", "Netflix and Hangout, lol"];
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
        userChoice[3] = randomEntertainment;;
      console.log(userChoice);
    }

    let userAgrees = "yes"; 
let output = false;

while(output === false){
    let input = prompt("Are you happy with your choices? yes or no")
    if(input === userAgrees){
        output = true;
        console.log("Please enjoy yourself!");
    }else{
        dayTripGenerator()
        console.log("Please choose again.");
    }
}