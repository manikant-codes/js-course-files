window.onload = function () {
  const student = ["Ram", "Das", 10, 11, "Surat"];

  const [fname, lname, ...others] = student;

  console.log("fname", fname);
  console.log("lname", lname);
  console.log("asd", others);
};
