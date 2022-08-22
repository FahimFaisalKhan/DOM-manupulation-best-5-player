function is_slot_empty(child_count) {
  if (child_count < 5) {
    return true;
  }
  return false;
}
function get_element(id) {
  return document.getElementById(id);
}
function count_total_player_expense(number_of_players, per_player_cost) {
  return number_of_players * parseFloat(per_player_cost);
}
function get_total_cost(player_cost, manager_cost, coach_cost) {
  return (
    parseFloat(player_cost) + parseFloat(manager_cost) + parseFloat(coach_cost)
  );
}
