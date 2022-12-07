let d = document;

export default function screenMode($modeButton) {
  const screenMode = window.localStorage,
    moon = "🌕",
    sun = "🌞";

  /**Verifiy mode in local storage and change this*/
  if (!screenMode.getItem("screen-mode"))
    window.localStorage.setItem("screen-mode", "light");
  if (screenMode.getItem("screen-mode") === "light") removeDark($modeButton);
  if (screenMode.getItem("screen-mode") === "dark") addDark($modeButton);

  $modeButton.addEventListener("click", (e) => {
    /**if mode is dark, change to light in local storage and in style element
     * if mode is light, change to dark in local storage and in style element
     */
    if (screenMode.getItem("screen-mode") === "light") {
      screenMode.setItem("screen-mode", "dark");
      addDark($modeButton);
    } else {
      screenMode.setItem("screen-mode", "light");
      removeDark($modeButton);
    }
  });
}

/**Function forremove dark mode in dom element */
function removeDark($modeButton) {
  $modeButton.innerHTML = `<span>🌕</span>`;
  let $dataChange = d.querySelectorAll("[data-mode]");

  for (let i = 0; i < $dataChange.length; i++) {
    $dataChange[i].classList.remove("dark");
  }
}

/**Function for add dark mode in dom element */
function addDark($modeButton) {
  $modeButton.innerHTML = `<span>🌞</span>`;
  let $dataChange = d.querySelectorAll("[data-mode]");
  for (let i = 0; i < $dataChange.length; i++) {
    $dataChange[i].classList.add("dark");
  }
}
