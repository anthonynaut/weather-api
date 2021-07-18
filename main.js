
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temperature = document.querySelector('.temperature');
var description = document.querySelector('.description');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ed599b3c9ac8fa7e248808e454d3787e')
    .then(response => response.json())
    .then(data => {
        var temperatureValue = data['main']['temperature'];
        var nameValue = data['name'];
        var descriptionValue = data['weather'][0]['description'];
        // Not working, returning undefined.
        main.innerHTML = nameValue;
        description.innerHTML = "Description - "+descriptionValue;
        temperature.innerHTML = "Temperature - "+temperatureValue;
        input.value ="";
        
    })
    
    .catch(err => alert("That city exists in La la land!"));
})
