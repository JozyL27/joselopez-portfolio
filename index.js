/* eslint-disable strict */

function handleProjectsButton() {
  $("body").on("click", ".scrollMe", function (event) {
    $("body").scrollTo("#projScroll", 800);
  });
}

function handleConButton() {
  $("body").on("click", ".scrollMe2", function (event) {
    $("body").scrollTo("#conScroll", 800);
  });
}

function delayCollage() {
  $(".one").delay(1000).animate({ opacity: "1" }, 2000);
  $(".two").delay(2000).animate({ opacity: "1" }, 2000);
  $(".three").delay(3000).animate({ opacity: "1" }, 2000);
  $(".four").delay(4000).animate({ opacity: "1" }, 2000);
}

function main() {
  handleProjectsButton();
  handleConButton();
  delayCollage();
}

$(main);
