$(document).ready(function() {
  $("h2#cat").click(function() {
    $("#feline").append("<img src='img/cats-master-header.png'>");
    $("#feline").children("img").click(function() {
      $(this).remove();
    });
  });

  $("h2#dog").click(function() {
    $("#canine").append("<img src='img/hqdefault.jpg'>");
    $("#canine").children("img").click(function() {
      $(this).remove();
    });
  });

});
