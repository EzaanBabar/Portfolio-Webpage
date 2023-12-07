let is_contact_open = false;
function toggle_contact() {
  is_contact_open = !is_contact_open; // Toggle the state
  if (is_contact_open) {
    document.body.classList.add("contact--open");
  } else {
    document.body.classList.remove("contact--open");
  }
}
