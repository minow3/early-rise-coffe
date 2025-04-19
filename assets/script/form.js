function validateForm() {
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;
    const mobile = document.getElementById('mobile').value;

    // Validate emails match
    if (email1 !== email2) {
        alert('Emails do not match.');
        return false;
    }

    // Validate mobile number
    const mobilePattern = /^(089|088|087|086|085|084|083|082|081)\d{7}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Mobile number must start with 087, 086, or 085 and be 10 digits long.');
        return false;
    }

    return true;
}