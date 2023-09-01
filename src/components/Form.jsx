import { useState } from "react"

function Form(props){

    function validarMateria(nombreMateria){
        const key = nombreMateria
        let result = false;
        switch (key) {
            case 'FrontEnd':
                result = true
                break;
            case 'BackEnd':
                result = true
                break;
            case 'BD':
                result = true
                break;
            default:
                result = false;
        }
        return result;
    }   

    function validarNota(nota){
        if (nota>= 0 && nota <=10){
            return true
        } else {
            return false
        }
    }

    function calcularPromedio(mat, not){
        const newMaterias = [...props.materias]
        const indexMateria = newMaterias.findIndex(
            (asignatura) => asignatura.nombre === mat
        )
        newMaterias[indexMateria].alumnos += 1;
        newMaterias[indexMateria].totalNotas += parseInt(not);
        newMaterias[indexMateria].promedio = (parseInt(newMaterias[indexMateria].totalNotas)/parseInt(newMaterias[indexMateria].alumnos)).toFixed(2);
        props.setMaterias(newMaterias)
    }

    function handleSubmit(e){

        e.preventDefault();

        const materiaValida= validarMateria(props.materia);
        const notaValida= validarNota(props.nota);
        
        if (!materiaValida || !notaValida){
            alert ('Alguno de los campos ingresados no es válido')
        } else {
            alert ('Nota guardada')
        }

    }

    function handleChangeMateria(e){
        props.setMateria(e.target.value)
    }

    function handleChangeNota(e){
        props.setNota(e.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor='materia'>Escriba una materia</label>
                    <input name="materia" placeholder="Materia" type="text" onChange={handleChangeMateria} value={props.materia}></input>
                </section>
                <section>
                    <label htmlFor='nota'>Inserte la nota</label>
                    <input name="nota" placeholder="Nota" type="number" onChange={handleChangeNota} value={props.nota}></input>
                </section>
                <section>
                    <button type="submit" onClick={(e) => calcularPromedio(props.materia, props.nota)}>Guardar</button>
                </section>
                {props.children}
            </form>
        </>
    )
}

export {Form}