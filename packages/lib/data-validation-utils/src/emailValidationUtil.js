const emailValidationUtil = (emailAddr) => {
    if (!emailAddr) {
        return false;
    }

    // https://www.w3resource.com/javascript/form/email-validation.php
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr);
};

export default emailValidationUtil;
