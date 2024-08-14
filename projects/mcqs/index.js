const mcqs = [
  {
    id: 1,
    que: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    ans: "Mount Everest",
  },
  {
    id: 2,
    que: "Which planet is known as the Morning Star or the Evening Star?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    ans: "Venus",
  },
  {
    id: 3,
    que: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    ans: "Blue Whale",
  },
  {
    id: 4,
    que: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    ans: "Japan",
  },
  {
    id: 5,
    que: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    ans: "Diamond",
  },
  // {
  //   id: 6,
  //   que: "Which is the longest river in the world?",
  //   options: [
  //     "Amazon River",
  //     "Nile River",
  //     "Yangtze River",
  //     "Mississippi River",
  //   ],
  //   ans: "Nile River",
  // },
  // {
  //   id: 7,
  //   que: "What is the capital of Canada?",
  //   options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  //   ans: "Ottawa",
  // },
  // {
  //   id: 8,
  //   que: "Which element has the chemical symbol 'O'?",
  //   options: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
  //   ans: "Oxygen",
  // },
  // {
  //   id: 9,
  //   que: "What is the smallest country in the world?",
  //   options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
  //   ans: "Vatican City",
  // },
  // {
  //   id: 10,
  //   que: "Which planet is known as the Red Planet?",
  //   options: ["Earth", "Mars", "Jupiter", "Venus"],
  //   ans: "Mars",
  // },
  // {
  //   id: 11,
  //   que: "What is the capital of Australia?",
  //   options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  //   ans: "Canberra",
  // },
  // {
  //   id: 12,
  //   que: "Which ocean is the largest?",
  //   options: [
  //     "Atlantic Ocean",
  //     "Indian Ocean",
  //     "Arctic Ocean",
  //     "Pacific Ocean",
  //   ],
  //   ans: "Pacific Ocean",
  // },
  // {
  //   id: 13,
  //   que: "What is the largest desert in the world?",
  //   options: [
  //     "Sahara Desert",
  //     "Arabian Desert",
  //     "Gobi Desert",
  //     "Antarctic Desert",
  //   ],
  //   ans: "Antarctic Desert",
  // },
  // {
  //   id: 14,
  //   que: "Which country is the largest by area?",
  //   options: ["Canada", "China", "United States", "Russia"],
  //   ans: "Russia",
  // },
  // {
  //   id: 15,
  //   que: "What is the most spoken language in the world?",
  //   options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
  //   ans: "Mandarin Chinese",
  // },
  // {
  //   id: 16,
  //   que: "Which is the smallest planet in our solar system?",
  //   options: ["Mercury", "Mars", "Venus", "Pluto"],
  //   ans: "Mercury",
  // },
  // {
  //   id: 17,
  //   que: "What is the largest island in the world?",
  //   options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
  //   ans: "Greenland",
  // },
  // {
  //   id: 18,
  //   que: "Which country is known as the Land of the Thunder Dragon?",
  //   options: ["Nepal", "Bhutan", "Thailand", "Mongolia"],
  //   ans: "Bhutan",
  // },
  // {
  //   id: 19,
  //   que: "What is the most abundant gas in the Earth's atmosphere?",
  //   options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  //   ans: "Nitrogen",
  // },
  // {
  //   id: 20,
  //   que: "Which is the largest continent by area?",
  //   options: ["Africa", "Asia", "North America", "Europe"],
  //   ans: "Asia",
  // },
];

// Ye random order me sort karega mcqs ko.
mcqs.sort(function () {
  return 0.5 - Math.random();
});

// Abhi kis mcq pe hain wo isme store kar rahe hain.
let currentIndex = 0;

// Ye wo div hai jisme mcq dikha rahe hain.
const mcqContainer = document.getElementById("container-mcqs");

// Isme ham har mcq ka result store kar rahe hain.
const result = [];

