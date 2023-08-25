export default function createIcon(container) {
  const questionIcon = document.createElement("i");
  questionIcon.classList.add("fa-regular");
  questionIcon.classList.add("fa-circle-question");
  questionIcon.classList.add("error-help");
  container.append(questionIcon);
  return questionIcon;
}
