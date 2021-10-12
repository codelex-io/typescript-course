export {};
// console.log() -------------------------------------------------------

console.log("Sveika pasaule!");
console.log(55);
console.log(55 + 10 - 18 + 6);
console.log("Man patīk", "skriet");
console.log("Šis ir", 2021, "gads");

const currentYear: number = 2021;
console.log(currentYear);
console.log("Šis ir", currentYear, "gads");

const currentYearText: string = "Šis ir";
console.log(currentYearText, currentYear);

// const --------------------------------------------------------------

// console.log(nextYear);
const nextYear: number = 2022;
const celebration: string = "Jaunais gads";
const isNewYear: boolean = true;

console.log(nextYear);

// celebration = "Jāņi";

// const isNewYear: boolean = false;

// let ---------------------------------------------------------------

let description: string | number = "Skaista vāze!";

description = "Ļoti skaista vāze";
console.log(description);

description = "Kaķis";
console.log(description);

description = 5;
console.log(description);

// let description;

let vegetable: string;
// console.log(vegetable);

vegetable = "Gurķis";
console.log(vegetable);

// var ----------------------------------------------------------------

var greeter: string = "hello";
var greeter: string = "hello hello";

greeter = "hey hi";

console.log(greeter);

if (4 < 5) {
  var greeter: string = "say Hello instead";
}

console.log(greeter);

// String concat ------------------------------------------------------
console.log("Harijs Poters(27) ir burvis");

const poterName: string = "Harijs Poters";
const poterAge: number = 27;
const poterOccupation: string = "burvis";

const introFirst: string =
  poterName + "(" + poterAge + ")" + " ir " + poterOccupation;
console.log(introFirst);

const introSecond: string = `${poterName}(${poterAge}) ir ${poterOccupation}`;
console.log(introSecond);

const introThird: string = poterName.concat(
  "(",
  "" + poterAge,
  ") ir ",
  poterOccupation
);
console.log(introThird);

// String methods) --------------------------------------------------------------

const id: string = "12345";

const idAsNumberFirst: number = Number(id);
console.log(idAsNumberFirst);
// console.log(typeof idAsNumberFirst);

const idAsNumberSecond: number = parseInt(id, 10);
console.log(idAsNumberSecond);
// console.log(typeof idAsNumberSecond);

const idAsNumberThird: number = +id;
console.log(idAsNumberThird);

const lowerCaseWord: string = "panna";
const upperCaseWord: string = lowerCaseWord.toUpperCase();
console.log(upperCaseWord);

const firstChar: string = upperCaseWord.charAt(0);
console.log(firstChar);

console.log(lowerCaseWord.length);

const newLowerCaseWord: string = lowerCaseWord.replace("panna", "v");
console.log(newLowerCaseWord);

const longSentence: string = "Sveiki mani sauc Harijs Poters";
const shortSentence: string = longSentence.slice(17, 30);
console.log(shortSentence);

const whiteSpaceWord: string = "     Hello    ";
console.log(whiteSpaceWord);

const noWhiteSpaceWord: string = whiteSpaceWord.trim();
console.log(noWhiteSpaceWord);

// Number -------------------------------------------------------------------------
const price: number = 3.96873;
const twenty: number = 20;

console.log("" + price);
console.log(String(price));
console.log(`${5}`);
console.log(twenty.toString());

let result: number;

result = price + twenty;
console.log(result);

result = price * twenty;
console.log(result);

result = Math.floor(price);
console.log(result);

result = Math.round(price);
console.log(result);

result = Number(price.toFixed(2));
console.log(result);

let mindBlown: number = 1;

mindBlown = mindBlown + 1; // 2
console.log(mindBlown);

mindBlown++; // 3
console.log(mindBlown);

mindBlown = mindBlown - 1; // 2
console.log(mindBlown);

mindBlown--; // 1
console.log(mindBlown);

mindBlown = mindBlown + 7; // 8
console.log(mindBlown);

mindBlown += 7; // 15
console.log(mindBlown);

mindBlown -= 7; // 8
console.log(mindBlown);

