// получаем контент всех страниц
const aboutContentWrapper = document.querySelector('.about');
const mainContentWrapper = document.querySelector('.main-content');
const servicesContentWrapper = document.querySelector('.services');
const advancesContentWrapper = document.querySelector('.advances');
const studiosContentWrapper = document.querySelector('.studios');
const authContentWrapper = document.querySelector('.auth');

// создаем хэш мап для получения элемента по ключу
const navigationConfig = {
    about: aboutContentWrapper,
    main: mainContentWrapper,
    services: servicesContentWrapper,
    advances: advancesContentWrapper,
    studios: studiosContentWrapper,
    auth: authContentWrapper
}

window.addEventListener('hashchange', ()=> {
    const hashValue = new URL(window.location).hash.replace('#', '')
    const activeContent = document.querySelector('.content_active')

    activeContent?.classList.add('content_hide')
    activeContent?.classList.remove('content_active')

    navigationConfig[hashValue]?.classList.add('content_active')
})

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location)
    url.hash = '#main'
    window.location = url
})