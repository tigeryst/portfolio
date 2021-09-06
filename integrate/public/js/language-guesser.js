const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const form = document.querySelector('#inputForm');
const display = document.querySelector('#result');

form.addEventListener('submit', e => {
    e.preventDefault();
    const languageInput = form.elements.query.value;
    form.elements.query.value = '';
    console.log(langaugeInput);
    const langCode = franc(languageInput);
    try {
        const language = langs.where("3", langCode);
        display.innerText = `I'm guessing that's ${language.name}.`.green;
    } catch (e) {
        display.innerText = 'Could not match a language. Please try again with a larger sample.'.red;
    }
});