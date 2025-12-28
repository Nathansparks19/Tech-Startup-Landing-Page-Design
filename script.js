function handleForm(event) {
  event.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = "Thank you for reaching out! We'll get back to you soon.";
  msg.style.color = "#007bff";
  event.target.reset();
  return false;
}
