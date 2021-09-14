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

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
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
