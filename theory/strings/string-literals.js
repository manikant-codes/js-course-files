// String text values hoti hain jinhe aap '', "" ya `` se bana sakte hoo.

// "" ya '' ki string ko break kar ke naye line me likhna hoo, to aap ko ek string me se do string banani pade gi, fir dono ko + se join karna padega, fir + ke baad ka part aap naye line me likh sakte hoo.

// `` wale string me aisa kuch karne ki jarurat nahi hai. Jo bhi part aap ko naye line me le jana hai waha enter press kardene se wo naye line me aajayega.

// const str1 =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
//   " Nihil saepe vel deleniti quos numquam enim aut exercitationem odio," +
//   " sunt laborum laudantium corporis modi ex!" +
//   " Vel placeat quis quos provident incidunt?";

// const str2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
// Odio saepe libero dicta ex fuga cum, eveniet id fugiat,
// sapiente aliquid commodi tenetur quas atque delectus
// quibusdam quisquam corrupti, dolor nulla.`;

// const name = "Ram";
// const age = 10;

// function getAge() {
//   return 10;
// }

// console.log(name + " is " + age + " years old.");
// console.log(`${name} is ${getAge()} years old.`);

const str1 = "ram" + 
" ram";
const str2 = `ram 
ram`;

// console.log(str1.length);
// console.log(str2.replace("\n", ""));
// console.log(str2.substring(0, 4) + str2.substring(5));
console.log(str2.split("\n").join(""));
