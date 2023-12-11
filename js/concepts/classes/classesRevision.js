// function Student(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
// }

// Student.prototype.getFullName = function() {
//     return this.fname + this.lname;
// }

// const s1 = new Student("Manikant", "Jha");
// const s2 = new Student("Pritesh", "Dholakiya");

// console.log("s1", s1);
// console.log("s2", s2);

class User {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    get _fname() {
        const temp = this.fname.toLowerCase()
        return temp;
    }

    set _fname(fname) {
        this.fname = fname;
    }

    getFullName() {
        return this.fname + this.lname;
    }

    static toSmall(fname) {
        console.log(fname.toLowerCase());
        
    }
}

class Admin extends User {
    constructor(level, fname, lname) {
        super(fname, lname);
        this.level = level;
    }

    updateUser() {
        console.log("User updated!");
    }

    deleteUser() {
        console.log("User deleted");
    }
}

const u1 = new User("A", "B");
const u2 = new Admin("super admin", "C", "D");

// console.log("u1", u1.fname)
// console.log("u1", u1._fname)
// console.log("u2", u2)