mindBlown = mindBlown * 10; //80
console.log(mindBlown);

mindBlown *= 10; // 800
console.log(mindBlown);

// Boolean --------------------------------------------------------------------------
const truthyValue: boolean = true;
const falsyValue: boolean = false;

console.log(Boolean(0)); // false
console.log(Boolean(456)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); // false

const dog: string = "Duksis";
console.log(!!dog);
console.log(!!0);
console.log(!!55);

const comparison: boolean = 7 > 5;
console.log(comparison);

console.log(10 < 5);

console.log(100 <= 20);

console.log(!false);

const isCat: boolean = false;
const isDog: boolean = !isCat;
console.log(isDog);

// == and === --------------------------------------------------------

let five: any = "5";

console.log(5 == 5);
console.log(five == 5); // true

console.log(five + 100);

console.log(5 === 5);
console.log(five === 5);

const goodDay: string = "Laba diena";
console.log(goodDay.length === 11);
console.log(goodDay.length);

// Logical operators ------------------------------------------------------------------

const trueOrTrueBoolean: boolean = Boolean("Friend" || "Enemy");
console.log(trueOrTrueBoolean);

const trueOrTrueExample: string = "Friend" || "Enemy";
console.log(trueOrTrueExample);

const trueOrFalseBoolean: boolean = !!("Friend" || undefined);
console.log(trueOrFalseBoolean);

const trueOrFalseExample: string = "Friend" || undefined;
console.log(trueOrFalseExample);

const falseOrTrueBoolean: boolean = !!(undefined || "Friend");
console.log(falseOrTrueBoolean);

const falseOrTrueExample: string = undefined || "Friend";
console.log(falseOrTrueExample);

const falseOrFalseBoolean: boolean = !!(0 || undefined);
console.log(falseOrFalseBoolean);

const falseOrFalseExample: number | undefined = 0 || undefined;
console.log(falseOrFalseExample);

const trueAndTrueBoolean: boolean = !!("Friend" && "Enemy");
console.log(trueAndTrueBoolean);

const trueAndTrueExample: string = "Friend" && "Enemy";
console.log(trueAndTrueExample);

// If, else if, else -----------------------------------------------------------------------------
const truth: boolean = true;

if (truth) {
  console.log("Ja ir true, tad notiek šis");
}

if (!truth) {
  console.log("Ja ir false, tad notiek šis");
}

let time: number = 10;

if (time > 3 || time < 5) {
  console.log("time ir lielāks par 3 vai mazāks par 5");
} else {
  console.log("time nav lielāks par 3 un nav mazāks par 5");
}

if (time) {
  console.log("time ir patiesa vērtība");
} else {
  console.log("time nav patiesa vērtība");
}

/* let height: number; // undefined

if (height) {
  console.log("Ir augstums", height);
} else {
  height = 5;
}

console.log(height); */

const partyTitle: string = "Dzimšanas diena";
const guestCount: number = 10;
let isHappening: boolean;

if (partyTitle && guestCount > 100) {
  isHappening = true;
} else {
  isHappening = false;
}

console.log("Balle notiek", isHappening);

const gameIsInPogress: boolean = false;
const isGoal: boolean = true;

if (gameIsInPogress && isGoal) {
  console.log("Spēle notiek un ir vārti");
} else if (gameIsInPogress) {
  console.log("Spēle notiek, bet vārtu nav");
} else if (isGoal) {
  console.log("Spēle nenotiek, bet ir vārti");
} else {
  console.log("Spēle nenotiek un vārtu arī nav");
}

// Ternary operator ---------------------------------------------------------------------
if (10 > 5) {
  console.log("Hey");
} else {
  console.log("Hi");
}

10 > 5 ? console.log("Hey") : console.log("Hi");

const tomato: string = "Tomāts";
let total: number;

if (tomato === "Tomāts") {
  total = 10;
} else {
  total = 0;
}

total = tomato === "Tomāts" ? 10 : 0;

console.log(total);

isHappening = partyTitle && guestCount > 100 ? true : false;

