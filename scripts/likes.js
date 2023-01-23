let likeButtons = document.querySelectorAll(".element__like-button");


likeButtons.forEach((likeButtons) => {
  likeButtons.addEventListener("click", () => {
    likeButtons.classList.toggle("element__like-button_active");
    likeButtons.classList.toggle("element__like-button_hover");
  });
});




