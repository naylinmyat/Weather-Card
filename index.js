const number = document.querySelector(".number");
const unit = document.querySelector(".unit");
const cToF = document.querySelector(".cToF");
const fToC = document.querySelector(".fToC");
const geoLocation = document.querySelector(".geoLocation");

let apiKey = "bf33cd5140ab257a191115a3a67ce6af";
let lat = 16.871311;
let lon = 96.199379;
let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

function getDataFromServer(){
    return fetch(weatherUrl)
    .then(function(res){
        console.log("Res",res);
        return res.json();
    })
    .then(function(data){
        console.log("Data",data);
        return data;
    })
    .catch(function(error){ 
        console.log(error);
    });
}

getDataFromServer().then((item) => {
    dataObj = item;
    console.log("DataObj", dataObj);
    console.log(dataObj.timezone);
    console.log(dataObj.current.temp);
    geoLocation.textContent = dataObj.timezone;
    number.textContent = parseFloat(dataObj.current.temp).toFixed(2);
})

cToF.addEventListener("click", function(){
    cToF.style.display = "none";
    fToC.style.display = "block";
    unit.textContent = "F"
    var cTemp = number.textContent;
    var cToFahr = cTemp * 9 / 5 + 32;
    number.textContent = parseFloat(cToFahr).toFixed(2);
})

fToC.addEventListener("click", function(){
    fToC.style.display = "none";
    cToF.style.display = "block";
    unit.textContent = "C";
    var fTemp = number.textContent;
    var fToCel = (fTemp - 32) * 5 / 9;
    number.textContent = parseFloat(fToCel).toFixed(2);
})