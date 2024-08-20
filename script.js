var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var mailError = document.getElementById("mail-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");



function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  // Improved regex for name validation: allows more name formats
  if (!name.match(/^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="bx bxs-check-circle"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Only digits please';
    return false;
  }
  phoneError.innerHTML = '<i class="bx bxs-check-circle"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById('contact-mail').value;

  if (email.length == 0) {
    mailError.innerHTML = 'Email is required';
    return false;
  }
  // Improved regex for email validation: more permissive
  if (!email.match(/^[\w.-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)) {
    mailError.innerHTML = 'Email invalid';
    return false;
  }

  mailError.innerHTML = '<i class="bx bxs-check-circle"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + ' more characters required';
    return false;
  }

  messageError.innerHTML = '<i class="bx bxs-check-circle"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fill all the required details';
    setTimeout(function() { submitError.style.display = 'none'; }, 1000);

    return false;
  }

  // Add event listener to form submit button (assuming it has id "submit-button")
  document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Submit form data here
      console.log('Form is valid, submit data');
    }
  });
}