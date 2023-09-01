function TableRow(props){
    
    return(
        <tr>
            <td>
                {props.materia}
            </td>
            <td>
                {props.alumnos}
            </td>
            <td>
                {props.promedio}
            </td>
        </tr>
    )

}

export {TableRow}