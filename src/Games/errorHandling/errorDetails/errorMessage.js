export default function errorMessage(error, container) {
  const errorMessage = document.createElement("p");

  error.errors.forEach((error) => {
    errorMessage.textContent = error.message;
    container.appendChild(errorMessage);
  });
}
