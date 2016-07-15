function renderBursariesList(bursary) {

  var content = document.getElementById("content");
  content.innerHTML += "<h3>"+bursary.BursaryName+"</h3>"
  // content.innerHTML += "<img src="+bursary.Image_url+">"
  content.innerHTML += "<h4>Description:</h4>"
  content.innerHTML += "<p>"+bursary.DescriptionText+"</p>"

  content.innerHTML += "<h4>Faculties:</h4>"

  content.innerHTML += "<ul>"

  for (var i = 0; i < bursary.Faculties.length; i++) {
    content.innerHTML += "<li>"+bursary.Faculties[i].name+"</li>" }

  content.innerHTML += "</ul>"

  content.innerHTML += "<h4>Qualifications:</h4>"
  content.innerHTML += "<p>"+bursary.QualifyingText+"</p>"


  content.innerHTML += "<h4>Includes:</h4>"
  content.innerHTML += "<ul>"

  for (var i = 0; i < bursary.Includes.length; i++) {
    content.innerHTML += "<li>"+bursary.Includes[i].name+"</li>" }

  content.innerHTML += "</ul>"


  content.innerHTML += "<h4>Levels:</h4>"
  for (var i = 0; i < bursary.Levels.length; i++) {
    content.innerHTML += "<p>"+bursary.Levels[i].Level+"</p>" }
    content.innerHTML += "<h4>Duration:</h4>"
    content.innerHTML += "<p>"+bursary.DurationText +"</p>"
    content.innerHTML += "<h4>Contract:</h4>"
    content.innerHTML += "<p>"+bursary.ContractText+"</p>"
    content.innerHTML+= "<h4>How to Apply:</h4>"
    content.innerHTML += "<p>"+bursary.ApplyText+"</p>"
    content.innerHTML +="<h4>Contact Details:</h4>"
    content.innerHTML += "<ul>"

    for (var i = 0; i < bursary.ContactDetails.length; i++) {
      content.innerHTML += "<li>"+bursary.ContactDetails[i].Detail+"</li>" }

    content.innerHTML += "</ul>"
    content.innerHTML += "<h4>Careers:</h4>"
    content.innerHTML += "<ul>"

    for (var i = 0; i < bursary.Tags.length; i++) {
      content.innerHTML += "<li>"+bursary.Tags[i].name+"</li>" }

    content.innerHTML += "</ul>"
    content.innerHTML += "<h4>Bursary Offered By:</h4>"
    content.innerHTML += "<p>"+bursary.By +"</p>"

}

var indexParameter = getParameterByName('index');
var bursary = data[indexParameter];

renderBursariesList(bursary);
