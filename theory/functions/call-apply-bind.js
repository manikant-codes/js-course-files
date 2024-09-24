// call ya apply function ke help se ham kisi function ko this ki nayi value ke saath call karsakte hai.
// Syntax Call: <your fn>.call(<this ki nayi value>, arg1, arg2, ...)
// Syntax Apply: <your fn>.apply(<this ki nayi value>, [arg1, arg2, ...])

// bind ke help se hame kisi function ki nayi copy milti hai this ki nayi value ke saath.
// Syntax Bind: <your fn>.bind(<this ki nayi value>)

const student1 = {
  name: "Ram",
  roll: 1,
  math: 55,
  sci: 56,
  pt: 59,
  getAvg: function (math, sci, pt) {
    // return ((this.math + this.sci + this.pt) / 3).toFixed(2);
    return (math + sci + pt) / 3;
  },
  getBio: function (city, likes) {
    return `${this.name} lives in ${city} and likes ${likes}.`;
  },
};

const student2 = {
  name: "Shyam",
  roll: 2,
  math: 65,
  sci: 66,
  pt: 78,
};

// console.log(student1.getAvg());
// console.log(student1.getBio("Surat", "Cricket"));

// console.log(student1.getAvg.call(student2));
// console.log(student1.getBio.call(student2, "Pune", "Dance"));

console.log(student1.getAvg.apply(student2, [55, 58, 63]));
// console.log(student1.getBio.apply(student2, ["Pune", "Dance"]));

// const arr = [96, 1, 5, 78, 55];

// console.log(Math.max.apply(null, arr));
// console.log(Math.min.apply(null, arr));

// const newGetAvg = student1.getAvg.bind(student2);
// console.log(newGetAvg());

// const newGetBio = student1.getBio.bind(student2);
// console.log(newGetBio("Pune", "Dance"));
