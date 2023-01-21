let likeButtons = document.querySelectorAll(".element__like-button");


likeButtons.forEach((likeButtons) => {
  likeButtons.addEventListener("click", () => {
    likeButtons.classList.toggle("element__like-button_active");
    likeButtons.classList.toggle("hover");
    
  });
});


let editButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup-container');
let closeButton = document.querySelector('.edit-form__close');

editButton.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
});




// Находим форму в DOM
let formElement = document.querySelector('.edit-form');

let nameInput = document.querySelector('.edit-form__input-name');
let jobInput = document.querySelector('.edit-form__input-description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let submitButton = document.querySelector('.edit-form__submit');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    
    
    
    console.log(jobInput.value);
    console.log(nameInput.value);

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    
    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
submitButton.addEventListener('click', handleFormSubmit);
formElement.addEventListener('submit', handleFormSubmit); 
submitButton.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
});



