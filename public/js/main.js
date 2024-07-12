// var submit = document.querySelector("#search_form");
// var input = document.querySelector(".weather_input");
// var weather_overview_container = document.querySelector(".weather_main_overview_container");
//
// const CLOUDY_STANDARD = 30;
//
// const RAIN_STANDARD = 50;
// const SNOW_INTENSITY_STANDARD = 30;
// const SLEET_INTENSITY_STANDARD = 30;
// const STORM_STANDARD = 75;
// const HAIL_STANDARD = 30;
// const FREEZING_TEMP_STANDARD = 35;
// const CLOUD_COVER_STANDARD = 40;
// const CLOUD_PARTLY_COVER_STANDARD = 25;
// const PRECIPITATION_STANDARD = 35;
//
// var weather_title;
// var exit_weather;
// var forcast_data;
// var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//
//
// const WEATHER_FIXED_CONFIG = {
//
//   snow:{
//     img:"./../vids/imgs/3.mp4",
//     name:"High Chance of Snow",
//     logo:"./../imgs/6.png"
//   },
//   sleet:{
//     img:"./../vids/4.mp4",
//     name:"Sleet Warning",
//     logo:"./../imgs/8.png"
//   },
//   rain:{
//     img:"./../vids/7.mp4",
//     name:"High Chance of Rain",
//     logo:"./../imgs/7.png"
//   },
//   cloudy:{
//     img:"./../vids/5.mp4",
//     name:"Cloudy Overcast",
//     logo:"./../imgs/3.png"
//   },
//   clear:{
//     img:"./../vids/1.mp4",
//     name:"Clear Skies",
//     logo:"./../imgs/1.png"
//   },
//   partly_cloudy:{
//     img:"./../vids/6.mp4",
//     name:"Slighly Cloudy",
//     logo:"./../imgs/3.png"
//   },
//   hail:{
//     img:"./../vids/4.mp4",
//     name:"High Chance of Hail",
//     logo:"./../imgs/7.png"
//   },
//   storm:{
//     img:"./../vids/2.mp4",
//     name:"High Chance of Heavy Rain",
//     logo:"./../imgs/4.png"
//   }
//
// }
//
// var weather_config;
//
// function RenderForcast(forcast,target){
//
//   var html = ``;
//   var row = document.querySelector(".week_row");
//   for(var i = 0; i < forcast.length; i ++){
//
//     var style = DetermineWeather(forcast[i]).chosen_style;
//     var active = "";
//
//     if(parseInt(target) == i){
//       active = "forcast_active"
//     }
//
//     console.log(active)
//
//     if(style){
//       html+= (`<div class="col-1" >
//           <div class="forcast_box" id=${active} day = ${week[i]} day_counter = ${i}>
//               <img class = "forcast_icon" src ='${style.logo}'/>
//               <p class="day_forcast" > ${week[i]} </p>
//               <p class="temp_forcast" > ${CelsiusConverter(forcast[i].temperatureAvg) +  String.fromCharCode(176)} </p>
//           </div>
//       </div>`);
//     }
//
//
// }
//
//   row.innerHTML = html;
//
//   return html;
//
// }
//
// function AddForcastEvents(){
//
//   var forcast_days = document.getElementsByClassName("forcast_box");
//
//   for(var i = 0; i < forcast_days.length; i++){
//
//     forcast_days[i].classList.remove("forcast_active");
//
//     forcast_days[i].addEventListener("click",(e)=>{
//
//         var target = e.currentTarget;
//         var day_counter = target.getAttribute("day_counter");
//         var forcast = forcast_data[day_counter];
//         console.log(forcast,day_counter);
//         PopulateDayFromWeek(day_counter,forcast);
//
//     })
//   }
// }
//
//
//
// function DetermineWeather(weather_data){
//   var chosen_style = WEATHER_FIXED_CONFIG.sleet;
//   var has_decided_weather = false;
//   // if(!weather_data){
//   //   chosen_style = WEATHER_FIXED_CONFIG.clear;
//   //   has_decided_weather = true;
//   // }
//   console.log(WEATHER_FIXED_CONFIG.partly_cloudy)
//   if(weather_data.sleetIntensityAvg > SLEET_INTENSITY_STANDARD && !has_decided_weather){
//
//     if(weather_data.precipitationProbabilityAvg > PRECIPITATION_STANDARD){
//       chosen_style = WEATHER_FIXED_CONFIG.sleet;
//       has_decided_weather = true;
//     }else{
//       chosen_style = WEATHER_FIXED_CONFIG.snow;
//       has_decided_weather = true;
//     }
//     console.log(chosen_style)
//
//
//   }
//   else if(weather_data.snowIntensityAvg > SNOW_INTENSITY_STANDARD && !has_decided_weather){
//
//
//       chosen_style = WEATHER_FIXED_CONFIG.snow;
//       has_decided_weather = true;
//       console.log(chosen_style)
//   }
//   else if(weather_data.precipitationProbabilityAvg > STORM_STANDARD && !has_decided_weather){
//     chosen_style = WEATHER_FIXED_CONFIG.storm;
//     has_decided_weather = true;
//     console.log(chosen_style)
//
//   }
//   else if(weather_data.precipitationProbabilityAvg > RAIN_STANDARD && !has_decided_weather){
//     chosen_style = WEATHER_FIXED_CONFIG.rain;
//     has_decided_weather = true;
//     console.log(chosen_style)
//
//   }
//   else if(weather_data.precipitationProbabilityAvg > CLOUDY_STANDARD && !has_decided_weather){
//     chosen_style = WEATHER_FIXED_CONFIG.cloudy;
//     has_decided_weather = true;
//     console.log(chosen_style)
//
//   }
//   else if(weather_data.cloudCoverAvg > CLOUD_COVER_STANDARD && !has_decided_weather){
//     chosen_style = WEATHER_FIXED_CONFIG.cloudy;
//     has_decided_weather = true;
//     console.log(chosen_style)
//
//   }
//   else if(weather_data.cloudCoverAvg > CLOUD_PARTLY_COVER_STANDARD && !has_decided_weather){
//     chosen_style = WEATHER_FIXED_CONFIG.partly_cloudy;
//     has_decided_weather = true;
//
//     console.log(chosen_style)
//
//   }
//   else if(!has_decided_weather){
//     chosen_style = WEATHER_FIXED_CONFIG.clear;
//     has_decided_weather = true;
//     console.log(chosen_style)
//
//   }
//   else{
//     chosen_style = WEATHER_FIXED_CONFIG.clear;
//     has_decided_weather = true;
//     console.log(chosen_style)
//
//   }
//
//   var results = {
//     chosen_data:weather_data,
//     chosen_style:chosen_style
//   }
//
//   return results;
//
// }
//
// submit.addEventListener("submit",(e)=>{
//
//   e.preventDefault();
//   input = document.querySelector(".weather_input");
//   var overview = document.querySelector(".weather_overview_weather");
//   var location = document.querySelector(".weather_overview_title");
//   var video = document.querySelector("#forcast_video");
//   var search_bar = document.querySelector(".weather_search_container");
//   var overview_container = document.querySelector(".weather_main_overview_container");
//   exit_button = document.querySelector(".exit_weather");
//   video.classList.add("active");
//   video.classList.remove("inactive");
//   var value = input.value;
//   console.log(value);
//
//   axios.post("/search",{place:value}).then((res)=>{
//
//     ClearSearchRow();
//     var weather_data = res.data.snapshot;
//     var forcast_weekly = res.data.forcast_weekly;
//     var chosen_style = DetermineWeather(weather_data).chosen_style;
//     forcast_data = forcast_weekly;
//     console.log( DetermineWeather(weather_data))
//     PopulateWeather(res.data.day - 1,input.value,chosen_style,weather_data);
//     AddSearchToList(weather_data,input.value);
//     RenderForcast(forcast_weekly,null)
//     AddForcastEvents();
//     var weather_overview_container = document.querySelector(".weather_main_overview_container")
//
//
//     search_bar.classList.add("inactive");
//
//     exit_weather = document.querySelector(".exit_weather");
//     exit_weather.setAttribute("clickable",1);
//
//     exit_weather.addEventListener("click",(e)=>{
//
//       if(exit_weather.getAttribute("clickable") == 1){
//         ExitOutOfOverview();
//       }
//
//     });
//     ClearData();
//     weather_overview_container.classList.add("active");
//     weather_overview_container.classList.remove("inactive");
//
//   }).catch((err)=>{
//     console.log(err);
//   });
//
// });
//
// function CelsiusConverter(temp){
//
//   var farenheight = ((temp * 9/5) + 32);
//   return Math.round(farenheight);
//
// }
//
//
// function PopulateDayFromWeek(day,target){
//
//   var day_counter = parseInt(day);
//   var day_string = week[day_counter];
//   var day_data = forcast_data[day_counter];
//   var place = input.value;
//
//   var chosen_style = DetermineWeather(day_data).chosen_style;
//
//   ClearData();
//
//   if(day_counter < week.length || day > 0){
//     day_counter = parseInt(day);
//   }
//
//   PopulateWeather(day_counter,place,chosen_style,day_data);
//   RenderForcast(forcast_data,day_counter);
//   AddForcastEvents();
//
// }
//
//
// function ClearData(){
//
//   var location_el = document.querySelector(".weather_overview_title");
//   var overview_el = document.querySelector(".weather_overview_weather");
//   var tempAv_el = document.querySelector("[info=temperature-average]");
//   var tempMin_el = document.querySelector("[info=temperature-min]");
//   var tempMax_el = document.querySelector("[info=temperature-max]");
//   var sleet_el = document.querySelector("[info=sleet-intensity]");
//   var snow_el = document.querySelector("[info=snow-intensity]");
//   var cloud_el = document.querySelector("[info=cloud-coverage]");
//   var dewpoint_el = document.querySelector("[info=dewpoint]");
//   var precip_el = document.querySelector("[info=precipitation-chance]");
//   var wind_el = document.querySelector("[info=wind-gust]");
//   var background_el = document.querySelector(".weather_overview_weather");
//   var week_row_el = document.querySelector(".week_row");
//   var day_text = document.querySelector(".day_text");
//   var video = document.querySelector("#forcast_video");
//
//   video.classList.add("inactive");
//
//   video.innerHTML = "";
//   day_text.innerHTML = "";
//   location_el.innerHTML = "";
//   tempAv_el.innerHTML = "";
//   overview_el.innerHTML = "";
//   sleet_el.innerHTML = "";
//   wind_el.innerHTML = "";
//   precip_el.innerHTML = "";
//   dewpoint_el.innerHTML = "";
//   week_row_el.innerHTML = "";
//   cloud_el.innerHTML = "";
//   snow_el.innerHTML = "";
//   sleet_el.innerHTML = "";
//   tempMax_el.innerHTML = "";
//   tempMin_el.innerHTML = "";
//   tempAv_el.innerHTML = "";
//
// }
//
// function PopulateWeather(day,location,style,config){
//
//   var location_node = document.createTextNode(capitalizeFirstLetter(style.name));
//   var overview_node = document.createTextNode(toTitleCase(location));
//   var tempAv_node = document.createTextNode(CelsiusConverter(config.temperatureAvg) + String.fromCharCode(176));
//   var tempMin_node = document.createTextNode(CelsiusConverter(config.temperatureMin) + String.fromCharCode(176));
//   var tempMax_node = document.createTextNode(CelsiusConverter(config.temperatureMax) + String.fromCharCode(176));
//   var dewpoint_node = document.createTextNode(CelsiusConverter(config.dewPointAvg) + String.fromCharCode(176));
//   var precip_node = document.createTextNode(config.precipitationProbabilityAvg+"%");
//   var wind_node = document.createTextNode(config.windGustAvg + "MPH");
//   var sleet_node = document.createTextNode(config.sleetIntensityAvg);
//   var snow_node = document.createTextNode(config.snowIntensityAvg);
//   var cloud_node = document.createTextNode(config.cloudCoverAvg+ "%");
//   var day_node = document.createTextNode(week[day]);
//   var location_el = document.querySelector(".weather_overview_title");
//   var overview_el = document.querySelector(".weather_overview_weather");
//   var tempAv_el = document.querySelector("[info=temperature-average]");
//   var tempMin_el = document.querySelector("[info=temperature-min]");
//   var tempMax_el = document.querySelector("[info=temperature-max]");
//   var sleet_el = document.querySelector("[info=sleet-intensity]");
//   var snow_el = document.querySelector("[info=snow-intensity]");
//   var cloud_el = document.querySelector("[info=cloud-coverage]");
//   var dewpoint_el = document.querySelector("[info=dewpoint]");
//   var precip_el = document.querySelector("[info=precipitation-chance]");
//   var wind_el = document.querySelector("[info=wind-gust]");
//   var day_el = document.querySelector(".day_text");
//   var video = document.querySelector("#forcast_video");
//   var source = `<source  id = "forcast_source" src = "${style.img}" type="video/mp4">`
//
//   day_el.append(day_node);
//   location_el.append(location_node);
//   overview_el.append(overview_node);
//   tempAv_el.append(tempAv_node);
//   tempMin_el.append(tempMin_node);
//   tempMax_el.append(tempMax_node);
//   wind_el.append(wind_node);
//   precip_el.append(precip_node);
//   dewpoint_el.append(dewpoint_node);
//   cloud_el.append(cloud_node);
//   sleet_el.append(sleet_node);
//   snow_el.append(snow_node);
//
//   var background = `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("${style.img}");`
//   var weather_overview_container = document.querySelector(".weather_main_overview_container");
//
//   video.classList.remove("inactive");
//   video.innerHTML = source;
//
// }
//
//
// function ExitOutOfOverview(){
//
//   ClearData();
//
//   var search = document.querySelector(".weather_search_container");
//   var overview = document.querySelector(".weather_main_overview_container");
//   var dashboard = document.querySelector(".weather_dashboard_container");
//
//   exit_weather.setAttribute("clickable",0);
//   exit_weather = null;
//
//   document.body.style.backgroundImage = null;
//
//   dashboard.classList.remove("inactive");
//   overview.classList.add("inactive");
//   search.classList.remove("inactive");
//
//   PopulateSearches();
//
// }
//
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// function toTitleCase(str) {
//
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
//
// }
//
//
// PopulateSearches();

