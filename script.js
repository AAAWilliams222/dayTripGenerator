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