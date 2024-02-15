const form = {
    login: () => document.getElementById('login'),
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailInvalid: () => document.getElementById('email-invalid-error'),
    emailRequired: () => document.getElementById('email-required-error'),
    passwordInvalid: () => document.getElementById('password-error'),
}

form.login().addEventListener('click', () => {
    form.emailRequired().style.display = 'none';
    form.emailInvalid().style.display = 'none';
    validateFields();
});

function validateFields() {
    toggleEmailErrors();
    togglePasswordErrors();
    if (toggleEmailErrors() && togglePasswordErrors()) {
        alert('funciona');
    }
}

function toggleEmailErrors() {
    const email = form.email().value;

    if (!isEmailValid()) {
        form.emailRequired().style.display = 'block';
    } else if (!validateEmail(email)) {
        form.emailInvalid().style.display = 'block';
    } else {
        form.emailRequired().style.display = 'none';
        form.emailInvalid().style.display = 'none';
        return true;
    }
}

function togglePasswordErrors() {
    // const password = form.password().value;
    if (!isPasswordValid()) {
        form.passwordInvalid().style.display = 'block';
    } else {
        form.passwordInvalid().style.display = 'none';
        return true;
    }
}

function isEmailValid() {
    return form.email().value;
}

function isPasswordValid() {
    return form.password().value;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}