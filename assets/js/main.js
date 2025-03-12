function validateForm(event) {
    event.preventDefault(); 

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let zip = document.getElementById('zip').value;
    let cardName = document.getElementById('cardName').value;
    let cardNumber = document.getElementById('cardNumber').value;
    let expiry = document.getElementById('expiry').value;
    let cvv = document.getElementById('cvv').value;

    let errors = [];

    if (!firstName) {
        errors.push("نام نمی‌تواند خالی باشد.");
    }
    if (!lastName) {
        errors.push("نام خانوادگی نمی‌تواند خالی باشد.");
    }
    if (!username) {
        errors.push("نام کاربری نمی‌تواند خالی باشد.");
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
        errors.push("ایمیل وارد شده معتبر نیست.");
    }
    if (!address) {
        errors.push("آدرس نمی‌تواند خالی باشد.");
    }
    if (!country || country === "انتخاب...") {
        errors.push("کشور باید انتخاب شود.");
    }
    if (!city || city === "انتخاب...") {
        errors.push("شهر باید انتخاب شود.");
    }
    if (!zip) {
        errors.push("کد پستی نمی‌تواند خالی باشد.");
    }
    if (!cardName) {
        errors.push("نام روی کارت نمی‌تواند خالی باشد.");
    }
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
        errors.push("شماره کارت اعتباری باید 16 رقم باشد.");
    }
    if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) {
        errors.push("تاریخ انقضا باید به فرمت MM/YY باشد.");
    }
    if (!cvv || !/^\d{3}$/.test(cvv)) {
        errors.push("کد CVV باید 3 رقم باشد.");
    }

    if (errors.length > 0) {
        document.getElementById('error-messages').innerHTML = errors.join('<br>');
    } else {
        document.getElementById('error-messages').innerHTML = "";
        alert("فرم شما با موفقیت ارسال شد.");
    }
}

document.querySelector('button').addEventListener('click', validateForm);