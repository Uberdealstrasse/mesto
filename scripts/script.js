let buttonEdit = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.edit-form');
let nameInput = document.querySelector('.edit-form__input_info_name');
let jobInput = document.querySelector('.edit-form__input_info_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// функция открытия окна
function popUpOpen() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

buttonEdit.addEventListener('click', popUpOpen);


// функция закрытия окна
function popUpClose() {
  popUp.classList.remove('popup_opened');
}

buttonClose.addEventListener('click', popUpClose);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popUpClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 









// let likeButtons = document.querySelectorAll(".element__like-button");


// likeButtons.forEach((likeButtons) => {
//   likeButtons.addEventListener("click", () => {
//     likeButtons.classList.toggle("element__like-button_active");
//     likeButtons.classList.toggle("element__like-button_hover");
//   });
// });



