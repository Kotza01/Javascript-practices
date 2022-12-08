export default function digitalLottery(
  $inputLottery,
  $winnerLottery,
  $buttonSendLottery,
  $itemsLottery,
  $btnWinnerLottery,
  $btnClearLottery
) {
  $btnWinnerLottery.addEventListener("click", () => {
    if ($itemsLottery.children.length > 0) {
      let winner = Math.floor(Math.random() * $itemsLottery.children.length);
      $winnerLottery.innerHTML = `<h5>El ganador es ${$itemsLottery.children[winner].children[0].textContent}</h5>`;
    }
  });

  $btnClearLottery.addEventListener("click", () => {
    $winnerLottery.innerHTML = ``;
    $itemsLottery.innerHTML = ``;
    $btnWinnerLottery.disabled = true;
  });

  $buttonSendLottery.addEventListener("click", (e) => {
    if ($inputLottery.value.length < 1) {
      $winnerLottery.innerHTML = `<h5>Ingrese un Valor</h5>`;
    } else {
      let div = document.createElement("div");
      let span = document.createElement("span");
      span.textContent = $inputLottery.value;
      div.appendChild(span);
      $itemsLottery.appendChild(div);
      $inputLottery.value = "";
      $winnerLottery.innerHTML = ``;
    }

    if ($itemsLottery.children.length === 0) {
      $btnWinnerLottery.disabled = true;
    } else {
      $btnWinnerLottery.disabled = false;
    }
  });
}
