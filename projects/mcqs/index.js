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
  {
    id: 6,
    que: "Which is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    ans: "Nile River",
  },
  {
    id: 7,
    que: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    ans: "Ottawa",
  },
  {
    id: 8,
    que: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
    ans: "Oxygen",
  },
  {
    id: 9,
    que: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    ans: "Vatican City",
  },
  {
    id: 10,
    que: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    ans: "Mars",
  },
  {
    id: 11,
    que: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    ans: "Canberra",
  },
  {
    id: 12,
    que: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    ans: "Pacific Ocean",
  },
  {
    id: 13,
    que: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Antarctic Desert",
    ],
    ans: "Antarctic Desert",
  },
  {
    id: 14,
    que: "Which country is the largest by area?",
    options: ["Canada", "China", "United States", "Russia"],
    ans: "Russia",
  },
  {
    id: 15,
    que: "What is the most spoken language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    ans: "Mandarin Chinese",
  },
  {
    id: 16,
    que: "Which is the smallest planet in our solar system?",
    options: ["Mercury", "Mars", "Venus", "Pluto"],
    ans: "Mercury",
  },
  {
    id: 17,
    que: "What is the largest island in the world?",
    options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    ans: "Greenland",
  },
  {
    id: 18,
    que: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Nepal", "Bhutan", "Thailand", "Mongolia"],
    ans: "Bhutan",
  },
  {
    id: 19,
    que: "What is the most abundant gas in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    ans: "Nitrogen",
  },
  {
    id: 20,
    que: "Which is the largest continent by area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    ans: "Asia",
  },
];

let currentIndex = 0;

const mcqsContainer = document.getElementById("container-mcqs");

function handleSubmit() {}

function handlePrev() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  showMcq();
}

const intervalId = setInterval(handleNext, 500);

function handleNext() {
  if (currentIndex < mcqs.length) {
    currentIndex++;
    showMcq();
  } else {
    clearInterval(intervalId);
  }
}

function showMcq() {
  const currentMcq = mcqs[currentIndex];

  const html = `
    <div>
        <div>
            <p class="progress">${currentIndex + 1}/${mcqs.length}</p>
        </div>
        <div id="mcqs-container">
            <p class="para-que">
                <span class="que-no">Q${currentMcq.id}</span> ${currentMcq.que}
            </p>
            <div class="container-options">
                <div class="option">
                    <input type="radio" name="ans" value="1" id="option-a" />
                    <label for="option-a">${currentMcq.options[0]}</label>
                </div>
                <div class="option">
                    <input type="radio" name="ans" value="1" id="option-a" />
                    <label for="option-a">${currentMcq.options[1]}</label>
                </div>
                <div class="option">
                    <input type="radio" name="ans" value="1" id="option-a" />
                    <label for="option-a">${currentMcq.options[2]}</label>
                </div>
                <div class="option">
                    <input type="radio" name="ans" value="1" id="option-a" />
                    <label for="option-a">${currentMcq.options[3]}</label>
                </div>
            </div>
            <div class="btns-container">
                <button onclick="handlePrev()">
                    Prev
                </button>
                <button class="btn-success" onclick="handleSubmit()">
                    Submit
                </button>
                <button class="btn-next" onclick="handleNext()">Next</button>
            </div>
        </div>
    </div>
    `;

  mcqsContainer.innerHTML = html;
}

showMcq();