var submit = document.querySelector("#search_form");
var input = document.querySelector(".weather_input");
var weather_overview_container = document.querySelector(".weather_main_overview_container");
var searches_container = document.querySelector(".searches_container");

const CLOUDY_STANDARD = 30;

const RAIN_STANDARD = 50;
const SNOW_INTENSITY_STANDARD = 30;
const SLEET_INTENSITY_STANDARD = 30;
const STORM_STANDARD = 75;
const HAIL_STANDARD = 30;
const FREEZING_TEMP_STANDARD = 35;
const CLOUD_COVER_STANDARD = 40;
const CLOUD_PARTLY_COVER_STANDARD = 25;
const PRECIPITATION_STANDARD = 35;

var weather_title;
var exit_weather;
var forcast_data;
var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


const WEATHER_FIXED_CONFIG = {

  snow:{
    img:"./../vids/imgs/3.mp4",
    name:"High Chance of Snow",
    logo:"./../imgs/6.png"
  },
  sleet:{
    img:"./../vids/4.mp4",
    name:"Sleet Warning",
    logo:"./../imgs/8.png"
  },
  rain:{
    img:"./../vids/7.mp4",
    name:"High Chance of Rain",
    logo:"./../imgs/7.png"
  },
  cloudy:{
    img:"./../vids/5.mp4",
    name:"Cloudy Overcast",
    logo:"./../imgs/3.png"
  },
  clear:{
    img:"./../vids/1.mp4",
    name:"Clear Skies",
    logo:"./../imgs/1.png"
  },
  partly_cloudy:{
    img:"./../vids/6.mp4",
    name:"Slighly Cloudy",
    logo:"./../imgs/3.png"
  },
  hail:{
    img:"./../vids/4.mp4",
    name:"High Chance of Hail",
    logo:"./../imgs/7.png"
  },
  storm:{
    img:"./../vids/2.mp4",
    name:"High Chance of Heavy Rain",
    logo:"./../imgs/4.png"
  }

}

