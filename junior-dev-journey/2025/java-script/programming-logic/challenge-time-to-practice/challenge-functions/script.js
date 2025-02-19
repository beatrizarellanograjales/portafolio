// Function to display the result on the webpage inside the element with ID "output"
function displayResult(message) {
    document.getElementById("output").innerText = message;
}

// Function that displays "¡Hola, mundo!" when called
function greetWorld() {
    displayResult("¡Hola, mundo!");
}

// Function that gets the user's name from an input field and displays a greeting
function greetByName() {
    // Get the value from the input field with ID "nameInput"
    let name = document.getElementById("nameInput").value;

    // Check if the input is empty
    if (name.trim() === "") {
        displayResult("Please enter a name."); // Display an error message if empty
    } else {
        displayResult(`¡Hola, ${name}!`); // Display the greeting with the entered name
    }
}

// Function that doubles a number entered by the user
function doubleNumber() {
    // Get the number from the input field with ID "doubleInput"
    let num = parseFloat(document.getElementById("doubleInput").value);

    // Check if the input is a valid number
    if (isNaN(num)) {
        displayResult("Please enter a valid number."); // Show error if input is not a number
    } else {
        displayResult(`Double: ${num * 2}`); // Display the doubled value
    }
}

// Function that calculates the average of three numbers entered by the user
function averageOfThreeNumbers() {
    // Get values from the input fields with IDs "num1", "num2", and "num3"
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    // Check if any of the inputs are invalid
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        displayResult("Please enter three valid numbers."); // Show error if any input is not a number
    } else {
        let avg = (num1 + num2 + num3) / 3; // Calculate the average
        displayResult(`Average: ${avg.toFixed(2)}`); // Display the result, rounded to 2 decimal places
    }
}

// Function that finds and displays the greater of two numbers
function findMaxNumber() {
    // Get values from the input fields with IDs "maxNum1" and "maxNum2"
    let num1 = parseFloat(document.getElementById("maxNum1").value);
    let num2 = parseFloat(document.getElementById("maxNum2").value);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        displayResult("Please enter two valid numbers."); // Show error if invalid input
    } else {
        // Use a ternary operator to determine the larger number
        displayResult(`Greater number: ${num1 > num2 ? num1 : num2}`);
    }
}

// Function that squares a number entered by the user
function squareNumber() {
    // Get the number from the input field with ID "squareInput"
    let num = parseFloat(document.getElementById("squareInput").value);

    // Check if the input is a valid number
    if (isNaN(num)) {
        displayResult("Please enter a valid number."); // Show error if input is not a number
    } else {
        displayResult(`Squared: ${num * num}`); // Display the squared value
    }
}
