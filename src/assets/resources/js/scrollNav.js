// Legörgetéskor eltünteti a navigációs sávot, felfelé visszahozza 

var elozoScrollPosition = window.pageYOffset;

window.onscroll = function() {
  var jelenlegiScrollPosition = window.pageYOffset;

  if (elozoScrollPosition > jelenlegiScrollPosition) {
    document.getElementById("navigacio").style.top = "0";
  } else {
    document.getElementById("navigacio").style.top = "-15vh";
  }

  elozoScrollPosition = jelenlegiScrollPosition;
} 
