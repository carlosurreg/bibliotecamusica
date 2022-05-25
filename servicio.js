//pasos para consumir un API con JS puro

//1. declaro la uri
const URI="https://api.spotify.com/v1/artists/60uh2KYYSCqAgJNxcU4DA0/top-tracks?market=US"

//2. DECLARO LOS PARAMETROS DE LA PETICION (QUE VOY HACER)

const TOKEN="Bearer BQAG2Mj_nwQCKQVjqpr8EH72R_QGTI9BH8YkiCgHfVrB-wfX7HLhmJ69IrDBl8jPPtsofI4J7Yf2_m1kUlaLXkKYGUwkEN-NcZRqV2y2VtM8fjv3rUcuzgchTOLUn7GpvM93vSp5Y1w99vet8IhsKt8ckAOz3_Cxtks"

const PETICION={
    method:"GET",
    headers:{Authorization: TOKEN}
}

//rutina para consumir  API con metodo post
//1. URI PARA DONDE VOY
const URIPOST='https://accounts.spotify.com/api/token'

//2. ALMACENO LOS DATOS QUE VOY A ENVIAR
let dato1='client_id=54aff33521eb40048ad3c2e7c247e5dd'
let dato2='client_secret=5d2d87fcc82144f0a1682a190ba71e0d'
let dato3='grant_type=client_credentials'

//3. configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})



//3. DECLARO EL FETCH (VOY AL SERVIDOR OME)
/*fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//respuesta de un objeto
    console.log(respuesta.tracks)//arreglo de 10 canciones
    pintarCanciones(respuesta.tracks)
    
})
.catch(function(respuesta){
    console.log(respuesta)
})

//funcion pintarCanciones
function pintarCanciones(canciones){
    
    
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //rutina para llenado
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url


        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=cancion.album.images[0].url

        //padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
    
}*/