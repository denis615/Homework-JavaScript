
// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.
 console.log("Task1")
let a = 7;
let b = 8;
let c = a+b;
console.log(c)

// Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.
console.log("Task2")
let integrer= 5;
let boo_lean=true;
let string="Denis";

console.log(typeof(integrer))
console.log(typeof(boo_lean))
console.log(typeof(string))

// Task 3
//Declare 2 variables x and y and set them to 10 and 3.
//Declare and asign a variable that would be the result of division of 10 and 3.
//Declare and asign a variable that would be the whole part of the division of 10 and 3.
//Declare and asign a variable that would be the remainder of the division of 10 and 3.
console.log("Task3")
let x=10
let y=3

let divison= x/y;

let wholePart= NaN;

let remainder= x % y;


console.log(divison)
console.log(remainder)
// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.
console.log("Task4")
let name="Denis"
let lastName="Sakipi"

console.log(`Hello ${name} ${lastName}`)

// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console
console.log("Task5")
let bigNumber=20
let smallNumber=19

if(bigNumber>smallNumber){
    console.log(bigNumber)
}

// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!
console.log("Task6")
let Numbro=150;

if(Numbro >= 100){
    console.log(`The Number is Cool`)
}

// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.
console.log("Task7")

let denars= prompt("Please input the Amount ov the Denars");


console.log(`Those denars are equal to ${denars/61.5} Euros`)


// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days
console.log("Task8")
let check=prompt("What Day it is?")

 let day=["Monday","Tuesday","Wendesday"];

 switch(check){
     case day[0]:
     console.log("Go to Sedc")
     break;
     case day[1]:
         console.log("Go to Sedc")
         break;
         case day[2]:
             console.log("Go to SEDC!")
             default:
                 console.log("You Are Free")
 }

 


// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Dragan Trajan Martin
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has? 
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?


console.log("Task9")
let integrers6=[5,6,15,42];
let namestrings=["Denis","Dragan","Meti"];
console.log(integrers6[0]);
console.log(namestrings[0]);

integrers6[0]=9;
namestrings[0]="Don";
integrers6[100]=598;

console.log(integrers6.length);
console.log(integrers6[99])

integrers6.push(72);
namestrings.push("Denis");

console.log(integrers6[0]);
console.log(namestrings[0]);

console.log(integrers6.pop());
console.log(namestrings.pop());


console.log(integrers6[1000])
console.log(namestrings[1000])





// Task 10
//Write a while loop that counts from 0 to 10.
//The numbers should be printed in the console.
console.log("Task10")

let count=0

while(count<=10){
    console.log(count)
    count++
    
}



// Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.

console.log("Task11")

for (i=0;i<=20;i++){
    console.log(i++)
}

// Task 12
//Write a JavaScript program that will find the sum of all items in the given array,  
//make it dynamic, so the result will change if the array is changed. 

console.log("---------------Task12--------------")


let sumArray=[5,7,8,9,3,1];

let sum=0

sumArray[2]=56;


for(i=0;i<sumArray.length;i++){
   sum += sumArray[i]


}



console.log(sum)
    







// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.
console.log("---------------Task13--------------")


function sumPositive(){
    let sum=0
    let posNegArray=[-7,3,4,-8,4,-2,3-4,8];

    for(i=0;i < posNegArray.length;i++){
        if(posNegArray[i]>0){
            sum+= posNegArray[i];
        }
    }

    console.log(sum)
}


sumPositive()

// Task 14
//Write javascript program that will take the items from a given array 
//and make new aray with the same items in revers order.

console.log("---------------Task14--------------")
// 1) I want to take the last element of the array, then add it to the newArray. 
// 2) To do this I'll need to loop through the array from the end to the beginning, because I want the last element to be first.
// 3) I want to output the contents of 'newArray' when the for loop is finished.

let arrayOrder=["Denis","Bob","Jill","Vivian",4,9,8,3]
let reverseOrder=[]

function reversarray(){
    for(i= arrayOrder.length-1;i>=0;i--){
        reverseOrder.push(arrayOrder[i]);
    }

    console.log(reverseOrder)
}

reversarray()



// Task 15
//Write javascript program that will find the average value 
//from the all the item values in the given array.
console.log("---------------Task15--------------")
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let total = 0;
for(i = 0; i < values.length; i++) {
    total += values[i];
}
let avg = total / values.length;


console.log(avg)



// Task 16
//Write a function that prints your name in the console
console.log("---------------Task16--------------")
function printName(){

    console.log("denis")
}


printName()
// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"
console.log("---------------Task17--------------")
let userName=prompt("Please input your name");

function user(){
    console.log(`Hello there ${userName}`)
}

user()

// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two
console.log("---------------Task18--------------")
function numbers2(){

    let inputa=prompt("Please Input the first number")
    let inputb=prompt("Please input the second number")

    let suma=parseInt(inputa)
    let sumb=parseInt(inputb)

    let sumc=suma+sumb

    console.log(`The sum of those numbers is ${sumc}`)

}

numbers2()

// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even
console.log("---------------Task19--------------")
function oddOrEven(){
    let inputOddEven=prompt("Please input a number")

    let numconvert=parseInt(inputOddEven)

    if (numconvert%2===0){
        console.log(`The number ${numconvert} is even`)
    }
else {
    console.log(`The number ${numconvert} is odd`)
}


}

oddOrEven()

// Task 20
//Write a function that takes an array of numbers and returns the number
//of numbers in the array that are even
console.log("---------------Task20--------------")
function findEvenNumbers(){
    let  evenAndOddNumbers=[7,2,44,68,74,25,55,60,10,12,55,88,100]
    let evenNumbers=[]
    for(i=0;i<evenAndOddNumbers.length;i++){
        if((evenAndOddNumbers[i]%2)===0){
            evenNumbers.push(evenAndOddNumbers[i]);
        }
    }

    console.log(evenNumbers)
}


findEvenNumbers()

// Task 21
//Write an HTML h1 element and select it in javascript by id

console.log("---------------Task21--------------")

let headers=document.getElementById("30tasks")

// Task 22
//Write two p elements and select them by class
console.log("---------------Task22--------------")
let pargraphs=document.getElementsByClassName("paragraph")
// Task 23
//Write two h3 elements and select the first one by tag name
console.log("---------------Task23--------------")


let tags=document.getElementsByTagName("h3")



// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element 
//Hint: You must select the div element and try to find p from there
console.log("---------------Task24--------------")
let secondParagraph = document.getElementById("div1").lastElementChild.innerHTML;


console.log(secondParagraph);

// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript
console.log("---------------Task25--------------")
let header2= document.getElementById("div2").children[1]

let btn=document.getElementById("btn1");

btn.addEventListener(`click`,function(){
    header2.innerHTML="Hello World"
})

// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript
console.log("---------------Task26--------------")

let ul=document.getElementById("unordered-list")

ul.innerHTML +="<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>";
// Task 27
// Create an input, h1 element and a button
// as long as the number in the input is larger than 100 show the h1 element that reads: more than 100
// If the button is clicked but the number is lower hide the h1 element and write ERROR in the console
console.log("---------------Task27--------------")

let task27=document.getElementById("div3");
let textarea=task27.children[0]
let header27=task27.children[1]
let btn27=task27.children[2]
textarea.addEventListener("input",function(){
if (textarea.value>100) { 
    header27.innerHTML ="More Than 100"
    
}})

btn27.addEventListener(`click`,function(){
    if (textarea.value<100) {
        header27.innerHTML=""
        console.log("error less than 100")
    } else {
        
    }
})
    


// Task 28
// Create two inpust: Size and Color
// Create a button called order
// When the button is clicked add a new li element in an ul list wiht the title T-Shirt Orders
// In the new element write T-Shirt: Size ( Ex: T-Shirt: Medium )
// Get the size from the input. Also change the color of the text to the color entered.
// Clear the inputs after the button is clicked and a new li element is added
console.log("---------------Task28--------------")
let div4=document.getElementById("div4")
let inputColor=div4.children[0]
let inputSize=div4.children[1]
let btnOrder=div4.children[2]
let unoorderedList=div4.children[3]


function addColor(){
    let list=unoorderedList.lastChild
  list.style.color=inputColor.value
}


btnOrder.addEventListener(`click`,function(){
  
    unoorderedList.innerHTML +=`<li>T-Shirt ${inputSize.value}</li>`
    addColor()
    inputSize.value="";
    inputColor.value="";
})


// Task 29
// Create a simple calculator
// Have 3 inputs: num1, num2 and operation
// Have a button that says calculate
// After the button is clicked have the numbers execute with the operation given
// Show the result in an h1
console.log("---------------Task29--------------")

let simpleCalculator=document.getElementById("div5")

let input1=simpleCalculator.children[0]
let operator=simpleCalculator.children[1]
let input2=simpleCalculator.children[2]
let calculate=simpleCalculator.children[3]
let displayh1=simpleCalculator.children[4]

console.log(input1)
console.log(operator)
console.log(input2)
console.log(calculate)
console.log(displayh1)

calculate.addEventListener(`click`,function(){
    let number1=input1.value
    let number2=input2.value
    let operate=operator.value

    let add1=parseInt(number1);
    let add2=parseInt(number2);

    switch(operate){

        case "*":
            
            displayh1.innerText=`${number1*number2}`;
            break;
            case "+":
            
                displayh1.innerText=`${add1+add2}`;
                break;
                case "-":
            
                    displayh1.innerText=`${number1-number2}`;
                    break;

                    case "/":
            
                        displayh1.innerText=`${number1/number2}`;
                        break;

                default:
                    alert(`Please input one of the operators * / - +`)

    }



})



// Task 30
// Create a textarea element
// While typing live count how many words are in the textarea
// Show the result in an h1
// ( while typing means, the number of words is updated every time the user hits any button )

console.log("---------------Task30--------------")

function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng ;
}// This was a copy paste I need some explanation

