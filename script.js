const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".photo-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;

    cards.forEach((card) => {
      const shouldShow = selected === "all" || card.dataset.category === selected;
      card.style.display = shouldShow ? "block" : "none";
    });
  });
});
