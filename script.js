function validateName(name) {
    let letters = '^[a-zA-Z\-]+$';
    return name.match(letters);
}

function setInputState(inputField, valid) {
    if (valid) {
        inputField.classList.remove('invalidField');
    } else {
        inputField.classList.add('invalidField')
    }
}


function getGender(form) {
    var gender = form.querySelectorAll('input[name="gender"]:checked');
    if (gender.length > 0) {
        return gender[0].value;
    }
    return false;
}

function processForm() {
    const form = document.forms['form'];
    const textFirstName = form['firstName'];
    const textLastName = form['lastName'];
    const textMessage = form['message'];

    const firstNameValid = validateName(textFirstName.value);
    const lastNameValid = validateName(textLastName.value);
    setInputState(textFirstName, firstNameValid);
    setInputState(textLastName, lastNameValid);

    const gender = getGender(form);
    const genderDiv = document.getElementById('genderDiv');
    setInputState(genderDiv, gender);

    if (!firstNameValid || !lastNameValid || !gender) {
        return false;
    }

    console.log(`first name = ${textFirstName.value}`);
    console.log(`last name = ${textLastName.value}`);
    console.log(`gender = ${gender}`);
    console.log(`message = ${textMessage.value}`);
    document.getElementById('contactName').innerHTML = textFirstName.value;
    document.getElementById('banner').style = 'visibility: visible';
    return false;
}