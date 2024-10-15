const obj = {
  fname: "Manikant",
  lname: "Jha",
  getFullName: function (like, pronoun, city) {
    return `${this.fname} ${this.lname} likes ${like}. ${pronoun} lives in ${city}.`;
  }
};

const obj2 = {
  fname: "Ritu",
  lname: "Kumar"
};

console.log(obj.getFullName("ice-cream", "He", "Surat"));
console.log(obj.getFullName.call(obj2, "travelling", "He", "Pune"));
console.log(obj.getFullName.apply(obj2, ["travelling", "He", "Pune"]));

const newGetFullName = obj.getFullName.bind(obj2);

console.log(newGetFullName("eating", "He", "Surat"));
