document.addEventListener("DOMContentLoaded", function () {
  // 1. Selectionner les elements
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const navItems = document.querySelectorAll("#header__nav-link");
  // 2. Ecouter le clic sur le burger
  burger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  // 3. Fermer le menu au clic sur un lien
  const navLinks = document.querySelectorAll(".header__nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });

  // 3.2 Dark mode
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark");
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "Clair";
    } else {
      themeToggle.textContent = "Sombre";
    }
  });

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    // Empecher le rechargement de la page
    e.preventDefault();
    // Recuperer les valeurs des champs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`"Merci ${name}, votre message a bien été envoyé !`);
      contactForm.reset();
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });
});
