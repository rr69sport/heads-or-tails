import { showWinningOption, showError, resetText } from "./functions/show_winning_option.js";

const rootStyles = document.documentElement.style;

// Form Choices
const formChoices = document.getElementById('form-choices');
const submit = document.getElementById('button-submit');

formChoices.addEventListener('submit', (e) => {
    e.preventDefault()

    if (formChoices.option_a.value.trim().length > 0 &&
        formChoices.option_b.value.trim().length > 0) {

        const options = {
            a: formChoices.option_a.value,
            b: formChoices.option_b.value
        }

        showWinningOption(options)
    } else {
        formChoices.reset()
        showError()
    }
})
formChoices.addEventListener('reset', () => {
    // Para que no interrumpa el setTimeout
    if (formChoices.option_a.value.trim().length === 0 ||
        formChoices.option_b.value.trim().length === 0) return
    resetText()
    submit.setAttribute('disabled', true)
})

formChoices.addEventListener('input', () => {

    const emptyFields = formChoices.option_a.value.trim().length === 0 || formChoices.option_b.value.trim().length === 0

    emptyFields ? submit.setAttribute('disabled', true) : submit.removeAttribute('disabled')

});

// Settings
const settings = document.getElementById('settings');
const settingsToggle = document.getElementById('settings-toggle');
const settingsOptions = document.getElementById('settings-options');

settingsToggle.addEventListener('click', (e) => {

    const topMenu = e.target.offsetTop + e.target.clientHeight

    rootStyles.setProperty('--top', `${topMenu}px`)

    settings.classList.toggle('overlay--full-screen')
    settingsOptions.classList.toggle('settings__list--active')

})
settings.addEventListener('click', (e) => {

    if (e.target === settings) {

        settingsOptions.classList.toggle('settings__list--active')
        settings.classList.toggle('overlay--full-screen')
    }
})

// Modal FAQ
const modalFAQ = document.getElementById('modal-faq');
const openModalFAQ = document.getElementById('faq-toggle');

openModalFAQ.addEventListener('click', () => {

    settingsOptions.classList.remove('settings__list--active')
    settings.classList.remove('overlay--full-screen')

    modalFAQ.hasAttribute('open') ? modalFAQ.removeAttribute('open') : modalFAQ.setAttribute('open', 'true')
})
modalFAQ.addEventListener('click', (e) => {
    if (e.target === modalFAQ) modalFAQ.removeAttribute('open')
})