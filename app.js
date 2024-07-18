// Assignment 1

function greetUser(username){
    console.log('Hello ' + username); 
}

greetUser('Jawad');

// Assignment 2

function dateAndTime(){
    console.log(Date());
}

dateAndTime();

// Assignment 3

function fullName(){
    var firstName = prompt('Write your first name');
    var lastName = prompt('Write your last name');
    console.log('Welcome ' + firstName + ' ' + lastName);
}

fullName();

// Assignment 4

function sumOfTwoNumbers(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter second number');
    var sumOfTwoNumbers = num1 + num2;
    console.log(sumOfTwoNumbers);
}

sumOfTwoNumbers();

// Assignment 5

function calculator(){
    var num3 = +prompt('Enter first number');
    var num4 = +prompt('Enter second number');
    var operation = prompt('Enter arithmetic operator you want to perform i.e + , - , * , / , %');
    if(operation === '+'){
        console.log(num3 + num4);
    }
    else if(operation === '-'){
        console.log(num3 - num4);
    }
    else if(operation === '*'){
        console.log(num3 * num4);
    }
    else if(operation === '/'){
        console.log(num3 / num4);
    }
    else if(operation === '%'){
        console.log(num3 % num4);
    }
    else{}
}

calculator();

// Assignment 6

function square(num5){
    console.log(num5 ** 2);
}

square(5);

// Assignment 7

let num6 = +prompt('Enter a number to calculate its factorial');

function factorialOfNumber(){
    if(num6 < 0){
        console.log('The factorial of negative integer does not exist');
    }
    else if(num6 === 0){
        console.log('The factorial of zero is 1.');
    }
    else{
        let fact = 1
        for(i = 1 ; i <= num6 ; i++){
            fact *= i;
        }
        console.log('The factorial of ' + num6 + ' is ' + fact);
    }
}
factorialOfNumber();

// Assignment 8

var num9 = +prompt('Enter first number');
var num10 = +prompt('Enter second number');

function counting(){
    if(num9 > num10){
        console.log('First number must be smaller than second number');
    }
    else if(num9 < num10){
        num9 += 1;
        console.log(num9);
        counting();
    }
}

counting();

// Assignment 9

function calculateHypotenuse(){
    let base = +prompt('Enter value of base');
    let perpendicular = +prompt('Enter value of perpendicular');
    function calculateSquare(){
        let baseSquare = base ** 2;
        let perpendicularSquare = perpendicular ** 2;
        let hypotenuseSquare = baseSquare + perpendicularSquare;
        console.log('Hypotenuse Square = ' + hypotenuseSquare);
    }
    calculateSquare() 
}

calculateHypotenuse();

// Assignment 10

