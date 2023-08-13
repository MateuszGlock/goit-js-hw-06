const formBox = document.querySelector(".login-form");

function manageForm(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Get form elements
  const formElements = event.target.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  // Check if all fields are filled
  if (!email || !password) {
    alert("Wypełnij wszystkie pola.");
    return;
  }

  // Create an object with form values
  const formData = {
    email: email,
    password: password,
  };

  // Display the form data object in the console
  console.log(formData);

  // Reset the form fields
  event.target.reset();
}
formBox.addEventListener("submit", manageForm);
