
window.onscroll = function() {
  TopX();
}

function TopX() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
      document.getElementById('topX').style.display = "block";
  } else {
      document.getElementById('topX').style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

AOS.init();
