let mother = {
    name: "priya singh",
    age: 33,
    address: "Baner ,pune",
    city: "Pune",

};

let student = {
    name: "Pratik Patil",
    age: 15,
    standard: "10th",
    gender: "male",
    address: "Viman nagar,Pune",
    section: "c",
};

//adding and updating property
mother.occupation = "housewife"; //add
mother.age = 34; //update
console.log({ mother, student });

///checking type
let arr = [1, 2, 3];
console.log(typeof arr); // it gives object

// vehicle object
let vehicle1 = {
    noOfSeats: 4,
    topSpeed: 180,
    mileage: 40,
    noOfAirbags: 5,
};
//update no of seats
vehicle1.noOfSeats = 5;
console.log({ vehicle1 });

// adding 
vehicle1.color = ["white", "black", "grey"];
console.log({ vehicle1 })

//delete
delete vehicle1.noOfAirbags;
console.log({ vehicle1 })

// Nested object
vehicle1.address = {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "maharashtra",
};

console.log({ vehicle: vehicle1 })
    //Accessing nested values:

console.log("city:", vehicle1.address.city);

//
vehicle1.name = "Scorpio";
console.log(vehicle1.name);

//
const vehicle2 = {
    name: "Thar",
    noOfSeats: 4,
    topSpeed: 180,
    mileage: 40,
    colors: ["white", "black", "grey"],
    address: {
        addressLine1: "Aria tower",
        addressLine2: "Baner",
        city: "Pune",
        state: "Maharashtra",
    },
};

//Array of objects (vehicles)
const vehicles = [vehicle1, vehicle2];
console.log({ vehicles });

//print name of the vehicle and it's city from vehicles array
for (let i = 0; i < vehicles.length; i++) {
    console.log("Name of vehicle:", vehicles[i].name);
    console.log("Name of the city:", vehicles[i].address.city);
}
console.log("vehicle1.name", vehicle1.name);
console.log('vehicle1["name"]', vehicle1["name"]);

//Using for...of loop:
for (let vehicle of vehicles) {
    console.log(vehicle);
}

//for...in loop and Object methods
for (let key in vehicle1) {
    console.log(key + ": " + vehicle1[key]);
}
const vehicleObjKeys = Object.keys(vehicle1);
const vehicleObjValues = Object.values(vehicle1);

//Updating nested object values
for (let vehicle of vehicles) {
    if (vehicle.address.city === "Pune") {
        vehicle.address.city = "Mumbai";
    }
}

//
let vehicle3 = {
    name: "XUV700",
    currentSpeed: 100,
    isRunning: function() {
        if (this.currentSpeed > 0)
            console.log("XUV is running at speed " + this.currentSpeed);
        else console.log("XUV is not running");
    },
};

vehicle3.isRunning(); // speed > 0
vehicle3.currentSpeed = 0;
vehicle3.isRunning(); // speed = 0

//Resume Management System
const resume = {
    name: "Vaibhav",
    email: "vaibhav@gmail.com",
    phone: "9876554322",
    skills: ["Javascript", "HTML", "CSS"],
    workExperience: ["Tally", "Chitkara University"],


    display: function() {
        console.log("Resume:");
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.phone);
        console.log("Skills:", this.skills.join(", "));
        console.log("Work Experience:", this.workExperience.join(", "));
    },
    addSkills: function(newSkill) {
        this.skills.push(newSkill);
    },
    addWorkExperience: function(newExperience) {
        this.workExperience.push(newExperience);
    },
    showSkills: function() {
        console.log("Skills:", this.skills.join(", "));
    },
};

resume.display(); // shows all info
resume.addSkills("React"); // adds new skill
resume.addWorkExperience("AccioJob"); // adds new work experience
resume.showSkills(); // shows updated skills