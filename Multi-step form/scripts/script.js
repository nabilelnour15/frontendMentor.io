/* personal info step */
const divInputs = document.querySelectorAll(".personal-info div");
const inputs = document.querySelectorAll(".personal-info div input");
const next_btn = document.querySelector(".next_btn");
const back_btn = document.querySelector(".back");

const cheackInputField = (ele) => {
  if (ele.value === "" && !ele.closest("div").classList.contains("invalid")) {
    ele.closest("div").classList.add("invalid");
  } else if (
    !ele.value === "" &&
    ele.closest("div").classList.contains("invalid")
  ) {
    ele.closest("div").classList.remove("invalid");
  }
};

inputs.forEach((ele) => {
  ele.addEventListener("focus", function () {
    ele.closest("div").classList.remove("invalid");
  });
  ele.addEventListener("focusout", function () {
    cheackInputField(ele);
  });
});

next_btn.addEventListener("click", () => {
  inputs.forEach((ele) => {
    console.log(ele.classList);
    cheackInputField(ele);
  });
});
