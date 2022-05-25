import { obtenerCanciones} from'./servicioGenerarCanciones.js'

import{pintarCanciones} from'./pintarCanciones.js'

//llamar a la funcion generartoken
let canciones=await obtenerCanciones()

//llamar la funcion pintarCanciones
pintarCanciones(canciones.tracks)



