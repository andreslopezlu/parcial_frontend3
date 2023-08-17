import { TableRow } from "./TableRow.jsx"
import { resultados } from "./Form.jsx"

const renderMateria = () => 
    resultados.map((resultado, index) => {
        return(
            <TableRow
            key={index}
            nombre={resultado.nombre}
            alumnos={resultado.alumnos} 
            promedio={resultado.promedio}
            />
        )
    })

function Table(){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Materia</th>
                        <th scope="col">Cantidad de alumnos</th>
                        <th scope="col">Promedio de notas</th>
                    </tr>
                </thead>
                <tbody>
                    {renderMateria()}
                </tbody>
            </table>
        </div>
    )
}

export {Table}