function retrieveInputElement(): HTMLInputElement {
  const possibleElement = document.getElementById("exclusive_input");
  if (possibleElement) {
    return possibleElement as HTMLInputElement;
  } else {
    const element = document.createElement("input");

    element.id = "exclusive_input";
    element.style.display = "none";
    element.type = "file";
    element.name = "file";

    document.getElementById("app").appendChild(element);
    return element;
  }
}

export function openFile() {
  const input = retrieveInputElement();
  input.click();
}
