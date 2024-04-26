let userRole = "admin";
let accesslevel;

if(userRole ==="admin")
{
  accesslevel="full access granted";
}
else if(userRole === "manager")
{
    accesslevel = "limited access granted";
}
else{
    accesslevel = "no access";
}

console.log("Access level:", accesslevel);

// nested if

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User message:",userMessage);


//Switch Statement

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

//ternary operator

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);


//Practice exercise

let person = "employee";
let services;

if(person === "Employee")
{
   services = "authorised to have access";
}
else if(person === "Enrolled member")
{
    services = "one-on-one interaction";
}
else if(person === "subscriber")
{
    services = "partial services";
}
else
{
    services = "needs a plan";
}

console.log("Services:", services, "and Person is:", person);