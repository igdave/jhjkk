function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("msg").textContent = `Thanks for subscribing, ${email}!`;
  document.getElementById("email").value = "";
}

