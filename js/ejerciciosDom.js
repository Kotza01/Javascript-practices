import hamburguerMenu from "./hamburger_menu.js";
import watch from "./watch.js";
import alarm from "./alarm.js";
import keyPressMovement from "./keypress.js";
import regressiveCount from "./regressive_count.js";
import toTopListen from "./scroll_to_top.js";
import screenMode from "./screen-mode.js";
import responsive from "./responsive.js";
import internetDetection from "./internet-detection.js";
import filters from "./filters.js";
import digitalLottery from "./digital-lottery.js";
import carrousel from "./carrousel.js";
import autoPlayVideo from "./auto-play-video.js";
import voiceText from "./voice-text.js";
/**Funcionalidad boton hamburguesa */
let d = document;
let $hamburgerButton = ".hamburger";
let $sectionHamburger = ".section-menu-hamburger";
let $sectionHamburgerA = ".section-menu-hamburger ul li a";
let $startBtnWatch = "start-watch";
let $stopBtnWatch = "stop-watch";
let $sectionTime = ".watch-frame";
let $sectionWatch = ".watch";
let $startBtnAlarm = "start-alarm";
let $stopBtnAlarm = "stop-alarm";
let $alarm = "#alarm";
let $ball = ".ball";
let container = ".container";
let $regressiveCount = "regressive-count";
let $scrollBotton = d.querySelector(".btn-to-top");
let $modeButton = d.querySelector(".btn-mode");
let $divConnection = d.querySelector(".connection");
let $inputSearch = d.getElementById("search");
let $cards = d.querySelector(".cards");
let $winnerLottery = d.querySelector(".winner");
let $itemsLoterry = d.querySelector(".items");
let $inputLottery = d.getElementById("itemLottery");
let $buttonSendLottery = d.getElementById("btnLottery");
let $btnWinnerLottery = d.getElementById("btnWinnerLottery");
let $btnClearLottery = d.getElementById("btnCleanLottery");
let $btnCarrouselPrev = d.querySelector(".bi-arrow-left-circle");
let $btnCarrouselNext = d.querySelector(".bi-arrow-right-circle");
let $sliderCarrousel = d.querySelector(".slider");
let $videoPreview = d.getElementById("video-preview");
let $allVideos = d.querySelectorAll(".container-small-videos video");
let $voiceText = d.getElementById("voice-text");
let $voiceButton = d.getElementById("voice-button");
let $voiceOption = d.getElementById("voice");

window.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu($hamburgerButton, $sectionHamburger, $sectionHamburgerA);
  watch($startBtnWatch, $stopBtnWatch, $sectionTime, $sectionWatch);
  /**Se requiere id del audio, data-name del botonstart, data-name del boton end */
  alarm($alarm, $startBtnAlarm, $stopBtnAlarm);
  keyPressMovement($ball, container);
  regressiveCount($regressiveCount);
  toTopListen($scrollBotton);
  responsive({
    query: "(max-width: 1024px)",
    renderDesktop: {
      section: "device-desktop",
      content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/a-rOASJxw5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62677.725456380824!2d-63.895165494620514!3d10.936318556486336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318eb15e88facb%3A0x572c9f31e33c6951!2sPorlamar%2C%20Nueva%20Esparta!5e0!3m2!1ses!2sve!4v1664292343819!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    renderMovil: {
      section: "device-movil",
      content: `<span><a href="https://www.youtube.com/watch?v=WHfyN411fd4" target="_blank">Youtube video JonMircha</a></span>
            <span><a href="https://goo.gl/maps/7qpknz6wroedr1KQ7" target="_blank">Location for porlamar</a></span>`,
    },
  });
  internetDetection($divConnection);
  filters($cards, $inputSearch);
  digitalLottery(
    $inputLottery,
    $winnerLottery,
    $buttonSendLottery,
    $itemsLoterry,
    $btnWinnerLottery,
    $btnClearLottery
  );
  carrousel($btnCarrouselPrev, $btnCarrouselNext, $sliderCarrousel);
  autoPlayVideo($videoPreview, $allVideos);
});

voiceText($voiceText, $voiceOption, $voiceButton);
/**Listener for change mode dark or light */
d.addEventListener("DOMContentLoaded", screenMode($modeButton));
