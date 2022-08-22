const selectedPlyers = get_element("selected-player-list");
const perPlayerCostField = get_element("per-player-cost-field");
get_element("cards-section").addEventListener("click", function (event) {
  slot_empty = is_slot_empty(selectedPlyers.childElementCount);
  const currentElement = event.target;
  if (currentElement.innerText == "Select") {
    if (slot_empty) {
      const li_element = document.createElement("li");
      li_element.setAttribute("class", "py-3");
      const span_inside_li = document.createElement("span");
      span_inside_li.setAttribute("class", "gap");
      span_inside_li.innerText =
        currentElement.parentElement.firstElementChild.innerText;

      li_element.appendChild(span_inside_li);

      selectedPlyers.appendChild(li_element);
      currentElement.setAttribute("disabled", "");
      currentElement.style.backgroundColor = "rgb(148 163 184)";
    } else {
      alert("Can not add more than 5 players");
    }
  }
});

get_element("calculate-btn").addEventListener("click", function () {
  if (valid_value(parseFloat(perPlayerCostField.value))) {
    const total_player_cost = count_total_player_expense(
      selectedPlyers.childElementCount,
      perPlayerCostField.value
    );

    get_element("player-cost").innerText = total_player_cost;
    perPlayerCostField.value = "";
  }
});
get_element("calculate-total-btn").addEventListener("click", function () {
  const managerCostField = document.getElementById("manager-cost-field");
  const coachCostField = document.getElementById("coach-cost-field");

  if (
    valid_value(parseFloat(managerCostField.value)) &&
    valid_value(parseFloat(coachCostField.value))
  ) {
    const total_cost = get_total_cost(
      get_element("player-cost").innerText,
      managerCostField.value,
      coachCostField.value
    );

    get_element("total-cost").innerText = "$" + total_cost;
    managerCostField.value = "";
    coachCostField.value = "";
  }
});

get_element("current-year").innerText = new Date().getFullYear();
