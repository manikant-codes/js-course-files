function toggleMenu() {
  const ul = document.getElementById("nav-links");
  const styles = getComputedStyle(ul);
  if (styles.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}
