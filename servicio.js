//pasos para consumir un API con JS puro

//1. declaro la uri
const URI="https://api.spotify.com/v1/artists/60uh2KYYSCqAgJNxcU4DA0/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICION (QUE VOY HACER)

const TOKEN="Bearer BQCrIayvP8c5zrpSu8U_-8Bq5lPj3XA2TQTz5D2rY_aZUUMPkE_FQcyPrQFdiHbKavuBwjxrok34vT9PoS4l2zKsITMxOpS81iMBYpRwc9xYCbuW0xHqKuTEKm0GUa0LSG_AFtlvxX0wO2pWNEU-_W3ZqLC5xdH2UhU"

const PETICION={
    method:"GET",
    headers:{Authorization: TOKEN}
}

//3. DECLARO EL FETCH (VOY AL SERVIDOR OME)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//respuesta de un objeto
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta){
    console.log(respuesta)
})