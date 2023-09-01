function Table(props){

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Materia</th>
                        <th scope="col">Cantidad de alumnos</th>
                        <th scope="col">Promedio de notas</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </>
    )
}

export {Table}