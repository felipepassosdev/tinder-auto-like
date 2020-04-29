var interval = setInterval(() => {

    start()
}, 1500);

const start = () => {
  var modal = document.querySelectorAll(".modal-zoom-in");
  var match = document.querySelectorAll(".itsAMatch");
  console.log("var modal", modal);
  console.log("var match", match);

  if (match.length > 0) {
    console.log("match");
    var botao = document.querySelectorAll(".active");
    if (botao.length > 1) {
      botao = botao[1];
      botao.click();
    }
  } else if (modal.length === 0) {
    console.log("like");
    var botao = document.querySelectorAll(".button");
    if (botao.length > 2) {
      botao = botao[2];
      botao.click();
    }
  } else {
    console.log("end");
    clearInterval(interval);
  }
}


