var count = 0;

$('#tapper').click(function() {
  count++;
  $(this).text(count);
  randomBg(this);
});

function randomBg(element) {
  var hue = Math.floor(Math.random()*360+1);
  var bgColor = 'hsla(' + hue + ', 50%, 50%, 1)';
  var color = 'hsla(' + hue + ', 50%, 30%, 1)';
  $(element).css({backgroundColor: bgColor, color:  color});
}
