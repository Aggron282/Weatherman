var  climate_cell  = require('@api/climacell-docs');
var url_endpoint = `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=tgTdERmG6VoYDLpYSv5yMOUUZ3RMQLrN`;
//var timeline_endpoint = "https://api.tomorrow.io/v4/timelines";

var custom_endpoint = (latitude,longitude) => {
  console.log(latitude,longitude)
    return `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=tgTdERmG6VoYDLpYSv5yMOUUZ3RMQLrN`;
}


var FindTimeline = (latitude,longitude) => {
  climate_cell.auth('tgTdERmG6VoYDLpYSv5yMOUUZ3RMQLrN');
climate_cell.postTimelines({
  location: `${latitude},${longitude}`,
  fields: ['temperature'],
  units: 'metric',
  timesteps: ['1h'],
  startTime: 'now',
  endTime: 'nowPlus12h'
}, {'Accept-Encoding': 'gzip'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
}


module.exports.url = url_endpoint;
module.exports.customUrl = custom_endpoint;
module.exports.FindTimeline;
