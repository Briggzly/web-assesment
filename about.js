console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The form has been submitted successful!");
}

function overPicture() {
  alert("You have nice teeth!");
}

document.querySelector("img").addEventListener("mouseover", overPicture);

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);
