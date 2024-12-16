//state

//verifier le contenu de l'input toutes les 5 secondes
//pour que le state soit mis à jour
console.log(history);
let inputValue;
const input = document.querySelector("input");

if (history.state) {
  inputValue = history.state.input;
  input.value = inputValue;
}

setInterval(() => {
  const value = input.value;
  if (value !== inputValue) {
    inputValue = value;
    history.replaceState({ input: value }, "");
  }
}, 5000);

window.addEventListener("popstate", (event) => {
  console.log(event);
});
console.log(history.state);
