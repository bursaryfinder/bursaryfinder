//Functions to be used on multiple pages

//Retrieves the variable submitted by a form using the get method. e.g. www.bursary-finder.co.za/searchCareers.html?search=test <- looks for a variable defined after the ?, variables are separates by &
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


//takes each bursary in an array (the careers array or the searchResults array) and renders them in the DOM

function renderBursary(bursary, index) {
  var content = document.getElementById("content");
  var text = "";

  text += "<div class='row listItem'>";
  text += "<h3><a href='single.html?index="+index+"' class='bursaryLink'>"+bursary.BursaryName+"</a></h3>";

  text += "<div class='col-md-4'>";
  text += "<h4>Faculties</h4>";
  text += "<ul>";
  for (var i = 0; i < bursary.Faculties.length; i++) {
    text += "<li>"+bursary.Faculties[i].name+"</li>";
  }
  text += "</ul>";
  text += "</div>";

  text += "<div class='col-md-4'>";
  text += "<h4>Levels</h4>";
  text += "<ul>";
  for (var i = 0; i < bursary.Levels.length; i++) {
    text += "<li>"+bursary.Levels[i].Level+"</li>";
  }
  text += "</ul>";
  text += "</div>";

  text += "<div class='col-md-4'>";
  text += "<h4>Includes</h4>";
  text += "<ul>";
  for (var i = 0; i < bursary.Includes.length; i++) {
  text += "<li>"+bursary.Includes[i].name+"</li>";
  }
  text += "</ul>";
  text += "</div>";

  text += "</div>";

  content.innerHTML += text;
}
