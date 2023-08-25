export default function errorHandling(error, container) {
  const errorContainer = document.createElement("div");

  errorContainer.classList.add("error-container");
  const errorCode = document.createElement("p");
  errorCode.textContent = `ERROR: ${error.statusCode} ${error.status}`;
  errorContainer.appendChild(errorCode);

  error.errors.forEach((error) => {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = error.message;

    errorContainer.appendChild(errorMessage);
  });

  const btnContainer = document.createElement("div");
  const reloadBtn = document.createElement("button");
  reloadBtn.classList.add("error-reload-button");
  reloadBtn.textContent = "Reload Page";
  btnContainer.appendChild(reloadBtn);
  errorContainer.appendChild(btnContainer);
  // Reload page when clicked
  btnContainer.addEventListener("click", function () {
    location.reload();
  });

  // ICON CONTAINER - not working ?
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-error-container");
  iconContainer.textContent = "Not working?";
  const questionIcon = document.createElement("i");
  questionIcon.classList.add("fa-regular");
  questionIcon.classList.add("fa-circle-question");
  questionIcon.classList.add("error-help");
  iconContainer.append(questionIcon);
  errorContainer.append(iconContainer);

  // ICON - Hidden error message (display on hover)
  const hoverErrorHelp = document.createElement("div");
  hoverErrorHelp.classList.add("error-hidden-help");
  hoverErrorHelp.classList.add("error-hidden");
  hoverErrorHelp.textContent =
    'We are having some difficulties displaying this content. To fix it you can try pressing the "Reload Page" button. If it stil does not work please try again later. ';
  iconContainer.append(hoverErrorHelp);

  // ICON - On hover

  function helpText() {
    hoverErrorHelp.classList.toggle("error-hidden");
  }

  iconContainer.addEventListener("mouseenter", helpText);
  iconContainer.addEventListener("mouseleave", helpText);

  container.appendChild(errorContainer);
}
