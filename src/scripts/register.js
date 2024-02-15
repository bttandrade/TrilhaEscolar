function validateFields() {
    const windowLocation = window.location.href.toString();
    // alert(windowLocation);
    if (windowLocation.includes('login')) {
        const emailValid = isEmailValid();
        const passwordValid = isPasswordValid();

        login.disabled = !emailValid || !passwordValid;
    } else if (windowLocation.includes('recover')){
        const emailValid = isEmailValid();

        recover.disabled = !emailValid;
    }
}