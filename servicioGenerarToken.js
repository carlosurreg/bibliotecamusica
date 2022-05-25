//1. URI PARA DONDE VOY
const URI='https://accounts.spotify.com/api/token'

//2. almaceno los datos que voy a enviar
let dato1='client_id=54aff33521eb40048ad3c2e7c247e5dd'
let dato2='client_secret=5d2d87fcc82144f0a1682a190ba71e0d'
let dato3='grant_type=client_credentials'

//3. configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4.consumir el servicio
  export async function generarToken(){
    let respuesta= await fetch(URI,PETICION)
    return(respuesta.json())
}