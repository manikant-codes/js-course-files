const student1 = {
  engMarks: 15,
  gujMarks: 25,
  getAvg: function (...args) {
    let sum = 0;
    let count = 0;

    for (const value of args) {
      if (!isNaN(value)) {
        sum += value;
        count++;
      }
    }

    sum += this.engMarks + this.gujMarks;
    const avg = sum / (count + 2);
    console.log(avg);
  }
};

const student2 = {
  engMarks: 29,
  gujMarks: 35
};

const student3 = {
  engMarks: 48,
  gujMarks: 56
};

student1.getAvg(10, 10, 10, 10, 56, 45, 78, 89);
student1.getAvg.call(student2);
