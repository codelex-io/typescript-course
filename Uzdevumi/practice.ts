export {};
/*
In this file you will find coding challenges. Add your code in designated areas.
You can find answers in answers.ts file.
Add types to all variables you create.
Command to run the file: npm run practice
*/

/*
Challenge 1 ----------------------------------------------------------------------------------
*/

/*
Declare a constant variable myName and set it's value to your name. Log myName in console.
*/

/* Add your code here */
const myName: string = "Armands";
console.log(myName);

/*
Declare a variable yourAge and set it's value to 100.
Change the value of yourAge to your age on the next line. Log yourAge in console.
*/

/* Add your code here */
let myAge: number = 100;
myAge = 23;
console.log(myAge);

/*
Declare a constant variable favouriteColor and set it's value to your favourite color.
Log favouriteColor in console.
Try to change the value or favouriteColor on next line.
Understand why it isn't working and delete it.
*/

/* Add your code here */
const favouriteColor: string = "Zila";

/*
Declare a variable favouriteFood and don't set it's value. Type string.
On the next line change favouriteFood value to your favourite food.
Log favouriteFood in console.
*/

/* Add your code here */
let favoriteFood: string;
favoriteFood = "Pankūkas";
console.log(favoriteFood);

/*
Challenge 2 ----------------------------------------------------------------------------------
*/

/*
Declare a constant variable fiftyNine and set it's value to "59".
Declare a constant variable fiftyNineAsNumber and set it's value to fiftyNine convert converted to number.
*/

/* Add your code here */
const fiftyNine: number = 59;
const fiftyNineAsNumber: number = Number(fiftyNine);

/*
Declare a constant variable food and set it's value to a random food item
Declare a constant variable randomItem and set it's value to a random item
*/

/* Add your code here */
const food: string = "Apple";
const randomItem: string = "TV";

/*
Declare a constant variable randomSentence and
set it's value to "My favorite food is {food} and I bought a new {randomItem}".
Use + symbol to construct the sentence
replacing {food} and {randomItem} with your previously declared variables.
Log randomSentence in console.
*/

/* Add your code here */
const randomSentence: string =
  "My favotite food is " + food + " and i bought a new " + randomItem;
console.log(randomSentence);

/*
Declare a constant variable randomSentenceWithLiterals
and set it's value to "My favorite food is {food} and I bought a new {randomItem}"
Use template literals to construct the sentence
replacing {food} and {randomItem} with your previously declared variables.
Log randomSentenceWithLiterals in console.
*/

/* Add your code here */
const randomSentenceWithLiterals: string = `My favorite food is ${food} and I bought a new ${randomItem}`;
console.log(randomSentenceWithLiterals);

/*
Declare a constant variable importantMessage and set it's value to "WATER THE FLOWERS!".
Declare a constant variable unimportantMessage and set it's value to importantMessage formatted
to be all lowercase letters and with no exclamation mark.
Log unimportantMessage in console.
*/

/* Add your code here */
const importantMessage: string = "WATER THE FLOWERS!";
const unimportantMessage = importantMessage.toLowerCase().replace("!", " ");
console.log(unimportantMessage);

/*
Declare a constant variable story
and set it's value to "The quick brown fox jumps over the lazy dog.".
Declare a constant variable shortStory and set it's value to story formatted
to be only "lazy dog".
Log shortSentence in console.
*/

/* Add your code here */
const story: string = "The quick brown fox jumps over the lazy dog";
const shortStory: string = story.slice(35, 43);
console.log(shortStory);

/*
Challenge 3 ----------------------------------------------------------------------------------
*/

/*
Declare a constant variable bigNumber and set it's value to 307.98765.
Declare a constant variable twelve and set it's value to 12.
Declare a variable thirdChallengeResult and don't set it's value. Type number.
Change thirdChallengeResult value on next line to equal bigNumber minus twelve.
Log thirdChallengeResult in the console.
Change thirdChallengeResult value on next line to equal bigNumber divided by twelve.
Log thirdChallengeResult in the console.
Change thirdChallengeResult value on next line to equal bigNumber rounded to a whole number (rounded down).
Log thirdChallengeResult in the console.
Change thirdChallengeResult value on next line to equal bigNumber rounded to a whole number (rounded up).
Log thirdChallengeResult in the console.
Change thirdChallengeResult value on next line to equal bigNumber rounded to 2 numbers after the decimal point.
Log thirdChallengeResult in the console.
Declare a constant variable thirdChallengeResultAsString of
type string and set it's value to result formatted as a string;
*/

