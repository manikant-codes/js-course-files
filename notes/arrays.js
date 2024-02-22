// Arrays datastructure hain.
// Datastructure yane data ko store karne ka tarika.
// Array me aap multiple values comma se seperate kar ke store kar sakte hoo.
// Ye values kisi bhi valid type ki hoo sakti hain.
// Array ko han do tarike se bana sakte hain.
// 1. []
// 2. new Array()
// [2] Agar is tarike se numbers ka array bana rahe hai ek element ke saath to ek array banega jisme ek element hooga 2 aur us array ki length hogi 1.
// new Array(2) Agar is tarike se numbers ka array bana rahe hai ek element ke saath to ek array banega jisme ek bhi element nahi honge aur us array ki length hogi 2.
// Aisa sirf number ke case me hooga. new Array("Hello") ye chiz is case me nahi hoogi, is case me ye ["Hello"] output aaega.
// Array ke length property se hame ye pata chalta hai ke array me kitne elements hain.
// Array me se agar koi element access karna hoo to index pe se karsakte hain. Array ke indices 0 se start hoote hain aur length - 1 tak jaate hain.
// Yane pehla element 0 index pe milega, aur last element length-1 index pe milega.
// arr[0], is traike se element access karenge.
// arr[0] = 100, is tarike se element add ya update karenge.

// push method array ke end me naya element/elements add karta hai aur aap ko array ki nayi length return karta hai.
// Dusra tarika hai arr[arr.length] = 10, aise bhi array ke end me naya element add karsakte hain.

// JS associative arrays support nahi karta. Associative arrays yane aise arrays jinme key string hoo. E.g. [name: "Asd"].
// arr["name"] = "Asd", aise key value pair arrays store karsakte hain lekin use baad wo array nahi rahega, JS use object ke tarah treat kare ga.

// Array vs Object

// Array me numbered index hoote hai, object me numbered aur named dono index hoosakte hain.
// Array me ham sirf values store karte hai, object me ham key: value store karte hain. 
