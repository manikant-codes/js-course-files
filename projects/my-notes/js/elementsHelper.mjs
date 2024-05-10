export function myCreateElement({
  node,
  children = "",
  classList,
  onclick,
  onchange,
}) {
  const element = document.createElement(node);

  if (children) {
    element.innerHTML = children;
  }

  if (classList) {
    element.classList.add(...classList);
  }

  if (onclick) {
    element.onclick = onclick;
  }

  if (onchange) {
    element.onchange = onchange;
  }

  return element;
}
