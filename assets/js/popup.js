$('.pop-up').hide(0);
$('.pop-up-button').hide(0);

$('.button.big').click(function(){
  $('.pop-up-container').show(0);
  $('.pop-up').fadeIn(300);
  $('.pop-up-button').hide(0);
});
$('.pop-up span').click(function() {
  $('.pop-up-container').hide(0);
  $('.pop-up').hide(0);
  $('.button.big').show(0);
});

var text1 = document.getElementById("inputText1");
var text2 = document.getElementById("inputText2");

/* return button to variable btn */
var btn1 = document.getElementById("copyText1");
var btn2 = document.getElementById("copyText2");

/* call function on button click */
btn1.onclick = function() {
  text1.select();
  document.execCommand("copy");
}

btn2.onclick = function() {
  text2.select();
  document.execCommand("copy");
}
