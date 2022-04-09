// Operatory arytmetyczne

let x = 14;

x++;
x++;
x++;

console.log(`Inkrementacja: ${x}`);

x--;
console.log(x);

const modulo = 14 % 4;
console.log(`Wynik to 2. Sprawdzenie: ${modulo}`);

let z = 10;
let c = 5;

z = z + c;
console.log(z);

z += c;
console.log(`Wynik to 20. Sprawdzenie ${z}`);

let number = "10";
const newNumber = (number += 10);
console.log(`Tutaj wynik będzie 1010. Sprawdznie: ${newNumber}`);

// Porównanie zawartości

console.log(10 == "10");

// Porównanie zawartości i typu

console.log(10 === "10");

// Operatory logiczne
// operator i
if (10 > 4 && 2 < 9) {
	console.log(`👍`);
} else {
	console.log(`👎`);
}
// operator lub
if (16 == "16" || "tomek" == "tomek") {
	console.log(`👍`);
} else {
	console.log(`👎`);
}

// Instrukcje warunkowe

const password = "hsiudhsaiudhi12321";

if (password.length > 14) {
	console.log(`Masz dobre hasło`);
} else {
	console.log(`Złe hasło. Proszę o zmianę`);
}

const numCheck = 10;

if (numCheck > 5) {
	if (numCheck % 2 == 0) {
		console.log(`Liczba parzysta większa niż 5`);
	} else {
		console.log(`Liczba nieprarzysta`);
	}
} else {
	console.log(`Warunek nie został spełniony`);
}

const pass = "2u7sad979879";

if (pass.length > 10 && pass.includes("!")) {
	console.log(`Masz rewlacyjne hasło`);
} else if (pass.length > 10) {
	console.log(`Masz dobre hasło`);
} else {
	console.log(`Masz za krótkie hasło`);
}

let day = "piątek";

// SWITCH

switch (day) {
	case "poniedziałek":
		console.log(`Dziś jest poniedziałek`);
		break;
	case "wtorek":
		console.log(`Dziś jest wtorek`);
		break;
	case "środa":
		console.log(`Dziś jest środa`);
		break;
	case "czwartek":
		console.log(`Dziś jest czwartek`);
		break;
	case "piątek":
		console.log(`Dziś jest piątek`);
		break;
	default:
		console.log(`Dziś jest weekend 😆`);
}

// Zadania 1

const p = 50;
const i = 30;

if (p > i) {
	console.log(`50 jest większe niż 30`);
} else {
	console.log(`Nie jest!`);
}

// Zadania 2

const nextcolor = "blue 🐋";
const twocolor = "green🐸";

if (nextcolor == twocolor) {
	console.log(`Kolor jest taki sam`);
} else {
	console.log(`Kolor jest inny`);
}

// Zadania 3

const v = 100;
const w = 80;

if (v > w) {
	console.log(`${v} jest > od ${w}`);
} else if (v === w) {
	console.log(`${v} == ${w}`);
} else console.log(`${v} jest < od ${w}`);

// Zadania 4

let discount = "20%";

switch (discount) {
	case "20%":
		console.log(`Dziś mamy 20% zniżki`);
		break;
	case "50%":
		console.log(`Dziś mamy 50% zniżlki`);
		break;
	case "70%":
		console.log(`Dziś mamy 70% zniżki`);
		break;
	default:
		console.log(`Nie mamy zniżki😮`);
}

// Zadania 5

const numbercheckX = 12;
if (numbercheckX % 2 == 0) {
	console.log(`Liczba jest parzysta`);
} else {
	console.log(`Liczba nieparzysta`);
}

// Zadania 6

const numerf = 14;
let text;

if (numerf >= 100) {
	text = `${numerf} jest większe bądz równe 100`;
} else if (30 < numerf && numerf < 100) {
	text = `Liczba jest średnia`;
} else if (30 >= numerf) {
	text = `Mały`;
}

console.log(text.toUpperCase());
