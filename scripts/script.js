// кнопки для редактирования
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');


// попапы
const editForm = document.querySelector('.popup_type_edit-form');
const addForm = document.querySelector('.popup_type_add-form');
const newCardForm = document.querySelector('.add-form')
const popupPhoto = document.querySelector('.popup_type_photo');
const closeButtons = document.querySelectorAll('.popup__close');





// данные в попапах
const nameInput = document.querySelector('.edit-form__input_info_name');
const jobInput = document.querySelector('.edit-form__input_info_description');
const placeNameInput = document.querySelector('.edit-form__input_info_place-name');
const placeImgInput = document.querySelector('.edit-form__input_info_place-img');
const popupPhotoImg = popupPhoto.querySelector('.popup__place-img');
const popupPhotoName = popupPhoto.querySelector('.popup__place-name');

// данные, которые меняются на странице
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const placeName = document.querySelector('.edit-form__input_info_place-name');
const placeImg = document.querySelector('.edit-form__input_info_place-img');

// карточки
const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector(".element-template").content;

const initialCards = [
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



// ФУНКЦИИ ОТКРЫТИЯ ПОПАПОВ
function openPopup(popup) {
  popup.classList.add('popup_opened');

  // привязка функций закрытия к событиям
  document.addEventListener('keydown', closeKey);
  document.addEventListener('mousedown', overlayClick);

}

// функция закрытия попапа на клавишу esc 
function closeKey(evt) {
  
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}
// функция закрытия попапа при клике на оверлэй 
function overlayClick(evt) {
  const openPopup = document.querySelector('.popup_opened');
  if (openPopup && evt.target === openPopup) {
    closePopup(openPopup);
  }
}


// Открытие формы редактирования профиля
function openEditForm() {
  openPopup(editForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;

}

// Открытие формы добавления карточек
function openAddForm() {
  openPopup(addForm);
  
}


// привязка функций открытия к кнопкам
buttonEdit.addEventListener('click', openEditForm);
buttonAdd.addEventListener('click', openAddForm);


// ФУНКЦИИ ЗАКРЫТИЯ ПОПАПОВ
function closePopup(popup) {
  popup.classList.remove('popup_opened');

  // отвязка функций закрытия к событиям
  document.removeEventListener('keydown', closeKey);
  document.removeEventListener('mousedown', overlayClick);
}

// Закрытие формы редактирования профиля
function closeEditForm() {
  closePopup(editForm);
}

// Закрытие формы добавления карточек
function closeAddForm(evt) {
  closePopup(addForm);
  evt.target.reset();
}

// Закрытие формы добавления карточек
function closeAddForm() {
  closePopup(addForm);
  newCardForm.reset();
}

// привязка функций закрытия к кнопкам
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


// ФУНКЦИИ ПРИМЕНЕНИЯ ДАННЫХ

// применение редактирования профиля
function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeEditForm()
}
editForm.addEventListener('submit', editFormSubmit);



// передача информации с массива
const cardInfo = initialCards.map(function (el) {
  return {
    name: el.name,
    link: el.link
  };
});
// console.log(cardInfo);


function createCard(item) {
  // формирование карточки
  const card = elementTemplate.querySelector(".element").cloneNode(true);
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__image').alt = item.name;
  card.querySelector(".element__title").textContent = item.name;
  // лайки в карточках
  const like = card.querySelector('.element__like-button');
  like.addEventListener('click', function () { like.classList.toggle('element__like-button_active') });
  // удаление карточек
  const trashCan = card.querySelector('.element__trash');
  trashCan.addEventListener('click', function () { card.remove() });
  // просмотр фотографии
  const cardImg = card.querySelector('.element__image');
  cardImg.addEventListener('click', function () {
    popupPhotoImg.src = item.link;
    popupPhotoImg.alt = item.name;
    popupPhotoName.textContent = item.name;
    openPopup(popupPhoto);
  });

  return card
}


function addCards(item) {
  const cardElement = createCard(item);
  elements.append(cardElement);
}

// добавление карточек на страницу
initialCards.forEach(addCards);


// добавление новых карточек
function addFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: placeName.value,
    link: placeImg.value
  }
  elements.prepend(createCard(card));
  closeAddForm();
}

addForm.addEventListener('submit', addFormSubmit);






