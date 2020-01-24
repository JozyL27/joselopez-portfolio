/* eslint-disable strict */


function handleProjectsButton () {
  $('body').on('click', '.scrollMe', function(event) {
    $('body').scrollTo('#projScroll', 800);
  });
}



function handleConButton () {
  $('body').on('click', '.scrollMe2', function(event) {
    $('body').scrollTo('#conScroll', 800);
  });
}


function main () {
handleProjectsButton();
handleConButton();
}

$(main);