const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const btn = document.getElementById('submit');

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    if(!validateEmail(email)) {
        emailError.textContent = 'Please provide a valid email adress';
        emailInput.classList.add('invalid');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
    }
})

btn.addEventListener('click', function(e) {
    e.preventDefault();
})


