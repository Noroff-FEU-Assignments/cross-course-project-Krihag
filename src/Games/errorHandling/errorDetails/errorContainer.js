export default function errorContainer(error) {
  const container = document.createElement("div");

  container.classList.add("error-container");
  const errorCode = document.createElement("p");
  errorCode.textContent = `ERROR: ${error.statusCode} ${error.status}`;
  container.appendChild(errorCode);

  return container;
}
