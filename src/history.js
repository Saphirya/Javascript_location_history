//history

console.log(history.length);

const back = document.getElementById("back");
const next = document.getElementById("next");

back.addEventListener("click", () => {
  history.back();
});

next.addEventListener("click", () => {
  history.forward();
});

//go

history.go(-1);
