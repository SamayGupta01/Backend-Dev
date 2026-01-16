// 1 hello world
console.log("Hello, World!");

//2 Variables
let name = "Samay";    //String data type
let age = 20;      //Number data type
const country = "India";  //Constant variable
let isStudent = true;   //Boolean data type

let obj = {                   //object data type
    name: "Samay",
    age: 20,
    country: "India",
    isStudent: true
}

/*
    [ console.log() ] is used to print the output to the console.
    it can display strings, numbers, variables, and more.
 */
console.log("Name:", obj.name); // Display the variable(name) value
console.log("Age:", age);   // Display the variable(age) value
console.log("Country:", country);  // Display the constant variable(country) value
console.log("Is Student:", isStudent);  // Display the variable(isStudent) value

/*
   [ console.table() ] is used to display data in a tabular format.
    It is particularly useful for displaying arrays or objects.
 */
console.table(obj);  // Display the object(obj) in tabular format
/*
    [console.error()] is used to display error messages in the console.
    It is useful for debugging and indicating issues in the code.
 */
console.error("This is an error message.");  // Display an error message

//Data types
let score;  //it shows undefined because no value is assigned
let height = null;  //it shows null because it is explicitly assigned to null
console.log("Score:", score);   
console.log("Height:", height);

//3 Operators
let a = 10;  //assigning value 10 to variable a
let b = 5;   //assigning value 5 to variable b
console.log("a =", a);
console.log("b =", b);

// Arithmetic Operators
let sum = a + b;  //Perform addition
let difference = a - b;  //Perform subtraction
let product = a * b;  //Perform multiplication
let quotient = a / b;  //Return Quotient
let remainder = a % b;  //Return Remainder


console.log("Sum(a+b):", sum);
console.log("Difference(a-b):", difference);
console.log("Product(a*b):", product);
console.log("Quotient(a/b):", quotient);
console.log("Remainder(a%b):", remainder);

// if condition

let loginAge =18;
if(loginAge>=18){
    console.log("allowed");
}
else{
    console.log("not allow");
}

//loop (for)
for(let i=1; i<=5; i++){
    cosnole.log("loop count:",i);
}
 
//function

function add(x,y){
    return x+y;
}

// simple backend login
const admin={
    username: "admin",
    password: "1234"
};
//admin object stores fixed credentials as a username and password.
function login(user, pass){ //user and password (parameters)
    if (user === admin.username && pass === admin.password){ //(===) to compare the input values
        console.log("login successful");
    }
    else{
        console.log("invalid");
    }
}
    