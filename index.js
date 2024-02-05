const parameters = {
    access_key:"c7b7d852d39e5b713bfe1ee2ce46262d",
    query: "Paris",
    units: "m"
}

fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`)
    .then(response => response.json())
    .then(data => console.log(data))
    