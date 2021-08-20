function favColor() {
  alert("My favorite color is blue.");
}

function favPlace() {
  alert("My favorite place is Cabo Mexico");
}

function favRitual() {
  alert("I don't have a favorite ritual");
}

document.querySelector("#color").addEventListener("click", favColor);
document.querySelector("#place").addEventListener("click", favPlace);
document.querySelector("#ritual").addEventListener("click", favRitual);
