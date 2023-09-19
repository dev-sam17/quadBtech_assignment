const progressBar = document.querySelector(".CircularProgressbar-path");
const textElement = document.querySelector(".CircularProgressbar-text");
const totalTime = 60;
let currentTime = totalTime;
let timerInterval;

function updateProgressBar() {
  const progress = (totalTime - currentTime) / totalTime;
  const dashOffset = 289.027 - 289.027 * progress;
  progressBar.style.strokeDashoffset = dashOffset;
  textElement.textContent = currentTime;
  
  if (currentTime > 0) {
    currentTime--;
  } else {
    clearInterval(timerInterval);
    currentTime = totalTime;
    progressBar.style.strokeDashoffset = 0;
    setTimeout(startProgressBar, 1000);
    return;
  }
}

function startProgressBar() {
  timerInterval = setInterval(updateProgressBar, 1000);
}

startProgressBar(); 

const themeToggle = document.getElementById("theme-toggle");
const modeChange = document.getElementById("mode-change");

themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    modeChange.classList.remove("theme-light");
    modeChange.classList.add("theme-dark");
  } else {
    modeChange.classList.remove("theme-dark");
    modeChange.classList.add("theme-light");
  }
});

async function populateData() {
  try {
    const response = await fetch("http://localhost:8000/data");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    const rowData = data.data;
    const table = document.getElementById("table");
    const tbody = table.querySelector("tbody");
    let count = 1;

    rowData.forEach((item) => {
      const row = document.createElement("tr");
      const columns = [
        count,
        "name",
        "last_traded_price",
        "buy",
        "volume",
        "base_unit",
      ];

      columns.forEach((column) => {
        const cell = document.createElement("td");
        cell.classList.add("align-middle");
        const h4Element = document.createElement("h4");
        h4Element.classList.add("table-text");
        if (column == count) {
          h4Element.textContent = count;
        } 
        else if( column == "buy"){
            const buySell = `₹ ${item["buy"]} / ₹ ${item["sell"]}`;
            console.log(buySell);
            h4Element.textContent = buySell;
        }
         else {
          h4Element.textContent = item[column];
        }
        cell.appendChild(h4Element);

        row.appendChild(cell);
      });
      tbody.appendChild(row);
      count++;
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

populateData();
