// Utilisation d'AJAX pour inclure le contenu de page2.html dans la page1.html
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("includedfooter").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "footer.html", true);
xhttp.send();
