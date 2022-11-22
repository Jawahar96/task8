// https://restcountries.com/v3.1/all
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a1cba8116fa931a83890a3bcca4b2075


let api= fetch(" https://restcountries.com/v3.1/all");
api.then((data)=>data.json()).then((data1)=>
{console.log(data1)})
console.log(api);
var weather =document.createElement('weather');

document.body.append(weather);

let weathercondition=document.createElement('weathercondition');
weathercondition.setAttribute('id','weathercondition');

async function getweathercondition()
{

    var latlng=document.createElement('getweatherconition').value
    latlng.getElementById('latlng').value

    
    var url=await fetch(" https://api.openweathermap.org/data/2.5/weather?chennai ${lat=45.0&lon=25.0}&appid=a1cba8116fa931a83890a3bcca4b2075")
    let cc=await url.json();
    console.log(cc);

    let weathercondition=document.getElementById('weathercondition');
   weathercondition.innerHTML=` <p class="Weathwercondition">
   <p class="card">
     <div class="card-body">
       <p class="latlng">Latlng:${weathercondition.latlng}</p>`

      //  let countryname=document.getElementsByClassName('countryname');
      let cityNames=getElementById('cityName').value;  
      var randomCity = Math.floor(Math.random()*result.length)
        console.log(randomCity)
        console.log(result[randomCity].name.common)
        randomCity.then((data)=>data.json()).then((data1)=>
        {console.log(data1)})
        // randomCity.getElementById('cityNames');
        // randomCity.getElementById('region');
        // randomCity.getElementById('Capital');
        // randomCity.getElementById('latlng');
      
      cityNames.innerHTML=`https://api.openweathermap.org/data/2.5/weather?q= Chennai${cityNames} &appid=175fa9771bfa1b408feb60f0443a32d7`
      document.body.append(cityNames.name.common)
      
      // let res=await cityNames.json();
      // console.log(res);
      // document.body.append(cityNames.name.common)


      let weathercondition1=document.getElementById('weathercondition1');
      weathercondition1.innerHTML=`<div class="card-body">
      <p class="Region">Region : ${weathercondition1.name.region}</p>
      <p class="capital">Capital : ${weathercondition1.capital.common}</p>
      <p class="Latlong">Latlng : ${weathercondition1.latlng.common}</p> `

      randomCity.then((data)=>data.json()).then((data1)=>
        {console.log(data1)})
        randomCity.getElementById('cityNames');
        randomCity.getElementById('region');
        randomCity.getElementById('Capital');
        randomCity.getElementById('latlng');
        document.body.append(weathercondition1);

}

var button=document.getElementById('Click','getweatherconditiion');
console.log(button)
// button.innerText=`<button type="button" >onclick="getweathercondition" class="btn btn-primary btn-sm">Click for weather</button>`
document.body.append(button);
