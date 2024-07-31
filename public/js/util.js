
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(str) {

    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

}

function CelsiusConverter(temp){

  var farenheight = ((temp * 9/5) + 32);

  return Math.round(farenheight);

}
