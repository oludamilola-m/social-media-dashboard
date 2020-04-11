function toggleTheme() {
  const body = document.querySelector("body");

  if (event.target.checked) {
    body.classList = ["dark-theme"];
  } else {
    body.classList = ["light-theme"];
  }
}