// Switch statement --------------------------------------------------------------------
let fruit: string = "Apelsīns";

switch (fruit) {
  case "Banāns":
    console.log("Tas ir banāns");
    break;
  case "Mandarīns":
  case "Apelsīns":
    console.log("Tulīt būs Ziemassvētki");
    break;
  default:
    console.log("Tas nav neviens no dotajiem");
}

let keyCode: number = 38;

switch (keyCode) {
  case 37:
    console.log("Pa kreisi");
    break;
  case 38:
    console.log("Uz augšu");
    break;
  case 39:
    console.log("Pa labi");
    break;
  case 40:
    console.log("Uz leju");
    break;
}

// Arrays --------------------------------------------------------------------

const fruits: string[] = ["Melone", "Banāns", "Kivī"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);
console.log(["Kaķis"] === ["Kaķis"]);
console.log(fruits === fruits);

fruits.push("Citrons");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Citrons");
console.log(fruits);

const bananaIndex: number = fruits.indexOf("Banāns");
console.log(bananaIndex);

fruits.splice(1, 1);
console.log(fruits);

const fruitsSliced: string[] = fruits.slice(0, 1);
console.log(fruitsSliced);
console.log(fruits);

const fruitsJoined: string = fruits.join("-");
console.log(fruitsJoined);

// Spread operator -------------------------------------------------------------------

const people: string[] = ["Anna", "Baiba", "Jānis", "Pēteris"];
const colors: string[] = ["Red", "Green", "Blue"];

const colorsCopy: string[] = colors;

colorsCopy.pop();
console.log(colorsCopy);
console.log(colors);

const peopleCopy: string[] = [...people];
peopleCopy.pop();
console.log(peopleCopy);
console.log(people);

const peopleCopySecond: string[] = [...people, "Gatis", "Sabīne"];
console.log(peopleCopySecond);

const colorsAndPeople: string[] = colors.concat(people);
console.log(colorsAndPeople);

const colorsAndPeopleSecond: string[] = [...colors, ...people];
console.log(colorsAndPeopleSecond);

const colorIds: number[] = [1, 2, 3, 4];
const reversedColorIds: number[] = colorIds.reverse();
console.log(reversedColorIds);

// For loop -------------------------------------------------------------------

for (let i = 1; i < 6; i++) {
  console.log(i);
}

const n: number = 5;

for (let i = 1; i <= n; i++) {
  console.log("Čau");
}

const vegetables: string[] = ["Tomāts", "Gurķis", "Kāposts"];

for (let i = 0; i <= vegetables.length - 1; i++) {
  console.log(vegetables[i]);
}

let sum: number = 0;

for (let i = 1; i <= 3; i++) {
  sum = sum + i;
  console.log(sum);
}

console.log(sum);

const numbers: number[] = [10, 100, 200, 35, 440, 5];
const bigNumbers: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 100) {
    bigNumbers.push(numbers[i]);
  }
}

console.log(bigNumbers);

// While, do while loop -----------------------------------------------------------------

let i: number = 1;

while (i < 4) {
  console.log(i);
  i++;
}

let numberArray: number[] = [];
i = 0;

while (i <= 4) {
  numberArray.push(i);
  i++;
}

console.log(numberArray);

i = 0;

do {
  numberArray.push(i);
  i++;
} while (i <= 10);

console.log(numberArray);

i = 0;

do {
  i++;
  console.log(i);
} while (i <= 10);

// Functions ------------------------------------------------------------------------

logFivePlusSeven();

function logFivePlusSeven(): void {
  console.log(5 + 7);
}

logFivePlusSeven();
logFivePlusSeven();

function add(a: number, b: number): number {
  return a + b;
}

const sixPlusNine: number = add(6, 9);
console.log(sixPlusNine);
console.log(add(100, 60));

function congratulate(name: string, prize: number): void {
  const congratsText = `Apsveicam, ${name}. Tu vinnēji ${prize}`;
  console.log(congratsText);
}

congratulate("Hermione", 1000);
congratulate("Hagrids", 5000);

