let randomRestArr = ["Olive Garden", "In-N-Out", "R&R BBQ"];

function randomRest() {
  let randomValue =
    randomRestArr[Math.floor(Math.random() * randomRestArr.length)];
  document.querySelector("#answer").textContent = randomValue;
}

document.querySelector("#random-rest").addEventListener("click", randomRest);
