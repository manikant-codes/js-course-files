// String banane ke 3 tarike:

// 1 "" se:
// let name = "Ram"
// let name = "Ram said, 'I will not come tomorrow.'";
// let name = "Ram said, \"I will not come tomorrow.\"";
// console.log(name);

// 2 '' se:
// let name = 'Ram';
// let name = 'Ram won\'t come tomorrow.';
// let name = 'Ram said, "I won\'t come tomorrow."';
// console.log(name);

// 3 `` se:
// let name = `Ram said, "I won't come \` tomorrow."`;
// console.log(name);

// Escape Characters
// const str = "Hey \\ ";
// console.log(str);

// Long Lines

// const str =
// "Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
// " Fugit sint dolore, laboriosam quis maiores perferendis" +
// " et ipsa voluptate reiciendis, asperiores, pariatur" +
// " rem eos aspernatur! Iste a saepe architecto ipsa odio?";
// console.log(str);

// const str = `Lorem ipsum, dolor sit amet consectetur
// adipisicing elit. Ipsam id omnis, perspiciatis enim
// sapiente et esse illum reiciendis quisquam
// laudantium sit, voluptates, tempora asperiores fuga
// consequuntur. Ex temporibus vel dolores.`;
// console.log(str)

// const str2 = "Ram";
// const str1 = "Ram";
// const str3 = new String("Ram");
// const str4 = new String("Ram");

// const str1 = "maggi";
// const str3 = new String("maggi");
// const str4 = new String("maggi");

let text = `The quick
brown fox 
jumps over
the lazy dog.`.replaceAll("\n", "");

console.log(text);
