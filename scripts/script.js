// кнопки для редактирования
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');


// попапы
const popUp = document.querySelector('.popup');
const editForm = document.querySelector('.popup_type_edit-form');
const addForm = document.querySelector('.popup_type_add-form');
const popupPhoto = document.querySelector('.popup_type_photo');
const editFormCloseButton = editForm.querySelector('.popup__close');
const addFormCloseButton = addForm.querySelector('.popup__close');
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close');




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


// ФУНКЦИИ ОТКРЫТИЯ ПОПАПОВ
function popUpOpen(popup) {
  popup.classList.add('popup_opened');

}

// Открытие формы редактирования профиля
function editFormOpen() {
  popUpOpen(editForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;

}

// Открытие формы добавления карточек
function addFormOpen() {
  popUpOpen(addForm);
}

// Открытие фотографии с карточки
// function popupPhotoOpen() {
  
// }


// привязка функций открытия к кнопкам
buttonEdit.addEventListener('click', editFormOpen);
buttonAdd.addEventListener('click', addFormOpen);


// ФУНКЦИИ ЗАКРЫТИЯ ПОПАПОВ
function popUpClose(popup) {
  popup.classList.remove('popup_opened');
}

// Закрытие формы редактирования профиля
function editFormClose() {
  popUpClose(editForm);
}

// Закрытие формы добавления карточек
function addFormClose() {
  popUpClose(addForm);
  placeName.value = '';
  placeImg.value = '';
}

// Закрытие формы добавления карточек
function popupPhotoClose() {
  popUpClose(popupPhoto);
  
}



// привязка функций закрытия к кнопкам
editFormCloseButton.addEventListener('click', editFormClose);
addFormCloseButton.addEventListener('click', addFormClose);
popupPhotoCloseButton.addEventListener('click', popupPhotoClose);



// ФУНКЦИИ ПРИМЕНЕНИЯ ДАННЫХ

// применение редактирования профиля
function editFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    editFormClose()
}
editForm.addEventListener('submit', editFormSubmit); 



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



// передача информации с массива
let elementInfo = initialCards.map(function (el) {
  return {
    name: el.name,
    link: el.link
  };
});
console.log(elementInfo);


// формирование карточек
function element({name, link}) {
  const place = elementTemplate.querySelector(".element").cloneNode(true);
  place.querySelector(".element__title").textContent = name;
  place.querySelector(".element__image").src = link;
  place.querySelector(".element__image").alt = name;
  elements.prepend(place);
  // лайки в карточках
  const like = place.querySelector('.element__like-button');
  like.addEventListener('click', function() {like.classList.toggle('element__like-button_active')});
  // удаление карточек
  const trashCan = place.querySelector('.element__trash');
  trashCan.addEventListener('click', function() {place.remove()});
  // просмотр фотографии
  const placeImg = place.querySelector('.element__image');
  placeImg.addEventListener('click', function() {
    popupPhotoImg.src = link;
    popupPhotoImg.alt = name;
    popupPhotoName.textContent = name;
    popUpOpen(popupPhoto);
  });
 
}

// отображение карточек на странице
function showElement() {
  elementInfo.forEach(element);
}
showElement();


// добавление новых карточек
function addFormSubmit (evt) {
  evt.preventDefault();  
  let addCards = [];
  addCards.push({'name': placeName.value, 'link': placeImg.value});
  newCard = addCards.pop();
  // внесение данный в основной массив (на всякий случай);
  initialCards = (initialCards.slice().reverse().concat(newCard)).reverse();
  
  addCards = [newCard];
  
  let newElementInfo = addCards.map(function (el) {
    return {
      name: el.name,
      link: el.link
    };
  });
     
  
  function showElement() {
    newElementInfo.forEach(element);
  }
  
  showElement();  
  addFormClose()
}

addForm.addEventListener('submit', addFormSubmit);
 


 
  

 