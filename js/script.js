function is_slot_empty(child_count) {
  if (child_count < 5) {
    return true;
  }
  return false;
}
function change_disabled_btn_color(btn_element) {}
document
  .getElementById("cards-section")
  .addEventListener("click", function (event) {
    const selectedPlyers = document.getElementById("selected-player-list");
    slot_empty = is_slot_empty(selectedPlyers.childElementCount);
    const currentElement = event.target;
    if (
      currentElement.innerText == "Select" &&
      !currentElement.disabled &&
      slot_empty
    ) {
      const li_element = document.createElement("li");
      li_element.setAttribute("class", "py-3");
      const span_inside_li = document.createElement("span");
      span_inside_li.setAttribute("class", "gap");
      span_inside_li.innerText =
        currentElement.parentElement.firstElementChild.innerText;

      li_element.appendChild(span_inside_li);

      //   li_element.innerText =
      //     currentElement.parentElement.firstElementChild.innerText;
      selectedPlyers.appendChild(li_element);
      currentElement.setAttribute("disabled", "");
      currentElement.style.backgroundColor = "rgb(148 163 184)";
    }
  });