var weather_config;

function RenderForcast(forcast,target){

  var html = ``;
  var row = document.querySelector(".week_row");

  for(var i = 0; i < forcast.length; i ++){

    var style = DetermineWeather(forcast[i]).chosen_style;
    var active = "";

    if(parseInt(target) == i){
      active = "forcast_active"
    }

    console.log(active)

    if(style){
      html+= (`<div class="col-2" >
          <div class="forcast_box" id=${active} day = ${week[i]} day_counter = ${i}>
              <img class = "forcast_icon" src ='${style.logo}'/>
              <p class="day_forcast" > ${week[i]} </p>
              <p class="temp_forcast" > ${CelsiusConverter(forcast[i].temperatureAvg) +  String.fromCharCode(176)} Average </p>
          </div>
      </div>`);
    }


}

  row.innerHTML = html;

  return html;

}

function AddForcastEvents(){

  var forcast_days = document.getElementsByClassName("forcast_box");

  for(var i = 0; i < forcast_days.length; i++){

    forcast_days[i].classList.remove("forcast_active");

    forcast_days[i].addEventListener("click",(e)=>{

        var target = e.currentTarget;
        var day_counter = target.getAttribute("day_counter");
        var forcast = forcast_data[day_counter];
        console.log(forcast,day_counter);
        PopulateDayFromWeek(day_counter,forcast);

    })
  }
}



