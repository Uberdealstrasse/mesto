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



// FORM
let addButton = document.querySelector('.profile__add-button');
let form = document.querySelector('.form');
let formClose = document.querySelector('.form__close');
let placeNameInput = document.querySelector('.edit-form__input_info_place-name');
let placeImgInput = document.querySelector('.edit-form__input_info_place-img');


// открытие формы
function formOpen() {
  form.classList.add('form_opened');
  
}

addButton.addEventListener('click', formOpen);


// функция закрытия окна
function formCloses() {
  form.classList.remove('form_opened');
  
}
formClose.addEventListener('click', formCloses);







// Карточки


let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  
]; 

initialCards = initialCards.reverse();


let elements = document.querySelector(".elements");
let elementTemplate = document.querySelector(".element-template").content;
let placeName = document.querySelector('.edit-form__input_info_place-name');
let placeImg = document.querySelector('.edit-form__input_info_place-img');
let addForm = document.querySelector('.add-form');


