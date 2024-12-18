const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {};

  const fields = document.querySelectorAll(".login-form input");

  for (let field of fields)
    if (field.value.trim() === "") {
      alert(`All form fields must be filled in`);
      return;
    }

  for (let field of fields)
    if (field.name) {
      formData[field.name] = field.value.trim();
    }
  console.log(formData);

  form.reset();
});
