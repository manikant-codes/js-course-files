function getAge() {
  const inputDOB = document.getElementById("dob");
  const outputPara = document.getElementById("output");

  const dob = new Date(inputDOB.value);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - dob.getFullYear();
  let months = currentDate.getMonth() - dob.getMonth();
  let days = currentDate.getDate() - dob.getDate();

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  if (days < 0) {
    months--;
    days = 31 + days;
  }

  outputPara.innerHTML = `
  years ${years},
  months ${months},
  days ${days}
  `;

  console.log();
}
