let input_box = document.getElementById("input-box");
let all_buttons = document.querySelectorAll("button");
let string = "";
all_buttons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    if (evt.target.innerHTML == "AC") {
      string = "";
      input_box.value = string;
    } else if (evt.target.innerHTML == "=") {
      string = eval(string);
      input_box.value = string;
    } else {
      string += evt.target.innerHTML;

      input_box.value = string;
    }
  });
});
