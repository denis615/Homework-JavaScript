//Homework Part1

let person={ firstName : `John`,lastName : `Doe`}
function datacheck(x){
console.log (typeof(x));
}
datacheck(2);
datacheck(true);
datacheck("Bob");
datacheck();
datacheck(person);

//Homework Part2
function Humandogage(){
let=_calculator=prompt("Do you Want to Calculate the Dog Years, or Human Years?")
if (_calculator==="Dog") {let=Dog=prompt("Please enter the Age of your Dog?");
let _dogage=(Dog)*7;
alert(`Your Dog is ${_dogage} years old in Human Years!`)
}

if (_calculator==="Human") { let=Human=prompt("Please enter your age?");
let _humanage=(Human)/7;
alert(`You are ${_humanage} years old in Dog Years!`)
}
else(alert("Please Input Human or Dog!"))
}
Humandogage()


 
    
//Homework Part3

function ATMMachine(){
    let _balance=4500;
let=_pin=prompt("Please enter your Pin Code?")

if (_pin!=7713) {
    alert("Please Check your Pin Code")
    
}

if (_pin==7713) {
    
    let=_withdraw=prompt("Please Enter the Amount you wisht to Withdraw?")    
}
if(_withdraw<=_balance){
    let _balance=4500;
    alert(`You have ${(_balance - _withdraw)}MKD Left In your Account`)
}
if (_withdraw>_balance) {
    alert("You don't have enough money in your account!");

    
}
}

ATMMachine()
