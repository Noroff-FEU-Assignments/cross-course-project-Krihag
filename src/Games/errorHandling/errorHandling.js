import errorDetails from "./errorDetails/errorDetails.js";

export default function errorHandling(error, container) {
  const errorMessage = errorDetails(error);
  container.appendChild(errorMessage);
}
