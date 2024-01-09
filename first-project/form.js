const inputLoginElement = document.querySelector('#login')
const inputPassElement = document.querySelector('#pass')
const formElement = document.querySelector('#form')
const validationElement = document.querySelector('#validation')
const authLinkElem = document.querySelector('#auth-link')
const adminTile = document.querySelector('#admin-title')
const userTitle = document.querySelector('#user-title')

const errorMessage = 'Заполните поля!'
const linkText = 'Скрытый контент'

const showElement = (elem) => elem.className = 'element_show'
const hideElement = (elem) => elem.className = 'element_hide'
const showAdminContent = () => showElement(adminTile)
const showBaseUserContent = () => showElement(userTitle)
const showValidationMessage = () => {
    showElement(validationElement)
    validationElement.textContent = errorMessage
}

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!inputLoginElement.value || !inputPassElement.value) {
        return showValidationMessage()
    }

    hideElement(formElement)
    authLinkElem.textContent = linkText

    if(inputLoginElement.value === 'admin' && inputPassElement.value === 'admin') {
        showAdminContent()
    } else {
        showBaseUserContent()
    }

})