function myClick() {
    alert('hello world');
}


function signUp() {

    var userFirstName = prompt("whats is your first name ?");
    var userLastName = prompt("whats is your last name ?");
    var userAge = prompt("whats is your age ?");

    console.log("Welcome " + userFirstName + " " + userLastName + " to OAKS");

    if (userAge > 17) {
        alert("You're above the age limit permition so..");
        alert("Welcome to our shop !!");
    }
    else {
        alert("You're to young " + userAge + " years old to shop, please get a responsable one to shop for you");
    }

}

function myGame() {
    //create secretNumber
    var secretNumber = 4;

    //ask user for guess
    var stringGuess = prompt("Guess a number");
    var guess = Number(stringGuess);

    //check if guess is right
    if (guess === secretNumber) {
        alert("YOU GOT IT RIGHT!");
    }
    //otherwise 
    else {
        alert("YOU FAIL!");
    }

}
//Print all numbers between 10 and 19 
function firstWhile() {
    var i = -10;

    while (i <= 19) {
        console.log(i);
        alert(i);
        i += 1;
    }
}
//Print all even numbers between 10 and 40
function secondWhile() {
    var number = 10;
    var even;

    while (number <= 40) {
        even = number % 2;2
        if (even == 0) {
            console.log(number + " Is an even number");
            alert(number + " Is an even number");
        }
        number++;
    }
}
//3. Print all odd numbers between 300 and 333
function thirdWhile() {
    var number = 333;

    while (number >= 300) {

        odd = number % 2;

        if (odd != 0) {
            console.log(number + " Is an odd number");
            alert(number + " Is an odd number");
        }
        number -= 2;
    }
}
//4. Print all numbers divisible by 5 AND 3 between 5 and 50 

function fourthWhile() {
    var number = 5;
    var rest;

    while (number < 50) {
        rest = number % 5;
        if (rest == 0) {
            rest = number % 3;
            if (rest == 0) {
                Console.log(number + " is divisible by 5 and 3");
            }
        }
        number++;
    }
}

//Print all numbers between 10 and 19 
function firstFor() {
    var i;  
    for(i=-10;i<=19;i++){
        console.log(i);
        alert(i);
        
    }
}
//Print all even numbers between 10 and 40
function secondFor() {
    var number = 10;
    var even;

    while (number <= 40) {
        even = number % 2;
        if (even == 0) {
            console.log(number + " Is an even number");
            alert(number + " Is an even number");
        }
        number++;
    }
}
//3. Print all odd numbers between 300 and 333
function thirdFor() {
    var number = 333;

    while (number >= 300) {

        odd = number % 2;

        if (odd != 0) {
            console.log(number + " Is an odd number");
            alert(number + " Is an odd number");
        }
        number -= 2;
    }
}
//4. Print all numbers divisible by 5 AND 3 between 5 and 50 

function fourthFor() {
    var number = 5;
    var rest;

    while (number < 50) {
        rest = number % 5;
        if (rest == 0) {
            rest = number % 3;
            if (rest == 0) {
                Console.log(number + " is divisible by 5 and 3");
            }
        }
        number++;
    }
}