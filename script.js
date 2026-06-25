const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".photo-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;

    cards.forEach((card) => {
      const shouldShow = selected === "all" || card.dataset.category === selected;
      card.style.display = shouldShow ? "inline-block" : "none";
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.querySelector(".lightbox-close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const title = card.querySelector("h3").textContent;

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = title;
    lightbox.classList.add("active");
  });
});

closeButton.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.classList.remove("active");
  }
});
