
var searched_forcasts = [];
var searches_row = document.querySelector(".searches_row");
var searches_container = document.querySelector(".searches_container");

const AddSearchToList = (forcast,place)=>{

  var data =  {
    forcast:forcast,
    place:place
  }

  if(searched_forcasts.length > 0) {

      for(var i =0; i < searched_forcasts.length; i++){

        if(searched_forcasts[0].place == place){
          return;
        }

      }

  }

  searched_forcasts.push(data);

}


const ClearSearchRow = () => {
  searches_container.innerHTML = "";
}


const PopulateSearches = () => {

    searches_container.innerHTML = "";
    searches_row.innerHTML = "";

    var html = "";

    if(searched_forcasts.length > 0 && searched_forcasts){

      for(var i = 0; i < searched_forcasts.length; i++){
        console.log(searched_forcasts[i].place)
        if(!searched_forcasts[i]){
          var html_fixed = `
          <div class="no_searched_container">
            <img class="no_search_img" src = "./../imgs/weather_placeholder.png"/>
            <p class="title_search_none">
              No Results
            </p>
          </div> `

          searches_container.innerHTML = html_fixed;
          return;
        }
        axios.post("/search",{place:searched_forcasts[i].place}).then((response)=>{

          var snapshot = response.data.snapshot;
          console.log(response.data)
          var style = DetermineWeather(snapshot).chosen_style;
          var html_fixed = `
            <div class="col-3">
              <div class="search_container" >
                  <p class="place_title"> ${response.data.location.place} </p>
                  <p class="place_subtitle"> ${snapshot.temperatureAvg} Avg</p>
              </div>
            </div>
            `;

            html += html_fixed;

        });

      }

      searches_row.innerHTML = html;

  }
  else{
    var html_fixed = `
    <div class="no_searched_container">
      <img class="no_search_img" src = "./../imgs/weather_placeholder.png"/>
      <p class="title_search_none">
        No Results
      </p>
    </div> `

    searches_container.innerHTML = html_fixed;

  }

  console.log(searched_forcasts)


}
