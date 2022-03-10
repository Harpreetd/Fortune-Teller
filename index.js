let neonLight = document.getElementById("neon-light");
let inputContainer = document.getElementById("input-container");
neonLight.onclick = showInput;
let userName;
let displayName = document.getElementById("user-name");
let fortuneHolder = document.getElementById("content");

fortuneHolder.style.padding = "20px";
fortuneHolder.style.borderRadius = "20px";

function showInput() {
  inputContainer.style.visibility = "visible";
  displayName.style.visibility = "hidden";
  fortuneHolder.style.visibility = "hidden";
}

let fortunesArray = [
  "Launch and learn. Everything is progress.",
  "Soon life will become more interesting",
  "Someone is thinking of you",
  "Welcome change",
  "You are going to win 1 Million NOK",
];
function getFortune() {
  userName = document.getElementById("enter-name").value;
  inputContainer.style.visibility = "hidden";
  let randomFortune = Math.floor(Math.random() * fortunesArray.length);
  displayName.style.visibility = "visible";
  fortuneHolder.style.visibility = "visible";

  switch (randomFortune) {
    case 0:
      fortuneHolder.style.backgroundColor = "#60a2f5";
      displayName.innerHTML = userName;
      fortuneHolder.innerHTML = fortunesArray[0];
      break;
    case 1:
      fortuneHolder.style.background = "#5a5bf3";
      fortuneHolder.innerHTML = fortunesArray[1];
      break;
    case 2:
      fortuneHolder.style.background = "#91e7d9";
      fortuneHolder.innerHTML = fortunesArray[2];
      break;
    case 3:
      fortuneHolder.style.background = "#81b1fa";
      fortuneHolder.innerHTML = fortunesArray[3];
      break;
    case 4:
      fortuneHolder.style.background = "#65f4cd";
      fortuneHolder.innerHTML = fortunesArray[4];
    default:
      fortuneHolder.style.background = "#edaef9";
  }

  displayName.innerHTML = userName;

  document.getElementById("enter-name").value = "";
}