function DetermineWeather(weather_data){
  var chosen_data;
  var chosen_style = WEATHER_FIXED_CONFIG.sleet;
  var has_decided_weather = false;
  console.log(weather_data);
  chosen_style = WEATHER_FIXED_CONFIG.clear;

  // if(!weather_data){
  //   chosen_style = WEATHER_FIXED_CONFIG.clear;
  //   has_decided_weather = true;
  // }
  if(weather_data.sleetIntensityAvg > SLEET_INTENSITY_STANDARD && !has_decided_weather){

    if(weather_data.precipitationProbabilityAvg > PRECIPITATION_STANDARD){
      chosen_style = WEATHER_FIXED_CONFIG.sleet;
      has_decided_weather = true;
    }

  }

  if(weather_data.snowIntensityAvg > SNOW_INTENSITY_STANDARD && !has_decided_weather){

    if(weather_data.precipitationProbabilityAvg > PRECIPITATION_STANDARD){
      chosen_style = WEATHER_FIXED_CONFIG.snow;
      has_decided_weather = true;
    }

  }

  if(weather_data.precipitationProbabilityAvg > STORM_STANDARD && !has_decided_weather){
    chosen_style = WEATHER_FIXED_CONFIG.storm;
    has_decided_weather = true;
  }

  if(weather_data.precipitationProbabilityAvg > RAIN_STANDARD && !has_decided_weather){
    chosen_style = WEATHER_FIXED_CONFIG.rain;
    has_decided_weather = true;

  }

  if(weather_data.precipitationProbabilityAvg > CLOUDY_STANDARD && !has_decided_weather){
    chosen_style = WEATHER_FIXED_CONFIG.cloudy;
    has_decided_weather = true;
  }

  if(weather_data.cloudCoverAvg > CLOUD_COVER_STANDARD && !has_decided_weather){
    chosen_style = WEATHER_FIXED_CONFIG.cloudy;
    has_decided_weather = true;
  }

  if(weather_data.cloudCoverAvg > CLOUD_PARTLY_COVER_STANDARD && !has_decided_weather){
    chosen_style = WEATHER_FIXED_CONFIG.partly_cloud;
    has_decided_weather = true;
  }

  if(!has_decided_weather){
    chosen_style = WEATHER_FIXED_CONFIG.clear;
    has_decided_weather = true;
  }


  var results = {
    chosen_data:chosen_data,
    chosen_style:chosen_style
  }

  return results;

}

