const input = document.querySelector("input");
const views = document.querySelector("#views");
const price = document.querySelector("#price");
const valueType = document.querySelector("#type");
console.log(views);

let yearly = false;

input.oninput = showViews;

function showViews(evt) {
  //   views.textContent = Number(evt.target.value);
  if (evt.target.value >= 50) {
    valueType.textContent = "M";
  } else {
    valueType.textContent = "K";
  }

  if (evt.target.value === "10") {
    views.textContent = "10";
    price.textContent = "$8.00";
  }

  if (evt.target.value === "20") {
    views.textContent = "50";
    price.textContent = "$12.00";
  }

  if (evt.target.value === "30") {
    views.textContent = "100";
    price.textContent = "$16.00";
  }

  if (evt.target.value === "40") {
    views.textContent = "500";
    price.textContent = "$24.00";
  }

  if (evt.target.value === "50") {
    views.textContent = "1";
    price.textContent = "$34.00";
  }
}
