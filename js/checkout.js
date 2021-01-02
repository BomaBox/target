<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p").slideUp();
  });
  $(".btn2").click(function(){
    $("p").slideDown();
  });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>

<button class="btn1">Slide up</button>
<button class="btn2">Slide down</button>

</body>
</html>