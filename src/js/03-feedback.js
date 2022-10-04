import throttle from "lodash.throttle";
const STG_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
form.addEventListener("input", throttle(onInput, 500));
function onInput() {
    localStorage.setItem(STG_KEY, JSON.stringify({ email: email.value, message: message.value }))
};
if (localStorage.getItem(STG_KEY)) {
    const parsed = JSON.parse(localStorage.getItem(STG_KEY));
    email.value = parsed.email;
    message.value = parsed.message;
}
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const parsed = JSON.parse(localStorage.getItem(STG_KEY));
    if (parsed) {
        console.log(parsed);
    };
    email.value = '';
    message.value = '';
    localStorage.clear();
}