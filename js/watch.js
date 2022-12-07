export default function watch(btnStart, btnEnd, sectionTime, sectionWatch) {
  let d = document;
  let watch = d.createElement("h3");
  let $sectionWatch = d.querySelector(sectionWatch);

  let watchInterval = null;

  d.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-name") === btnStart) {
      watchInterval = setInterval(() => {
        let date = new Date();
        watch.textContent = date.toLocaleTimeString();
        d.querySelector(sectionTime).appendChild(watch);
        $sectionWatch.style.display = "block";
      }, 1000);

      e.target.setAttribute("disabled", true);
    }

    if (e.target.getAttribute("data-name") === btnEnd) {
      $sectionWatch.style.display = "none";
      clearInterval(watchInterval);
      watch.textContent = "";
      d.querySelector(`[data-name= ${btnStart}]`).removeAttribute("disabled");
    }
  });
}
