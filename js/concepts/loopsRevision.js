// break statement jab bhi loop me run hooga, loop terminate (end, khatam, puri) hoojaye gi. Program ka control loop ke bahar aa jaye ga.

// continue statement jab bhi loop me run hooga, loop me us iteration (turn, round) ke liye aage ka code skip hoojae ga. Aur aap agle iteration (turn, round) pe move hoojaoge (badh jao ge).

// for...in loop objects pe chalta hai.
// for...in loop me jo variable round brackets me banate hain usme key store hooti hai.
// for...of loop arrays pe chalta hai.
// for...of loop me jo variable round brackets me banate hain usme value store hooti hai.
// Dono loop for...in/for...of tabtak chalte hai jabtak object/array ke sabhi elements ke bari (વારો) nahi aajati.
// for...in loop array pe bhi chal sakta hai. Lekin variable me key hoogi, array ke case me ye keys index hote hain (0, 1, 2,...).
// for...in loop me jis order me elements access hote hain wo change hooskata hai. To agar order importance ka hai, to array ke liye for...of loop hi use kare.

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)

// while
// do...while
// for
// for...of
// for...in

// let count = 5;

// while (count <= 5) {
//   // let x = 5;
//   console.log(count);
//   count++;
// }

// do {
//     console.log(count);
//     count++;
// } while(count <= 5);

// let count = 1;

// for (let count = 1; count <= 5; count++) {
//   console.log(count);
//   if (count === 2) {
//     continue;
//   }
//   console.log(count);
//   //   }
//   //   count++;
// }

// const student = {
//   name: "Shinchan Nohara",
//   age: 5,
//   city: "Surat",
//   course: "JavaScript",
//   likes: ["Chocho Chips", "Action Kamen"],
//   petName: "Sheero",
//   motherName: "Mitsi Nohara",
//   fatherName: "Harry Nohara",
// };

// console.log(student);

// console.log(student.name);
// console.log(student.age);
// console.log(student.city);
// console.log(student.course);
// console.log(student.likes);
// console.log(student.petName);
// console.log(student.motherName);
// console.log(student.fatherName);

// const studentKeys = Object.keys(student);

// for (let count = 0; count < studentKeys.length; count++) {
//   console.log(student[studentKeys[count]]);
// }

// const arr = ["Shinchan Nohara", 5, ["Choco Chips", "Action Kamen"], "Sheero"];

// for (const s in student) {
//   console.log(a, ": ", arr[a]);
// }

// for (const a in arr) {
//   console.log(a, ": ", arr[a]);
// }

// for (const a of arr) {
//   console.log(a);
// }
