export default function errorReloadBtn(container) {
  const btnContainer = document.createElement("div");
  const reloadBtn = document.createElement("button");
  reloadBtn.classList.add("error-reload-button");
  reloadBtn.textContent = "Reload Page";
  btnContainer.appendChild(reloadBtn);
  container.appendChild(btnContainer);

  // Reload page when clicked
  btnContainer.addEventListener("click", function () {
    location.reload();
  });
}
