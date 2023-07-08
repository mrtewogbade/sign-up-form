const email = document.querySelector('#email')
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const errorMsg = document.querySelector('.errorMessage')


const inputs = [email, phone, password, confirmPassword];

inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
        errorMsg.textContent = '';
        item.classList.remove('error');
        if (item == password || item == confirmPassword) {
            password.classList.remove('error');
            confirmPassword.classList.remove('error')
        };
    });
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMsg.textContent = "Passwords don't match";
        return;
    }
    if (!phone.value.match(/^\d{11}$/)) {
        phone.classList.add("error");
        errorMsg.textContent = "Phone number needs to be exactly 11 digits";
        return;
    }
    if(!password.value.match(/^[A-Za-z]\w{7,14}$/)){
        password.classList.add('error');
        errorMsg.textContent = "Password needs to start with a capital letter, must contain a character and needs to be at least 8 characters long";
        return;
    }
};

const form = document.querySelector('form');
form.addEventListener('submit', submit);
