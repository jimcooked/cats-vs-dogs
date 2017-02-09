$(document).ready(function() {
  $("img#cat").click(function() {
    $("ul#feline").prepend("<li>Meow!</li>");
  });

  $("img#dog").click(function() {
    $("ul#canine").prepend("<li>Woof!</li>");
  });

});
