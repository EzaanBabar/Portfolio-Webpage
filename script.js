let is_contact_open = false;
function toggle_contact() {
  is_contact_open = !is_contact_open; // Toggle the state
  if (is_contact_open) {
    document.body.classList.add("contact--open");
  } else {
    document.body.classList.remove("contact--open");
  }
}
function handleWrapperClick() {
  // Add your logic here to handle the click event
  // For example, navigate to another webpage
  //window.location.href = 'http://jfauto.s3-website.us-east-2.amazonaws.com/';
  window.open('https://gmw-webpage.vercel.app/', '_blank');

}
function handleWrapperClick2() {
  // Add your logic here to handle the click event
  // For example, navigate to another webpage
  window.open('https://jc-autodetail.com/', '_blank');
}