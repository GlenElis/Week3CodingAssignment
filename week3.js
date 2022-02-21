//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let difference = ages[ages.length - 1] - (ages[ages.length - ages.length]);
console.log(difference);
    
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(10);
console.log(ages[ages.length - 1] - (ages[ages.length - ages.length]));


//1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
function findAverage(array){
    let average = 0;
    for (let i = 0; i < array.length; i++){
        let currentNum = array[i]
        average += currentNum;
    }
    average = average / array.length
    return average;
}
   console.log(findAverage([3, 9, 23, 64, 2, 8, 28, 93, 10]));


//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let average = 0;
for (i=0; i < names.length; i++){
    average += names[i].length;
}
console.log(average/names.length);


//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

console.log(names.join(' '));

//3. How do you access the last element of any array? array[array.length - 1]
//4. How do you access the first element of any array? array[0]


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function twoParameters(word, n){
    let space = '';
    for(let i = 0; i<= n; i++){
        space += word;
    }
    return space;
}
console.log(twoParameters("Tiny", 6));


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
createFullName("Martha", "Stewart");



//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let sumMore = 0;
for(i = 0; i < sumMore.length; i++) {
    sum = sum + sumMore[i];
}
if (sum > 100){
    console.log(true);
}else{
    console.log(false);
}


//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let y = [10, 20, 30, 40, 50];
function averageArray(y){
    let average = 0;
    for (let i = 0; i < y.length; i++){
        average += y[i].length;
    }
}
console.log(average/y.length);


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function twoArrays(a,b){
    if( average(a) > average(b)){
        return true;
    }else{
        return false;
    }
}
console.log([6, 7, 8] > [1, 2, 3]);


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
var isHotOutside = true;
var moneyInPocket = 11.00;

function willBuyDrink(isHotOutside, moneyInPocket){
    if((isHotOutside) && (moneyInPocket > 10.50)){
        return true;
    }
}
console.log(willBuyDrink(true, 11));

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
