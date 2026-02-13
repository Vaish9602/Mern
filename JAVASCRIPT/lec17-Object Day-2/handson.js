//Cricket Team Management System
const team = {
    name: "Indian Cricket Team",
    players: [{ id: 1, scores: [10, 34, 80] }],

    display: function() {
        for (let player of this.players)
            console.log(player.id + " --- " + player.scores.join(" "));
    },

    addPlayers: function(id) {
        const newPlayer = { id: id, scores: [] };
        this.players.push(newPlayer);
    },

    addScore: function(id, score) {
        for (let player of this.players) {
            if (player.id === id) {
                player.scores.push(score);
                return;
            }
        }
    },

    averageScore: function(id) {
        for (let player of this.players) {
            if (player.id === id) {
                let sum = 0;
                for (let score of player.scores) sum += score;
                return sum / player.scores.length;
            }
        }
    },

    teamAverage: function() {
        let sum = 0;
        let numberOfScores = 0;
        for (let player of this.players) {
            for (let score of player.scores) sum += score;
            numberOfScores += player.scores.length;
        }
        return sum / numberOfScores;
    },
};
team.addPlayers(2);
team.addPlayers(3);
team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("Average of player 1:", team.averageScore(1));
console.log("Average of player 2:", team.averageScore(2));
console.log("Team average:", team.teamAverage());


//Keys in Objects
let obj1 = { age: 12, 6: 90 };

console.log(obj1[6]); // 90
console.log(obj1["6"]); // 90
console.log(obj1["age"]); // 12
//Ways to Create Objects
let obj2 = new Object();
obj2.name = "Harman";
obj2.class = 10;

obj1 = { age: 12, name: "Rani" };

//Copying & Merging Objects
//Spread Operator (...)
let student1 = { age: 10, name: "Prashant" };
let student3 = {...student1 }; // copy
//Object.assign
let studentCopy2 = Object.assign({}, student1);


//Merging objects:
let studentPersonalDetails = { age: 12, name: "Rani" };
let studentAcademicDetails = { marks: 130, grade: "A" };

let studentDetails = {
    ...studentPersonalDetails,
    ...studentAcademicDetails
};

//Shallow Copy vs Deep Copy

//Shallow Copy problem
obj1 = { a: { b: { c: 3 } } };
obj2 = {...obj1 };
obj2.a.b.c = 12;

console.log(obj1.a.b.c); // 12 → original also changed!

//Deep copy
let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));
deepCopyOfObj1.a.b.c = 100;

console.log(obj1.a.b.c); // 12 → original not affected


/**JSON.parse & JSON.stringify

JSON.stringify(obj) → Converts object to string.

JSON.parse(string) → Converts string back to object.
 */
let student = { name: "Pratik", standard: "10th" };
let str = JSON.stringify(student);
console.log(str); // {"name":"Pratik","standard":"10th"}

let obj = JSON.parse(str);
console.log(obj.name); // Pratik

/**| Feature            | Shallow Copy                      | Deep Copy                                             |
| ------------------ | --------------------------------- | ----------------------------------------------------- |
| **Definition**     | Copies only first level           | Copies all levels (full clone)                        |
| **Nested objects** | Referenced (linked to original)   | Completely cloned (independent)                       |
| **Memory use**     | Less (just references copied)     | More (all data duplicated)                            |
| **Methods**        | Spread (`...`), `Object.assign()` | `JSON.parse(JSON.stringify())`, libraries like Lodash |
 */