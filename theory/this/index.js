// window object
console.log("this 1", this);

// debugger;

function printThis() {
  // window object
  console.log("this 2", this);
}

window.printThis();

const obj = {
  a: {
    b: 10,
    fn: function () {
      console.log("this 3", this);
    },
  },
  printThis: function () {
    // obj
    console.log("this 4", this);
  },
};

obj.printThis();
obj.a.fn();

// this ek keyword hai let, const, if, for, etc ke tarah hi.
// this ke paas object ka reference/address hota hai.
// Kon se object ka address/reference?
// To ye kaha this use kiya hai uspe depend karta hai.
// Jo object this wale code ko chalata hai uska reference/address this me hota hai.
