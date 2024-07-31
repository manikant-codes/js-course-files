// Escape Characters
// let name = "Meet said, \"Hello\"";
// let name = 'Meet said, \'Hello\'';
// let name = " \"\" ";
// let name = ' \'\' ';
// let name = ` \`\` `;
// let name = ` \\ `;

// Strings as Objects
let name1 = "John";
let name2 = "John";

let name3 = new String("John");
let name4 = new String("John");

console.log(name1 == name2);
console.log(name1 == name3);
console.log(name1 == name4);
console.log(name3 == name4);
