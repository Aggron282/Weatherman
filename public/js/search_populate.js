function RenderSearches(title,time,id){

  return(
    `<div place = ${title} class="past_search_container">

    <p class="search_title">
    ${title}
    </p>

    <p class="search_time">
      Time of Search
      <br>
      ${time}
    </p>

    <div class="delete_button">

    </div>

  </div>`
  );

}

function GetSearches(cb){

  axios.get("/searches").then((res)=>{

    if(res.data){

      var past_searches = [];
      var searches = res.data;

      for(var i =0; i <searches.length; i ++){

        past_searches.push({
            title: titleCase(searches[i].location.name),
            date: new Date(searches[i].date),
            snapshot: searches[i].snapshot
        });


      }

      cb(past_searches);

    }else{
      console.log("No Searches");
      cb([]);
    }

  })

}

function SubmitSearch(searched_place){

    exit_button = document.querySelector(".exit_weather");

    place = searched_place;

    var location = document.querySelector(".weather_overview_title");

    axios.post("/search",{place:searched_place}).then((res)=>{

      if(!res.data)
      {
          RenderDefault(true);
          return;
      }

      var weather_data = res.data.snapshot;
      var forcast_weekly = res.data.forcast_weekly;
      var searches_container = document.querySelector(".searches_container");
      var chosen_style = DetermineWeather(weather_data).chosen_style;

      forcast_data = forcast_weekly;

      ClearData();
      PopulateWeather(res.data.day - 1,input.value,chosen_style,weather_data);
      RenderForcast(forcast_weekly,res.data.day - 1);
      AddForcastEvents();
      AddSearchToList(weather_data,input.value);

      searches_container.innerHTML = "";

      weather_overview_container.classList.remove("inactive");
      weather_overview_container.classList.add("weather_main_active");

      search_bar.classList.add("inactive");

      exit_weather = document.querySelector(".exit_weather");
      exit_weather.setAttribute("clickable",1);

      exit_weather.addEventListener("click",(e)=>{

        if(exit_weather){

          if(exit_weather.getAttribute("clickable") == 1){
            ExitOutOfOverview();
          }

        }

      });

    }).catch((err)=>{
      RenderDefault(true);
    });

}

function AddPastSearchEvents(){

  var searches_past = document.getElementsByClassName("past_search_container");

  for(var i =0; i < searches_past.length; i++ )
  {

    searches_past[i].addEventListener("click",(e)=>{
      var place = e.target.getAttribute("place");
      SubmitSearch(place);
    });

  }

}
