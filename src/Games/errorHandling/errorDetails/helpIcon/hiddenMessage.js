export default function hiddenMessage(container) {
  const hoverErrorHelp = document.createElement("div");
  hoverErrorHelp.classList.add("error-hidden-help");
  hoverErrorHelp.classList.add("error-hidden");
  hoverErrorHelp.textContent =
    'We are having some difficulties displaying this content. To fix it you can try pressing the "Reload Page" button. If it stil does not work please try again later. ';
  container.append(hoverErrorHelp);

  return hoverErrorHelp;
}
