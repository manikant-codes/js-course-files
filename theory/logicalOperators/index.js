const percentageInput = document.getElementById("percentage");
const cityInput = document.getElementById("city");

function check() {
  const percentage = Number(percentageInput.value);
  const city = cityInput.value.toLowerCase();

  //   if (percentage > 90 && city === "surat") {
  //     alert("You are eligible for scholarship!");
  //   } else {
  //     alert("You are not eligible for scholarship!");
  //   }
  //   if (percentage > 90 || city === "surat") {
  //     alert("Scholarship!");
  //   } else {
  //     alert("No scholarship!");
  //   }
  //   if (!(percentage > 90 || city === "surat")) {
  //     alert("Scholarship!");
  //   } else {
  //     alert("No scholarship!");
  //   }
  //   if (!(percentage > 90 && city === "surat")) {
  //     alert("Scholarship!");
  //   } else {
  //     alert("No scholarship!");
  //   }
}

// Ration Card Form
// Condition: city surat honi chahiye aur annual income 2 lakhs se kam honi chahiye.

// Internal Marks Grade Form
// Condition: 5 ya 5 se zada assignments kiye aur attendance 95% se zada hone chahiye to grade A, agae 4 ya 4 se zada assignmets kiye hoo aur attendance 85% se jada hoo to grade B warna grade C.

// Payment Form
// Agar option credit-card / debit-card to 10% ka discount dena hai warna nahi dena hai. Options: COD, UPI, CreditCard, DebitCard
