import {generarToken} from'./servicioGenerarToken.js'

//llamar a la funcion generartoken
let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

//URI DE SERVICIO
const URI="https://api.spotify.com/v1/artists/60uh2KYYSCqAgJNxcU4DA0/top-tracks?market=US"


//configuro la peticion
const PETICION={
    method:"GET",
    headers:{Authorization:token}
}

//consumo el servicio
 export async function obtenerCanciones(){
    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()
}