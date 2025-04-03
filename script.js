document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseMessageElement = document.getElementById("form-message");
  
    function handleSubmitEvent(event) {
      event.preventDefault();
  
      const nameField = contactForm.querySelector("input[type='text']");
      const emailField = contactForm.querySelector("input[type='email']");
      const messageField = contactForm.querySelector("textarea");
  
      if (nameField.value.trim() === "" || emailField.value.trim() === "" || messageField.value.trim() === "") {
        responseMessageElement.innerText = "Please fill out all fields.";
        responseMessageElement.style.color = "red";
        return;
      }
  
      responseMessageElement.innerText = "Submitting...";
      responseMessageElement.style.color = "blue";
  
      const delay = Math.floor(Math.random() * (2000 - 1200) + 1200);
      setTimeout(function () {
        responseMessageElement.innerText = Thanks, ${nameField.value}! We'll get back to you soon.;
        responseMessageElement.style.color = "#008000";
  
        contactForm.reset();
      }, delay);
    }
  
    contactForm.addEventListener("submit", handleSubmitEvent);
  });