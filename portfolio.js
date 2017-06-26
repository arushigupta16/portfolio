
<img onmouseover="bigImg(this)" onmouseout="normalImg(this)"src="Arushi.jpg" width="150" height="210">
  
<script>
window.alert("Welcome to Arushi's page! We are glad to have you!");

var button = document.createElement("button");
button.innerHTML = "About Me";

  
  function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "240px";
}

  function normalImg(x) {
    x.style.height = "210px";
    x.style.width = "150px";
}


</script>
