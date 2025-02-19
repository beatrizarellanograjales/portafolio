// 1️⃣ Function that prints "¡Hola, mundo!" in the console
function greetWorld() {
    console.log("¡Hola, mundo!");
}

// 2️⃣ Function that receives a name and prints "¡Hola, [name]!" in the console
function greetByName(name) {
    console.log(`¡Hola, ${name}!`);
}

// 3️⃣ Function that receives a number and returns double that number
function doubleNumber(number) {
    return number * 2;
}

// 4️⃣ Function that receives three numbers and returns their average
function averageOfThreeNumbers(a, b, c) {
    return (a + b + c) / 3;
}

// 5️⃣ Function that receives two numbers and returns the greater one
function maxNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 6️⃣ Function that receives a number and returns the result of multiplying it by itself
function squareNumber(number) {
    return number * number;
}

// 🔹 Example usage
greetWorld(); // Prints "¡Hola, mundo!" in the console
greetByName("Carlos"); // Prints "¡Hola, Carlos!" in the console
console.log(doubleNumber(5)); // Returns 10
console.log(averageOfThreeNumbers(4, 8, 12)); // Returns 8
console.log(maxNumber(7, 3)); // Returns 7
console.log(squareNumber(6)); // Returns 36
