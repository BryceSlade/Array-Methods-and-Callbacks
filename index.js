const { program, getOuterBindingIdentifiers } = require('@babel/types')
const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
// const finals2014 = fifaData.filter(function(item){
//     return item.Year === 2014 && item.Stage === "Final";
// })

// console.log(finals2014)
// //(a) Home Team name for 2014 world cup final
// console.log("task 1a", finals2014[0]["Home Team Name"])
// //(b) Away Team name for 2014 world cup final
// console.log("task 1b", finals2014[0]["Away Team Name"])
// //(c) Home Team goals for 2014 world cup final
// console.log("task 1c", finals2014[0]["Home Team Goals"])
// //(d) Away Team goals for 2014 world cup final
// console.log("task 1d", finals2014[0]["Away Team Goals"])
// //(e) Winner of 2014 world cup final */
// console.log("task 1e", finals2014[0]["Win conditions"])





//---------------------- HOW TO WRITE ARROW FUNCTION ----------------------
//
// EX: const calc = function(num1, num2, operator){    // <------ Regular function syntax
//       return operator(num1, num2);
// }
//
//     const calc = (num1, num2, operator) => operator(num1, num2)     //  <------- Arrow function
//
// Return statement is implied after the "fat arrow" (=>). You can write the return statement after the arrow. Must console.log to see in console. 
//
//--------------------------------------------------------------------------



//------------------ WHAT IS A CALLBACK FUNCTION/HIGH ORDER FUNCTION? ------------------------
// In my own words, to better understand - A callback function is a function that is plugged into a higher function (Higher Order Function). 
// The HOF is essentially a program, a set of instructions. The callback function plugs in specific orders.
// When the HOF function is invoked, the parameters are plugged in (console.log).
//--------------------------------------------------------------------------------------------


//-------------------- ADVANCED ARRAY METHODS ------------------------
// Use developer.mozilla.org to research more than what is listed below.
// Each array method completes its own special task. You must know what it does and how it's written before you use it. Understand each one. 
//
// For the examples, all array methods will use the below array's set of data.
//
//    const cityData = [
//        {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
//        {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
//        {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
//        {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
//    ];
//
//
//-------->  .forEach()   <---------
// Can be used to PULL data, either returning individual keys of an array or can PUSH chosen data into a new array.
//
//   cityData.forEach(function(item, index){                 // The first parameter "item" will ALWAYS be the element chosen in the original array. It can be named anything, but better to be descriptive. The second, "index" will ALWAYS be the INDEX of the ELEMENT. 
//     console.log(item.city);  // logs the cities           // This is the "normal", long way to write the function. 
//     console.log(index);      // logs the index of each city
//   });
  
//   const upperCaseCities = [];
//     cityData.forEach(function(item){                  // This function is pushing the called data into a new array, hence declaring and calling a new array. 
//     upperCaseCities.push(item.city.toUpperCase());    // This is the "normal", long way to write a function 
//   });
//
//   const upperCaseCities = [];
//   cityData.forEach(item => upperCaseCities.push(item.city.toUpperCase()));   // <------ Arrow function syntax of second example, drop function and curly braces, add fat arrow and "return" after. 
//   console.log(upperCaseCities)                                               // logs all cities into an array in uppercase
//
//
//--------->  .map()  <----------
// Used for CONVERTING data in an array and pushes the CHOSEN data into a NEW array automatically.
// There is no need to .push, however, a variable for the array needs to be declared. NEEDS a return statement.
//
//   const upperCaseCities = cityData.map(function(item){
//     return item.city.toUpperCase();                        // This is the "normal", long way to write a function 
//   });
//     console.log(upperCaseCities)
//
//   const upperCaseCities = cityData.map(item => item.city.toUpperCase());    // <----- Arrow function syntax    
//   console.log(upperCaseCities)
//
//
//-------->  .filter()  <--------
// Used to FILTER data in an array and returns a new array like .map(). It filters, pushes chosen data into a new array based on something that could be true or false. NEEDS a return statement.
//
//  const bigPops = cityData.filter(function(item)){               // This is the "normal", long way to write a function 
//    return item.population > 500000;                             // .filter() CANNOT target and log a specific value for a key, however, .map() can. 
//  }
//    console.log(bigPops)    // logs all ITEMS, not  with population above 500k.
//
//  const bigPops = cityData.filter(item => item.population > 500000);    // <----- Arrow function syntax
//
//
//--------> .reduce() <--------- MOST CONFUSING
// Used essentially to configure math in the array (ex: sum of population). It REQUIRES two arguments - first one is (acc)umulator (previous value before it continues math), second is the current value.
// The INITIAL VALUE is placed at the end of the function (see below). 1 for multiplication, 0 for addition. 
// It returns a single value, not an array. 
//
//  const totalLandArea = cityData.reduce(function(acc, item){                  // This is the "normal", long way to write a function 
//     return acc + item.land_area;
//  },0);
//     console.log(totalLandArea)   // logs total land area of all items. Under the hood, this is going step by step adding all of them starting at the initial value, 0. 
//
//   const totalLandArea = cityData.reduce((acc, item) => acc + item.land_area,0);  // <------ Arrow function syntax - (acc, item) must be in parens because there are two arguments. Only one, no parens. 
//
//
//--------------------- SEE BELOW FOR MORE COMPLICATED EXAMPLES OF USING THESE ADVANCED METHODS ---------------------------





/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/






function getFinals(data) {                              // data is the array that this function is using. In this case, fifaData.
   const allFinals = data.filter(function(item){        
       return item.Stage === "Final"
   })
   return allFinals
}

// console.log(getFinals(fifaData))






/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/



function getYears(array, getFinalscb) {
    return getFinalscb(array).map(item => item.Year)
}

// console.log(getYears(fifaData, getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 



function getWinners(array, getFinalscb) {
    return getFinalscb(array).map(item => item.["Home Team Goals"] > item["Away Team Goals"] ? 
    item["Home Team Name"] : item["Away Team Name"])
}

// console.log(getWinners(fifaData, getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getYearscb, getWinnerscb) {
    const winners = getWinnerscb(array, getFinals)
    const years = getYearscb(array, getFinals)
    return winners.map((item, index) => `In ${years[index]}, ${item} won the world cup!`);
}

// console.log(getWinnersByYear(fifaData, getYears, getWinners))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 //.toFixed(2)
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(array) {
   const homeGoals = array.reduce(function(acc, item){
       return acc + item["Home Team Goals"] + item["Away Team Goals"]
   }, 0)
   return (homeGoals / array.length).toFixed(2)
}

// console.log(getAverageGoals(fifaData))


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
