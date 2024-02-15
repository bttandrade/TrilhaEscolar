const form = {
    email: () => document.getElementById('email'),
    emailRequired: () => document.getElementById('email-required-error'),
    emailInvalid: () => document.getElementById('email-invalid-error'),
    recover: () => document.getElementById('recover'),
}

form.recover().addEventListener('click', () => {
    form.emailRequired().style.display = 'none';
    form.emailInvalid().style.display = 'none';
    validateFields();
});

function validateFields() {
    toggleEmailErrors();
    if (toggleEmailErrors()) {
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

function isEmailValid() {
    return form.email().value;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}