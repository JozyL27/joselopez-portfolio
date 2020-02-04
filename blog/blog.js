/* eslint-disable strict */

    
  function delayCollage() {
  $('.one').delay(1000).animate({'opacity': '1'}, 2000);
  $('.two').delay(2000).animate({'opacity': '1'}, 2000);
  $('.three').delay(3000).animate({'opacity': '1'}, 2000);
  $('.four').delay(4000).animate({'opacity': '1'}, 2000);
  }
  
  
  function main () {
  delayCollage();
  }
  
  $(main);