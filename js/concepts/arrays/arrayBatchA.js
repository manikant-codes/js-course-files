// Array ek datastructure hai, jisme aap comma seperated elements store karsakte hoo. Comma jaruri hai.
// Datastructure yane data ko store karne ka tarika.
// Array ke help se aap multiple values ko ek saath store karsakte hoo.
// E.g. [1, 2, 3, "Apple", "Banana", "Cherry"];
// Jaruri nahi hai ke sara data ek type ka hi hoo.
// Aap differnt type ki values store karsakte hoo array me.
// E.g. [1, "Banana", true, [...], {...}, function () {} ];

// Array bhi objects hain. Lekin wo ek special type ke objects hain. Unme kuch extra properties aur methods (object ke functions) hote hain.
// Unme se ek property hai length.
// Length property ye batati hai ke array me kitne elements hain.

// Arrays ko usually (aam taur pe) const se declare karte hai. Kyu ke arrays store by reference hote hain, yane unka refrence store hota hai variable me. Isi liye unme changes kiye jaa sakte hain. Aur isi liye usually ham arrays ko const se declare karte hain.

// Array ko JS lables/keys/indexes deta hai. Ye index 0 se start hote hai aur length - 1 tak jaate hain. Length - 1 aap ke last array element ka index hoga.

// Aap new keyword ka use kar ke bhi array bana sakte hoo. Lekin ye tarika jada descriptive/elaborate/detailed hai. Yane ke isme jada steps involved hote hain. Isi liye ye tarika comparitively thoda slow hai. Aur agar zarurat naa hoo to aise arrays nahio banaoge.

// JS me functions 1st class citizens hain. Yane jaha variables aur expressions ka use karsakte ho waha functions ka use bhi karsakte hoo.

// Jin functions ka naam na hoo unhe anonymous functions kehte hai. In functions ko unke variable ke naam se call karte hain.

// Associative arrays aise arrays hote hain jinme named keys hoti hasin. JS me associative arrays nahi hoote. Agar aap associative array banate hoo to JS use object ke tarh treat kare ga.

// Agar named key se value access karni hoo to object ka use karoge, aur agar numbered key se value access karna hoo to array ka use karo ge.

// E.g. Agar ek class ke saare students ko store karna hoo to array me store karenge, aur student ki information object me store karenge.

//

// const obj = {
//   firstName: "manikant",
//   lastName: "jha",
//   rollNo: 4,
//   python: 42,
//   "laravel marks": 43,
// };

// const obj1 = {
//   0: "manikant",
//   1: "jha",
//   2: 4,
//   3: 42,
//   4: 43,
// };

// Yaha mai ek variable declare kar raha hun aur usme array store kar raha hun. Is array babane ke tarike ko Array Literal Method kehte hain.
// const arr = ["manikant", "jha", 4, 42, 43];

// console.log("obj", obj1);
// console.log("arr", arr);

// console.log("obj firstName", obj["firstName"]);
// console.log("obj 0", obj1["0"]);
// console.log("obj 0", obj1["0"]);
// console.log("arr 0", arr[0]);
// console.log("arr 0", arr[0]);

// console.log("arr 1", arr[1]);

// arr[2] = 10;

// console.log(arr);
// const arr2 = new Array("manikant", "jha", 10, 56, 68);

// console.log("arr2", arr2);

function getFullName(fname, lname) {
  return fname + " " + lname;
}

const obj = {
  fname: "Manikant",
  getFullName: function (fname, lname) {
    return fname + " " + lname;
  },
};

// const arr3 = [
//   "Manikant",
//   function (fname, lname) {
//     return fname + " " + lname;
//   },
// ];

// console.log(obj.getFullName);
// console.log(getFullName);
// console.log(obj["getFullName"]("A", "B"));
// console.log(arr3["1"]("A", "B"));
// console.log(arr3[1]("A", "B"));
// console.log(arr3[1](arr3[0].fname, arr3[0].lname));

// const arr4 = [];

// arr4[0] = "ABC";
// arr4[1] = 10;
// arr4.mathMarks = 40;
// arr4.sciMarks = 45;

// for (const a of arr4) {
//   console.log(a);
// }

// console.log(arr4.mathMarks);

// obj.firstName;
// arr4[0];

// const arrA = [10, 20];
// const arrB = new Array(10, 20);

// const arrA = [10];
// Is case me 10 length/size/elements ka array banega. Jisme sare elements empty honge.
// const arrB = new Array(10);

// console.log(arrA);
// console.log(arrB);

const dataA = [10];
const dataB = { size: 10 };

console.log(Array.isArray(dataA));
console.log(Array.isArray(dataB));

console.log(dataA instanceof Array);
console.log(dataB instanceof Array);