// sayHello();
const sayHello = function (): void {
  console.log("Čau");
};

sayHello();
sayHello();
sayHello();

const square = function (a: number): number {
  return a * a;
};

const fiveSquared: number = square(5);
console.log(fiveSquared);
console.log(square(8));

const halve = function (a: number): number | string {
  if (a % 2 === 0) {
    return a / 2;
  } else {
    return "Skaitlis nav pāra";
  }
};

console.log(halve(10));
console.log(halve(13));

// Arrow functions -----------------------------------------------------------

function subtractFirst(a: number, b: number): number {
  return a - b;
}

const subtractSecond = function (a: number, b: number): number {
  return a - b;
};

const subtractThird = (a: number, b: number): number => {
  return a - b;
};

const subtractFourth = (a: number, b: number): number => a - b;

console.log(subtractFourth(20, 8));

const checkIfContainsCat = (sentence: string): boolean =>
  sentence.includes("kaķis");

console.log(checkIfContainsCat("Man mājās ir kaķis"));
console.log(checkIfContainsCat("Man ir suns"));

if (checkIfContainsCat("Man ir kaķis")) {
  console.log("Ir kaķis");
} else {
  console.log("Nav kaķa");
}

const subtractConditional = (a: number, b: number): number =>
  a > b ? a - b : b - a;

console.log(subtractConditional(10, 6));
console.log(subtractConditional(3, 10));

const multiply = (a: number, b: number) => a * b;
console.log(multiply(3, 2));

const humanNames: string[] = ["Baiba", "Aija", "Centis"];

const getFirstLetters = (names: string[]): string => {
  let result: string = "";

  names.forEach((name) => {
    result = result + name.charAt(0);
  });

  return result;
};

console.log(getFirstLetters(humanNames));

// Objects ----------------------------------------------------------

