// console.log("Hi");

// alert("hi");

// document.write("Hi");

// console.log("Hi1");
// console.log("Hi2");
// console.log("Hi3");
// console.log("Hi4");
// console.log("Hi5");
// var a = 10;
// console.log("Hi6");
// console.log("Hi7");
// console.log("Hi8");
// console.log("Hi9");
// console.log("Hi10");

//Sysnchronous
//High Level P/L
//Scripting Language

/********************************
* KEYWORDS & RESERVE WORDS       *
******************************* */
//var, let, const, for, in while, async, await


/********************************
* Variable and Identifier      *
******************************* */

// var a; 
// console.log(a); //undefined

// var a = 10;
// console.log(a);

//Naming Convention
// -Alpahabets (Lowercase / Uppercase)
// -Numbers 
// -Dollae($)
// -Uppercase(_)
// -Unicode Alpahabets

// NOTE:
//      -Variable name caannot start with number
//      -There is no limit for no. of characters in variable name

// var a =30;

// var a;
// a =30;

//"use strict";
// a =70;

// console.log(a);

// var bank-detail = 123456; //wrong
// var bankdetail = 123456;  //Correct

// var bank$ = 123456; Correct
// var $bank_123 = 123456; Correct

//var 123Bank$ = 123456; Wrong
// console.log($bank_123);

// var Ä = 10;
// console.log(Ä);

// var PI = 3.14159;
// console.log(PI);


//Snake_Case
// var bank_account = 12345;

//CamleCase
// var bankAccountNo = 12345;
// console.log(bankAccountNo);

// var Var = 10;
// console.log(Var);

// var let = 10

/********************************
* Variable and Identifier      *
******************************* */
//Primitive
// -Number
// -String
// -Boolean
// -null
// -undefined
// -Symbol
// -BigInt

// Non-Primitive/ Reference type
// -Object
//     -Array
//     -Function

// var data = 10;
// console.log(data);
// console.log(typeof(data));



/*--------------------*/
/*      04/15/2022    */
/*--------------------*/

/***** Exercise *****/

//var guessIt = 1>2;
//var guessIt = 1 < 2 <3;
// var guessIt = 3 > 2 > 1;
// guessIt = true > 1;
// guessIt = 1 > 1;

// var guessIt = 3 < 2 < 1;
// guessIt = false < 1;
// guessIt = 0 < 1;

// var guessIt = 5 + 12 * 5 + 7;
// var guessIt = 5 + 60 + 7;

// var guessIt = typeof 12;
// var guessIt = typeof true + 12;


// var guessIt = 3 * (10 * 2) + 3 - 12/2 % 3;
// guessIt = 3 * 20 + 3 - 12/2 % 3;
// guessIt = 60 + 3 - 12/2 % 3;
// guessIt = 60 + 3 - 6 % 3;
// guessIt = 60 + 3 - 0;
// guessIt = 60 + 0;
// guessIt = 60;

// var guessIt = "ba" + 2 * "Hi" + "a";
// guessIt = "ba" + NaN + "a";

// var guessIt = typeof "Hi" + 12;
// var guessIt = typeof  + "Hi" + 12;
// var guessIt = typeof typeof + "Hi" + 12;
// var guessIt = typeof typeof NaN + 12;
// var guessIt = typeof 'Number' + 12;
// var guessIt = 'String' + 12;

// var guessIt = 12 +  + true + false * 30 + + "Hello";
// guessIt = 12 + + true + false * 30 + + NaN;
// var guessIt = 12 + 1 + true + false * 30 + NaN;
// var guessIt = 12 + 1 + false + 0 * NaN;
// var guessIt = 12 + 1 + 0 + NaN;
// var guessIt = 12 + 0 + NaN;
// var guessIt = 12 + NaN;
// console.log(guessIt);


/********************************
*       Compound Operators      *
******************************* */

// +=, -=, *=, /=, %=

// var score = 0;
// score  + 4;
// score  + 6;
// score  + 3;

// score = score + 4;
// score = score + 4;

// score += 4;
// score += 6;
// score = score - 2;
// score -= 4;
// score *= 2;
// score /= 3;
// score %= 2;
// score = score && 2;
// console.log(score)


/*********************************
* Increment & Decrement Oprators *
******************************** */
/*********** Increment **********/
// var num;
// var x = 10;

// num = num + 1;
// num += 1;

// console.log(num);    // undefined
// console.log(x);      // 10

// num = x = x+1;
// num = x + 1;

// Pre-increment
// num = ++x;

// Post-increment
// num = X++;

// num = ++x + 30;
// num = x++ +30;

// num = ++x + x++;

// console.log(10++);  //sysntax error
// console.log(++10);  //sysntax error

/*********** decrement **********/

// var num = 0, x = 10; 
//  num = --x;
//  num = x--;

//  console.log(num);
//  console.log(x);

/*********************************
*       Exponential Oprators     *
******************************** */

// var base = 10;
// var radix = 3;

// console.log(Math.pow(base, radix));
// console.log(base ** radix);

/*********************************
*       Ternary Oprators     *
******************************** */
// var age = 16;
// var result;
// expression/condition ? true : false;

// result = age > 16 ? true : false;

// result = age >= 18 ? "You can vote": "You can't vote";

// console.log(result);

/*********************************
*  Nullish Coalescing Oprators  *
******************************** */
// 0, -0, +0, NaN, false, null, undefined, "", '', ``

// console.log(0 && 4);
// console.log(10 && null);
// console.log(10 && 0);

// console.log(0 || 4);
// console.log(10 || 4);
// console.log(null || 4);
// console.log(undefined || 4);


// null  and undefined
// console.log(0 || 4);
// console.log(0 ?? 4);
// console.log(null ?? 4);
// console.log(undefined ?? 4);
// console.log(" " ?? 4);
// console.log(NaN ?? 4);
// console.log(false ?? 4);
// console.log(4 ?? false);

/*********************************
* Number Representation Oprators *
******************************** */
//Integer
// var num = 10;

// Floating Point
// nul = 10.0;
// num = 10.5

// Exponential
// num = 2e2;

// Octal
// num = 012;
// num = 0o12;

// Hexa Decimal
// num = 0Xffff;

//Binary 
// num = 0b1111;

// console.log(num);


// num = Infinity;
// num = Infinity + 1;
// num = Infinity - 1;

// num = 0 / 1;
// num = 1 / 0;
// num = -1 / 0;

// num = NaN;
// num = NaN - 1;
// num = NaN + "1";

// num = 1,00,000;
// num = 1_00_000;

// console.log(num);


/********************************
*       Bitwise Oprators        *
******************************* */

// AND &&
//_____________
// F && F = F
// F && T = F
// T && F = F
// T && T = T

// OR ||
//_____________
// F || F = F
// F || T = F
// T || F = F
// T || T = T

// XOR ^
//_____________
// F ^ F = F
// F ^ T = F
// T ^ F = F
// T ^ T = T

// var guessIt = 3 & 4;
// 011 = 3
// 100 = 4
// _________
// 000

// var guessIt = 7 & 5;
// 111 = 7
// 101 = 5
// _________
// 101 = 5

// var guessIt = 3 & 4;
// console.log(guessIt);



// ---------------------

// if (age >= 18)
// {
//     console.log("You can vote!");
// };
// else
// {
//     console.log("You can't votr");
// }



/********************************
*       Control Statement       *
******************************* */
// while(cindition){

// }

// while(3 > 2){
//     console.log("Hi");
// }


var counter = 0;

while (counter < 10) {
    console.log(counter);
    
    counter ++;
}