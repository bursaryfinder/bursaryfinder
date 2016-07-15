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
  var listItem = document.createElement("div");
  listItem.className = "listItem";

  var heading = document.createElement("h3");
  var link = document.createElement("a");
  link.href = "single.html?index="+index;
  var text = document.createTextNode(bursary.BursaryName);
  link.appendChild(text);
  heading.appendChild(link);
  listItem.appendChild(heading);

  var content = document.getElementById("content");
  content.appendChild(listItem);
}
