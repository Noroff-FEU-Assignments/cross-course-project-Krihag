import errorContainer from "./errorContainer.js";
import errorMessage from "./errorMessage.js";
import errorReloadBtn from "./errorReloadBtn.js";
import helpIcon from "./helpIcon/helpIcon.js";

export default function errorDetails(error) {
  const container = errorContainer(error);
  errorMessage(error, container);
  errorReloadBtn(container);
  helpIcon(container);

  return container;
}
