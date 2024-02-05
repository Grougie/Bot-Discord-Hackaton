const parameters = {
    access_key:"c7b7d852d39e5b713bfe1ee2ce46262d",
    query: "Nice, France",
    units: "m"
}

fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`)
    .then(response => response.json())
    .then(data => {
        const { current, location, request} = data;
        console.log(`La température à ${location.name} est de ${current.temperature}°C, le un ressenti est de ${current.feelslike}°C.`);
    })
    .catch(error => {
        console.error('Erreur, veiller réessayer:', error);
    });

