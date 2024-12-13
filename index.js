// 1

function calculateDifference(){
    let a = 10;
    let b = 6;
    let result = a-b;
    console.log(result);
}

calculateDifference();

// 2

function Odd(){

    let a = 5;

    if(a % 2){
        console.log(true);
    }

    else{
        console.log(false);
    }
}

Odd();

// 3

function findMin(){
    const array = [10,7,5,2,8];
    return Math.min(...array);

}

console.log(findMin());

findMin();

// 4

function filterEvenNumbers(){
    const array = [ 2,5,7,3,9,6,1,8];
    return array.filter( num => num % 2 === 0);
}

console.log(filterEvenNumbers());

filterEvenNumbers();

// 5

function sortArrayDescending(){
    let array = [5, 1, 9, 3, 7];
    return array.sort((a,b) => b-a);
}

console.log(sortArrayDescending());

sortArrayDescending();

// 6

function lowercaseFirstLetter(){
    let string = "My Assignment is finished!"

    if( string.length === 0 ) return string;

    return string.charAt(0).toLowerCase() + string.slice(1);

}

console.log(lowercaseFirstLetter());

lowercaseFirstLetter();

// 7

function findAverage (){
    const num = [10,20,30,40,50];
    const sum = num.reduce ((total, num) => total + num , 0 );

    if(num.length === 0){
        return 0;
    }

    return sum /  num.length;

 
}

console.log(findAverage ());

findAverage ();

// 8

function isLeapYear(){
    let year = 2024;

    if( year % 4 ===0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isLeapYear());

isLeapYear();