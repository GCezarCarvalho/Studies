/*
1 - Write a function isEven() which takes a single numeric argument and returns true if 
the the number is even, and false otherwise
*/

function functionOne(){
    var firstNumber = 10;
    result = firstNumber % 2;
    if(result == 0){
        alert ("true");
        return true;
    } 
    else{
        alert ("false");
        return false;
    }
}

/*
2 - Write a function factorial() which takes a single numeric argument and returns the 
factorial of that number
*/

function functionTwo(){
    var number = 5;
    var factorial;
    var result = 1;

    for(factorial = number;factorial >= 1; factorial--){
        result = result * factorial;
    }
    alert("The factorial number of " +number+ " is " +result);
    return result;
}

/*
3 - Write a function kebabToSnake() which takes a single keabab-cased string argument
and returns the snake_cased version. 
(how to replace a char in a string)
*/

function functionThree(str){
    
    var convert = str.replace(/-/g , "_");
    
    var x = convert;

    return convert;
    alert(x);
    
}

