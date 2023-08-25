import createIcon from "./createIcon.js";
import iconContainer from "./iconContainer.js";
import hiddenMessage from "./hiddenMessage.js";

export default function helpIcon(container) {
  const iconAndTextContainer = iconContainer();
  createIcon(iconAndTextContainer);
  container.append(iconAndTextContainer);
  const errorMessage = hiddenMessage(iconAndTextContainer);

  function helpText() {
    errorMessage.classList.toggle("error-hidden");
  }

  iconAndTextContainer.addEventListener("mouseenter", helpText);
  iconAndTextContainer.addEventListener("mouseleave", helpText);

  return iconAndTextContainer;
}
