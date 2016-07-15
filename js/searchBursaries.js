var searchParameter = getParameterByName('search');
var searchResults = [];


function searchBursaries(bursary, index){
  if (bursary.BursaryName.indexOf(searchParameter) > -1){
    searchResults.push({
      bursary: bursary,
      index: index
    });
  }
}


function renderSearchResult(d) {
  renderBursary(d.bursary, d.index);
}


if(searchParameter){
  data.forEach(searchBursaries);
  searchResults.forEach(renderSearchResult);

  var pageDescriptor = document.getElementById("pageDescriptor");
  pageDescriptor.innerHTML = searchResults.length+" Results for the search \""+searchParameter+"\"";


  console.log("Search Term: "+searchParameter);
  console.table(searchResults);
}
