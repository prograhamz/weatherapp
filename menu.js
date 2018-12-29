$(function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('#navbar-2').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#navbar-2').css({'display':'block'});
    menuVisible = true;
  });
  $('#navbar-2').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
});