submit.addEventListener("submit",(e)=>{

  e.preventDefault();
  input = document.querySelector(".weather_input");
  var overview = document.querySelector(".weather_overview_weather");
  var location = document.querySelector(".weather_overview_title");
  var search_bar = document.querySelector(".weather_search_container");

  exit_button = document.querySelector(".exit_weather");

  var value = input.value;
  console.log(value);

  axios.post("/search",{place:value}).then((res)=>{
    console.log(res);
    if(!res.data){
      var html_fixed = `
      <div class="no_searched_container">
        <img class="no_search_img" src = "./../imgs/no_results.png"/>
        <p class="title_search_none">
          No Results
        </p>
      </div> `
      searches_container.innerHTML = html_fixed;
      return;
    }
    var weather_data = res.data.snapshot;
    var forcast_weekly = res.data.forcast_weekly;
    var searches_container = document.querySelector(".searches_container");

    var chosen_style = DetermineWeather(weather_data).chosen_style;
    forcast_data = forcast_weekly;
    ClearData();
    PopulateWeather(res.data.day - 1,input.value,chosen_style,weather_data);
    RenderForcast(forcast_weekly,null)
    AddForcastEvents();
    AddSearchToList(weather_data,input.value);
    searches_container.innerHTML = "";

    weather_overview_container.classList.remove("inactive")
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
    console.log(err);
    var html_fixed = `
    <div class="no_searched_container">
      <img class="no_search_img" src = "./../imgs/no_results.png"/>
      <p class="title_search_none">
        No Results
      </p>
    </div> `
    searches_container.innerHTML = html_fixed;
  });

});

