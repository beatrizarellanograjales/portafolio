// Variables
let maxPossibleNumber = 100;
let secretNumber = Math.floor(Math.random() * maxPossibleNumber) + 1;
let userNumber = 0;
let attempts = 1;
// let timesWord = 'time';
let maxAttempts = 6;

while (userNumber != secretNumber) {
    userNumber = parseInt(prompt(`Please enter a number between 1 and ${maxPossibleNumber}:`));

    console.log(typeof (userNumber));
    if (userNumber == secretNumber) {
        // We guessed correctly, the condition was true
        alert(`You guessed it! The number is: ${userNumber}. You did it in ${attempts} ${attempts == 1 ? 'time' : 'times'}`);
    } else {
        if (userNumber > secretNumber) {
            alert('The secret number is lower');
        } else {
            alert('The secret number is higher');
        }
        // Increment the counter when the guess is wrong
        // attempts = attempts + 1;
        // attempts += 1;
        attempts++;

        // timesWord = 'times';
        if (attempts > maxAttempts) {
            alert(`You've reached the maximum number of ${maxAttempts} attempts`);
            break;
        }
        // The condition was not met
        // alert('Sorry, you did not guess the number');
    }
}