interface Person {
  id: number;
  name: string;
  "last-name": string;
  isWizard: boolean;
  friends: string[];
  contactInfo: ContactInfo;
  enemies: Enemy[];
  sayHi: () => void;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface Enemy {
  id: number;
  name: string;
}

const person: Person = {
  id: 1,
  name: "Harijs",
  "last-name": "Poters",
  isWizard: true,
  friends: ["Hermione", "Rons", "Hagrids"],
  contactInfo: {
    email: "badass.wizard@inbox.lv",
    phone: "222 333 444",
  },
  enemies: [
    {
      id: 1,
      name: "Voldemors",
    },
  ],
  sayHi: () => console.log("Čau"),
};

console.log(person.name);
console.log(person.id);
console.log(person.friends);
console.log(person.contactInfo.email);
console.log(person.enemies[0].name);
console.log(person["last-name"]);

person.sayHi();

// Object methods --------------------------------------------------------------

interface BlogPost {
  id: number;
  title: string;
  description: string;
  rating?: number;
}

const blogPost: BlogPost = {
  id: 1,
  title: "Labākā diena šogad",
  description: "Šodien bija mana dzimšanas diena",
};

const blogKeys: string[] = Object.keys(blogPost);
console.log(blogKeys);

const blogValues: (string | number)[] = Object.values(blogPost);
console.log(blogValues);

const blogEntries: (string | number)[][] = Object.entries(blogPost);
console.log(blogEntries);

console.log({} === {});
console.log(blogPost === blogPost);

blogPost.title = "Laba diena";
console.log(blogPost);

const blogPostCopy: BlogPost = { ...blogPost, rating: 7.5 };
console.log(blogPostCopy);

blogPost.rating = 9.5;
console.log(blogPost);

// map() -------------------------------------------------------------

const naturalNumbers: number[] = [1, 2, 3];
let doubles: number[] = [];

for (let i = 0; i < naturalNumbers.length; i++) {
  doubles.push(naturalNumbers[i] * 2);
}

console.log(doubles);

doubles = naturalNumbers.map((it) => it * 2);
console.log(doubles);

const triples: number[] = naturalNumbers.map((it) => it * 3);
console.log(triples);

const alphabet: string[] = ["A", "B", "C", "D"];

const alphabetSmall: string[] = alphabet.map((letter) => letter.toLowerCase());

console.log(alphabetSmall);

interface Player {
  name: string;
  wins: number;
  losses: number;
  score?: number;
}

const players: Player[] = [
  {
    name: "Bonija",
    wins: 5,
    losses: 2,
  },
  {
    name: "Klaids",
    wins: 6,
    losses: 5,
  },
];

const playerNames: string[] = players.map((player) => player.name);
console.log(playerNames);

const playerWins: number[] = players.map((player) => player.wins);
console.log(playerWins);

const playersWithScore: Player[] = players.map((player) => {
  return { ...player, score: player.wins - player.losses };
});
console.log(playersWithScore);

// Filter --------------------------------------------------------------------

const randomNumbers: number[] = [45, 28, 1, 2, 3, 100];

const randomNumbersFiltered: number[] = randomNumbers.filter((randomNumber) => {
  return randomNumber > 5;
});
console.log(randomNumbersFiltered);

const words: string[] = ["Limits", "Elite", "Saulessargs", "Lietussargs"];

const longWords: string[] = words.filter((word) => word.length > 6);
console.log(longWords);

interface ShopItem {
  id: number;
  title: string;
  isAvailable: boolean;
  type: string;
}

const shopItems: ShopItem[] = [
  {
    id: 1,
    title: "Grāmata",
    isAvailable: false,
    type: "books",
  },
  {
    id: 2,
    title: "Televizors",
    isAvailable: true,
    type: "electronics",
  },
];

const findShopItems: ShopItem[] = shopItems.filter(
  (shopItem) => shopItem.id !== 1
);
console.log(findShopItems);

const availableItems: ShopItem[] = shopItems.filter(
  (shopItem) => shopItem.isAvailable === true
);
console.log(availableItems);

// forEach() ----------------------------------------------------------------------------

const smallLetters: string[] = ["a", "b", "c"];

for (let i = 0; i < smallLetters.length; i++) {
  console.log(smallLetters[i]);
}

smallLetters.forEach((letter) => console.log(letter));

interface FoodItem {
  name: string;
  ingredients: string[];
}

const foodItems: FoodItem[] = [
  { name: "Pica", ingredients: ["Mīkla", "Kečups", "Siers"] },
  { name: "Burgeris", ingredients: ["Maize", "Kotlete"] },
  { name: "Pasta", ingredients: ["Makaroni"] },
];

foodItems.forEach((foodItem, i) => {
  console.log("Indekss", i, "Nosaukums", foodItem.name);
});

for (let i = 0; i < foodItems.length; i++) {
  const food = foodItems[i];
  for (let j = 0; j < food.ingredients.length; j++) {
    const ingredient = food.ingredients[j];
    console.log(ingredient);
  }
}

foodItems.forEach((foodItem) => {
  foodItem.ingredients.forEach((ingredient) => {
    console.log(ingredient);
  });
});

// sort(), find(), findIndex() ------------------------------------------------------

const heroes: string[] = ["Supermens", "Betmens", "Akvamens"];
// heroes.sort();
console.log(heroes);

const sortedHeroes: string[] = [...heroes].sort();
console.log(heroes);
console.log(sortedHeroes);

const heroIds: number[] = [10, 5, 11, 25];
heroIds.sort();
console.log(heroIds);

heroIds.sort((a, b) => a - b);
console.log(heroIds);

heroIds.sort((a, b) => b - a);
console.log(heroIds);

const batmanIndex: number = heroes.indexOf("Betmeens");
console.log(batmanIndex);

interface Human {
  name: string;
  age: number;
}

const humans: Human[] = [
  { name: "Edward", age: 107 },
  { name: "Jacob", age: 15 },
  { name: "Bella", age: 17 },
];

humans.sort((a, b) => a.age - b.age);

console.log(humans);

const edward: Human | undefined = humans.find(
  (human) => human.name === "Edward"
);

console.log(edward);

const bellaIndex: number = humans.findIndex((human) => human.name === "Bella");

console.log(bellaIndex);
