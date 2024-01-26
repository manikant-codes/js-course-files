//  == do variables/values ki sirf value check karta hai.
//  === do variables/values ki value aur data-type dono check karta hai.
// string ek data-type hai, jo text/(collection of charachters) ko store karne ke liye use hooti hai.
// String aap '', "" ya `` se bana sakte hoo.
// String ke andar characters ko escape karne ke liye (yane JS ye batane ke liye ke ye string ka part hai, \ ka use karte hai.)
// Agar string bohot lambi hojarahi hai to aap use break kar ke + operator se join kar sakte hoo.
// Template string, (``), isme aise break aur join karne ki zarurat nahi hai. Aap enter press kar ke string ko naye line me break kar sakte hoo.
// Template string me aap expressions (yane aise statements/instructions jinka output ek single value hoo) ka use karsakte hoo.
// `Name: ${name}` is tarha se.
// length property se aap ko string me kitne characters hai ye pata chalta hai.

const str1 = "Hello";
const str2 = "Hello";
const str3 = new String("Hello");
const str4 = new String("Hello");

const email1 = "johndoe@gmail.com";
const email2 = "support@johndoe.com";
const email3 = "johndoeinternational@yahoo.com";

// const email1 = "joh****@gmail.com";
// const email2 = "sup****@johndoe.com";
// const email3 = "joh****************@yahoo.com";

// padEnd(maxCharacters, "*") // 7, 7, 19

function padEmail(email) {
  const arr = email.split("@");
  const userName = arr[0];
  const emailProvider = arr[1];
  const maxCharacters = userName.length;
  const first3Characters = userName.slice(0, 3);
  const paddedUserName = first3Characters.padEnd(maxCharacters, "*");

  return paddedUserName.concat("@", emailProvider);
}

// --------------------------------------------------
// Search Methods
// --------------------------------------------------

// indexOf method aap ke string me dhundhe gaye sub-string ki starting position return karega.
// Agar string me wo sb-string nahi hoo to indexOf -1 return karega.
// Ye do arguments leta hai, 1. Ke kya dhundhna hai, ("sub-string"). 2. Ke kaha se dhundhna hai, (starting position/index).

// let text = "Please locate where 'locate' occurs!";
// const result = text.indexOf("locate", 10);
// console.log("result", result);

// lastIndexOf indexOf jaisa hi hai, but wo end to start dhundhta hai.

// let text = "Please locate where 'locate' occurs!";
// const result = text.lastIndexOf("locate", 6);
// console.log("result", result);

// search me dusra argument, starting position nahi desakte hai.
// search me aap regex de sakte hoo.

// let text = "Please locate where 'locate' occurs!";
// const result = text.search("locate");
// console.log("result", result);

// let text = "Please LoCaTE where 'locate' occurs!";
// const result = text.search(/locate/i);
// console.log("result", result);

// match bhi string aur regex dono le sakta hai.
// match se aap apne string me sare sub-strings dhund sakte hoo.
// Agar match mil jata hai to ek array return karega, jisme pehle position/index pe aap ke matching string hooga.
// Is array kuch extra properties hoti hai:
// groups (ye regex me difine kiye gaye groups hai)
// index (kon se position pe match mila hai)
// input (jis string pe aap ne match find kiya hai wo string)

// let text = "Please LoCaTE where 'locate' occurs!";
// // let text = "Please locate where 'locate' occurs!";
// const result = text.match("locate");
// console.log("result", result);

// let text = "Please LoCaTE where 'locate' occurs!";
// // let text = "Please locate where 'locate' occurs!";
// const result = text.match(/locate/gi);
// console.log("result", result);

// let text = "Please LoCaTE where 'locate' occurs!";
// // let text = "Please locate where 'locate' occurs!";
// const result = text.matchAll(/locate/gi);
// console.log("result", result);

// includes method sirf string leta hai.
// Agar wo sub-string aap jis string me dhundh rahe hoo us me mil jati hai to includes true return karega, warna false return karega.
// includes ko bhi do argument de sakte hoo, 1. Kya dhudhna hai, ("sub-string") 2. Kaha se dhundhna shuru karna hai, (starting index/position)

// let text = "Please LoCaTE where 'locate' occurs!";
// const result = text.includes("locate", 15);
// console.log("result", result);

// let text = "Please LoCaTE where 'locate' occurs!";
// const result = text.startsWith("LoCaTE", 7);
// console.log("result", result);

let text = "Please LoCaTE where 'locate' occurs!";
const result = text.endsWith("'locate'", 28);
console.log("result", result);
