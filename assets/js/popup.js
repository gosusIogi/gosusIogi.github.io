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

var text = document.getElementById("inputText");

/* return button to variable btn */
var btn = document.getElementById("copyText");

/* call function on button click */
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
}