function CelsiusConverter(temp){

  var farenheight = ((temp * 9/5) + 32);

  return Math.round(farenheight);

}


function PopulateDayFromWeek(day,target){

  var day_counter = parseInt(day);
  var day_string = week[day_counter];
  var day_data = forcast_data[day_counter];
  var place = input.value;

  var chosen_style = DetermineWeather(day_data).chosen_style;

  ClearData();


  if(day_counter < week.length || day > 0){
    day_counter = parseInt(day);
  }

  PopulateWeather(day_counter,place,chosen_style,day_data);
  RenderForcast(forcast_data,day_counter);
  AddForcastEvents();

}


function ClearData(){

  var location_el = document.querySelector(".weather_overview_title");
  var overview_el = document.querySelector(".weather_overview_weather");
  var tempAv_el = document.querySelector("[info=temperature-average]");
  var tempMin_el = document.querySelector("[info=temperature-min]");
  var tempMax_el = document.querySelector("[info=temperature-max]");
  var sleet_el = document.querySelector("[info=sleet-intensity]");
  var snow_el = document.querySelector("[info=snow-intensity]");
  var cloud_el = document.querySelector("[info=cloud-coverage]");
  var dewpoint_el = document.querySelector("[info=dewpoint]");
  var precip_el = document.querySelector("[info=precipitation-chance]");
  var wind_el = document.querySelector("[info=wind-gust]");
  var background_el = document.querySelector(".weather_overview_weather");
  var week_row_el = document.querySelector(".week_row");
  var day_text = document.querySelector(".day_text");
  var video = document.querySelector("#forcast_video");

  video.classList.add("inactive");

  video.innerHTML = "";
  day_text.innerHTML = "";
  location_el.innerHTML = "";
  tempAv_el.innerHTML = "";
  overview_el.innerHTML = "";
  sleet_el.innerHTML = "";
  wind_el.innerHTML = "";
  precip_el.innerHTML = "";
  dewpoint_el.innerHTML = "";
  week_row_el.innerHTML = "";
  cloud_el.innerHTML = "";
  snow_el.innerHTML = "";
  sleet_el.innerHTML = "";
  tempMax_el.innerHTML = "";
  tempMin_el.innerHTML = "";
  tempAv_el.innerHTML = "";

}

