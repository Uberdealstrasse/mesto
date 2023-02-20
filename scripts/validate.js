// Валидация

// Отображение ошибки
const showInputError = (config, formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

// Отключает отображение ошибки
const hideInputError = (config, formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}



// Анализ валидации введенных в инпут значений
const checkInputValidity = (config, formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(config, formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(config, formSelector, inputSelector);
  }
}



// проверка корректности содержимого массива и возврат получившихся значений
const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  })
}



// Переключение режимов активности кнопки
const toggleButtonState = (config, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}



// назначение слушателей
const setEventListeners = (config, formSelector) => 
{
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  const buttonElement = formSelector.querySelector(config.submitButtonSelector);
  toggleButtonState(config, inputList, buttonElement);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => 
    {
      checkInputValidity(config, formSelector, inputSelector);
      toggleButtonState(config, inputList, buttonElement)
    })
  })
}



// функция валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(config, formSelector);
  })
}


// ОБЩЕЕ 
enableValidation({
  formSelector: '.edit-form',
  inputSelector: '.edit-form__input',
  submitButtonSelector: '.edit-form__submit',
  inactiveButtonClass: 'edit-form__submit_disabled',
  inputErrorClass: 'edit-form__input_type_error',
  errorClass: 'edit-form__input-error_active'
});


