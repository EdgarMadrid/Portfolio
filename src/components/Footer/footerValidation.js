export const footerValidation = () => {
  const fields = document.querySelectorAll(
    ".footer__field input, .footer__field textarea",
  );

  if (!fields.length) {
    return;
  }

  fields.forEach((field) => {
    const message = field
      .closest(".footer__field")
      .querySelector(".footer__message");

    field.addEventListener("input", () => {
      validateField(field, message);
    });
  });
};

const validateField = (field, message) => {
  if (field.value.trim() === "") {
    field.classList.remove("is-valid");
    field.classList.add("is-error");

    message.classList.add("show");

    return;
  }

  if (field.type === "email" && !isValidEmail(field.value)) {
    field.classList.remove("is-valid");
    field.classList.add("is-error");

    message.classList.add("show");

    return;
  }

  field.classList.remove("is-error");
  field.classList.add("is-valid");

  message.classList.remove("show");
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