function PopulateWeather(day,location,style,config){

  var location_node = document.createTextNode(capitalizeFirstLetter(style.name));
  var overview_node = document.createTextNode(toTitleCase(location));
  var tempAv_node = document.createTextNode(CelsiusConverter(config.temperatureAvg) + String.fromCharCode(176));
  var tempMin_node = document.createTextNode(CelsiusConverter(config.temperatureMin) + String.fromCharCode(176));
  var tempMax_node = document.createTextNode(CelsiusConverter(config.temperatureMax) + String.fromCharCode(176));
  var dewpoint_node = document.createTextNode(CelsiusConverter(config.dewPointAvg) + String.fromCharCode(176));
  var precip_node = document.createTextNode(config.precipitationProbabilityAvg+"%");
  var wind_node = document.createTextNode(config.windGustAvg + "MPH");
  var sleet_node = document.createTextNode(config.sleetIntensityAvg);
  var snow_node = document.createTextNode(config.snowIntensityAvg);
  var cloud_node = document.createTextNode(config.cloudCoverAvg+ "%");
  var day_node = document.createTextNode(week[day]);
  var location_el = document.querySelector(".weather_overview_title");
  var overview_el = document.querySelector(".weather_overview_weather");
  var tempAv_el = document.querySelector("[info=temperature-average]");
  var tempMin_el = document.querySelector("[info=temperature-min]");
  var tempMax_el = document.querySelector("[info=temperature-max]");
  var sleet_el = document.querySelector("[info=sleet-intensity]");
  var snow_el = document.querySelector("[info=snow-intensity]");
  var cloud_el = document.querySelector("[info=cloud-coverage]");
  var dewpoint_el = document.querySelector("[info=dewpoint]");
  var precip_el = document.querySelector("[info=precipitation-chance]");
  var wind_el = document.querySelector("[info=wind-gust]");
  var day_el = document.querySelector(".day_text");
  var video = document.querySelector("#forcast_video");
  var source = `<source  id = "forcast_source" src = "${style.img}" type="video/mp4">`

  day_el.append(day_node);
  location_el.append(location_node);
  overview_el.append(overview_node);
  tempAv_el.append(tempAv_node);
  tempMin_el.append(tempMin_node);
  tempMax_el.append(tempMax_node);
  wind_el.append(wind_node);
  precip_el.append(precip_node);
  dewpoint_el.append(dewpoint_node);
  cloud_el.append(cloud_node);
  sleet_el.append(sleet_node);
  snow_el.append(snow_node);

  var background = `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url("${style.img}");`
  var weather_overview_container = document.querySelector(".weather_main_overview_container");

  video.classList.remove("inactive");
  video.innerHTML = source;

}


function ExitOutOfOverview(){

  ClearData();

  var search = document.querySelector(".weather_search_container");
  var overview = document.querySelector(".weather_main_overview_container");
  var dashboard = document.querySelector(".weather_dashboard_container");

  PopulateSearches();

  exit_weather.setAttribute("clickable",0);
  exit_weather = null;

  document.body.style.backgroundImage = null;

  dashboard.classList.remove("inactive");
  overview.classList.add("inactive");
  search.classList.remove("inactive");
  var html_fixed = `
  <div class="no_searched_container">
    <img class="no_search_img" src = "./../imgs/weather_placeholder.png"/>
    <p class="title_search_none">
      Enter Address
    </p>
  </div> `

  searches_container.innerHTML = html_fixed;

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toTitleCase(str) {

    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

}

PopulateSearches();
var html_fixed = `
<div class="no_searched_container">
  <img class="no_search_img" src = "./../imgs/weather_placeholder.png"/>
  <p class="title_search_none">
    Enter Address
  </p>
</div> `

searches_container.innerHTML = html_fixed;