// Ye submit btn ke click pe chalega.
function handleSubmit() {
  // Ye 4 options le ke aaye id pe se.
  // Ye andar isiliye likhe hai kyu ke mcq ham last me dikha rahe hai, to pehle bahar agar access karenge to null milega.
  const optionA = document.getElementById("option-a");
  const optionB = document.getElementById("option-b");
  const optionC = document.getElementById("option-c");
  const optionD = document.getElementById("option-d");

  // Yaha dekh rahe hai ke kon sa selected.
  let selected;
  if (optionA.checked) {
    selected = optionA;
  } else if (optionB.checked) {
    selected = optionB;
  } else if (optionC.checked) {
    selected = optionC;
  } else if (optionD.checked) {
    selected = optionD;
  } else {
    // Agar koi selected nahi hai to yehi se return kar rahe hain.
    alert("Please select an option.");
    return;
  }

  currentMcq = mcqs[currentIndex];
  // Yaha check kar rahe hai ke user ka ans sahi hai ya nahi.
  const isCorrect = selected.value.replaceAll("-", " ") === currentMcq.ans;

  // Ye object ham result me rakh rahe hain.
  result.push({
    isCorrect,
    que: currentMcq.que,
    correctAns: currentMcq.ans,
    yourAns: selected.value.replaceAll("-", " "),
  });

  // Ans sahi hai ya nahi wo ham user ko alert kar rahe hain.
  alert(isCorrect ? "Correct" : "Incorrect");

  // Yaha agle que pe badhrahe hain.
  handleNext();
}

// Ye next btn ke click pe chalega.
function handleNext() {
  if (currentIndex < mcqs.length - 1) {
    currentIndex++;
    showMcq();
  } else {
    // Yaha ham final result dikha rahe hain.
    let html = "";
    result.forEach(function (value, index) {
      html += `
        <div>
          <p>${index + 1}. ${value.que}</p>
          <p>Is Correct: ${value.isCorrect}</p>
          <p>Your Ans: ${value.yourAns}</p>
          <p>Correct Ans: ${value.correctAns}</p>
        </div>
      `;
    });

    mcqContainer.innerHTML = html;
  }
}

// Iska kaam hai mcq ke object pe se html banana aur use mcqContainer wale div me dikhana.
function showMcq() {
  // Is me ham currentIndex me jo number/index hai wo mcq ka object store kar rahe hain.
  const currentMcq = mcqs[currentIndex];

  // Ye ham us object pe se html bana rahe hain.
  // Yaha ham radio input ke value me jo bhi mcq ka otion hai usme se " " hata ke  "-" laga rahe hai, kyu ke value attribute me " " nahi chalta.
  const html = `
    <div>
        <div>
            <p class="progress">${currentIndex + 1}/${mcqs.length}</p>
        </div>
        <div id="mcqs-container">
            <p class="para-que">
                <span class="que-no">Q${currentIndex + 1}</span> ${
    currentMcq.que
  }
            </p>
            <div class="container-options">
                <div class="option">
                    <input type="radio" name="ans" value=${currentMcq.options[0].replaceAll(
                      " ",
                      "-"
                    )} id="option-a" />
                    <label for="option-a">${currentMcq.options[0]}</label>
                </div>
                <div class="option">
                    <input type="radio" name="ans" value=${currentMcq.options[1].replaceAll(
                      " ",
                      "-"
                    )} id="option-b" />
                    <label for="option-b">${currentMcq.options[1]}</label>
                </div>
                <div class="option">
                    <input type="radio" name="ans" value=${currentMcq.options[2].replaceAll(
                      " ",
                      "-"
                    )} id="option-c" />
                    <label for="option-c">${currentMcq.options[2]}</label>
                </div>
                <div class="option">
                    <input type="radio" name="ans" value=${currentMcq.options[3].replaceAll(
                      " ",
                      "-"
                    )} id="option-d" />
                    <label for="option-d">${currentMcq.options[3]}</label>
                </div>
            </div>
            <div class="btns-container">
                <button class="btn-success" onclick="handleSubmit()">
                    Submit
                </button>
                <button class="btn-next" onclick="handleNext()">Next</button>
            </div>
        </div>
    </div>
    `;

  // Ye html ham mcqContainer wale div me dikha rahe hain.
  mcqContainer.innerHTML = html;
}

// Ye ham pehla mcq dikhane ke liye call kar rahe hai yaha.
showMcq();
