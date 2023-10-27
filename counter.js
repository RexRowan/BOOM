let counter = 11;
let intervalId;

function count() {
  counter--;
  document.querySelector("h1").innerHTML = counter;

  if (counter === 0) {
    clearInterval(intervalId);
    document.querySelector("h1").innerHTML = "BOOM!";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const h1 = document.querySelector("h1");

  button.onclick = function () {
    h1.innerHTML =
      '<font size="150">Self Destruction Sequence Initialized!</font>';
    intervalId = setInterval(count, 1000);

    button.disabled = true;
  };
});
