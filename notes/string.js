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
