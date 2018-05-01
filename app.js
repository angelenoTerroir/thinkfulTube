//get request to YouTube API
function getApiData(searchTerm){
  $.getJSON("https://www.googleapis.com/youtube/v3/search",
    {
      part: 'snippet',
      maxResults: 10,
      key:'AIzaSyDiQRSiPBqeY5SxmjzCOzbmo7Uud0wp8EE',
      q: `${searchTerm}`,
      type: 'video'
    }, 
    displaySearchData);
}

//render results
function showResults(result){
  console.log(result)
  return `
    <div>
     <a href='https://www.youtube.com/watch?v=${result.id.videoId}' target="_blank">
     <img src = "${result.snippet.thumbnails.medium.url}"></a>
    </div>
  `
}

//display search results 
function displaySearchData(data){
//  console.log(data);
  const results = data.items.map((item, index) => showResults(item));
  $('.js-search-results').html(results);
}
 
//Get information from the user input form
function userSubmit(){
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val('');
    getApiData(query);
    
    console.log(query);
   
  });
}
 
$(userSubmit);