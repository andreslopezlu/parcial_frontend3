import { useState } from "react"
import { resultados } from "./Form.jsx"

function TableRow(props){

    const [cantidadAlumnos, setCantidadAlumnos] = useState()
    const [promedioGeneral, setPromedioGeneral] = useState()

    

    // return(
    //     <tr>
    //         <td>
    //             {props.nombre}
    //         </td>
    //         <td>
    //             {props.alumnos}
    //         </td>
    //         <td>
    //             {props.promedio}
    //         </td>
    //     </tr>
    // )

    return (resultados.map((resultado, index) => {
        return(
            <TableRow
            key={index}
            nombre={set}
            alumnos={resultado.alumnos} 
            promedio={resultado.promedio}
            />
        )))
}

export {TableRow}