// map ek buit-in array method hai. Yane ek bana banaya function hai jo aap ko kisi bhi array object pe milta hai.

// Iska use array transformation ke liye hoota hai. Yane ek array ke sabhi elements pe kuch kaam kar ke naya array chahiye hoo to map ka use hoota hai.

// Ye ek function leta hai argument me, is function andar aap ko har array element pe kya changes karne hai wo aap likhte hoo. In short transformation ka logic isme likhte hoo.

// map function bari bari array ke har element ko access karega aur uske liye aap ka diya gaya function chalayega. Is function se jo return karoge wo naye array me jaye ga. Agar kuch nahi return karte to us element ke liye naye array me undefined jayega.

// Aap ke diye gaye function ko 3 argumetns milte hain, value, index aur array.

// value me array (jis array pe aap ne map chalaya hoo) ke jis element ki baari hoo wo milta hai.

// index me us element ka index.

// array me wo pura array milta hai jispe aapne map chalaya hoo.

// Jab array (jis pe aap ne map chalaya hai) ke sabhi elements pe aap ka diya gaya function chal jaye to last me map aap ko naya array return karta hai.

const ones = [1, 2, 3, 4, 5];

const twos = ones.map(function (value, index, array) {
  return value * 2;
});

const threes = ones.map(function (value, index, array) {
  return value * 3;
});

console.log("ones", ones);
console.log("twos", twos);
console.log("threes", threes);