/* Add your code here */
const bigNumber: number = 307.98765;
const twelve: number = 12;
let thirdChallengeResult: number;
console.log(bigNumber - twelve);
console.log(bigNumber * twelve);
thirdChallengeResult = Math.floor(bigNumber);
console.log(thirdChallengeResult);
thirdChallengeResult = Math.round(bigNumber);
console.log(thirdChallengeResult);
thirdChallengeResult = bigNumber.toFixed(2);
console.log(thirdChallengeResult);
thirdChallengeResultAsString: string = String;

/*
Challenge 4 ----------------------------------------------------------------------------------
*/

/*
Declare a constant variable isHuman and set it's value to true.
Declare a constant variable isWizard and set it's value to isHuman formatted to be the opposite value.
Log isWizard in console.
*/

/* Add your code here */
const isHuman: boolean = true;
const isWizard: boolean = !isHuman;
console.log(isWizard);

/*
Declare a constant variable five and set it's value to 5.
Declare a constant variable eleven and set it's value to 11.
Declare a constant variable isElevennPlusFiveLargerThanTen and set it's value to
a comparison of eleven plus five is larger than 10.
Log isElevenPlusFiveLargerThanTen in console.
*/

/* Add your code here */
const five: number = 5;
const eleven: number = 11;
const isElevennPlusFiveLargerThanTen = eleven + five > 10;
console.log(isElevennPlusFiveLargerThanTen);

/*
Declare a constant variable boringStory and set it's value to "This is a boring story".
Log boringStory in console formatted to a boolean value.
Log boringStory in console formatted to the opposite boolean value.
Log boringStory in console formatted to a boolean value that indicates whether boringStory includes "cat".
*/

/* Add your code here */
const boringStory: string = "This is boring story";
console.log(!!boringStory);
console.log(!boringStory);
console.log(!!boringStory.includes("Cat"));

/*
Challenge 5 ----------------------------------------------------------------------------------
*/

/*
Declare a constant variable randomFact and set it's value to "Copper door knobs are self-disinfecting.".
Log sentence length in console.
Log in console comparioson of whether sencence length is larger than 5 or larger than 20.
Log in console comparison of whether sencence length is exactly 40
and is equal to "Copper door knobs are self-disinfecting.".
*/

/* Add your code here */
const randomFact: string = "Copper door knobs are self-disinfecting";
console.log(randomFact.length);
console.log(randomFact > 5 || randomFact > 20);
console.log(
  randomFact.length === 40 && "Copper door knobs are self-disinfecting"
);

/*
Challenge 6 ----------------------------------------------------------------------------------
*/

/*
Declare a constant variable hasDriversLicense and set it's value to true.
Declare a constant variable hasGoodVision and set it's value to true.
Declare a constant variable isTired and set it's value to false.
Create an if statement and console log "Sarah is able to drive!", if Sarah has Drivers License,
has good vision and is not tired.
Else console log "Someone else should drive..."
*/

/* Add your code here */
const hasDriversLicense: boolean = true;
const hasGoodVision: boolean = true;
const isTired: boolean = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

/*
Challenge 7 ----------------------------------------------------------------------------------
*/

/*
Change the given if statement to conditional (ternary) operator
*/

const isAwesome: boolean = true;
if (isAwesome) {
  console.log("Awesome!");
} else {
  console.log("Is not awesome!");
}

/* Add your code here */
isAwesome ? console.log("Awesome") : console.log("Is not awesome");

/*
Challenge 8 ----------------------------------------------------------------------------------
*/

/*
Declare a variable myAlphabet and set its value to an array of letters A-G.
Console log the length of myAlphabet.
Console log myAlphabet formatted to be a string.
Console log myAlphabet formatted to be in the opposite order.
Console log the first element of myAlphabet.
Console log the last element of myAlphabet.
On the next line change the value of myAlphabet to have another value "Z" (use spread operator).
Console log myAlphabet.
On the next line change the value of myAlphabet to have another value "X" (use push()).
Console log myAlphabet.
*/

/* Add your code here */
let myAlphabet: string[] = ["A", "B", "C", "D", "E", "F", "G"];
console.log(myAlphabet);
console.log(myAlphabet.join(" "));
console.log(myAlphabet.reverse());
console.log(myAlphabet[0]);
console.log(myAlphabet[myAlphabet.length - 1]);
myAlphabet = [...myAlphabet, "Z"];
console.log(myAlphabet);
myAlphabet.push("X");
console.log(myAlphabet);
