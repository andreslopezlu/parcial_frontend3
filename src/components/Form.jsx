import { useState } from "react"

let resultados = [
    {nombre: "FrontEnd", alumnos: 0, totalNotas: 0, promedio:0},
    {nombre: "BackEnd", alumnos: 0, totalNotas: 0, promedio:0},
    {nombre: "Bases de datos", alumnos: 0, totalNotas: 0, promedio:0}
]

export {resultados}

function Form(){

    const [materia, setMateria] = useState('')
    const [nota, setNota] = useState('')

    function validarMateria(valorMateria){
        const key = valorMateria
        let result = false;
        switch (key) {
            case 'FrontEnd':
                result = true
                break;
            case 'BackEnd':
                result = true
                break;
            case 'Bases de datos':
                result = true
                break;
            default:
                result = false;
        }
        return result;
    }   

    function validarNota(valorNota){
        if (valorNota>= 0 && valorNota <=10){
            return true
        } else {
            return false
        }
    }

    function calcularPromedio(mat, not){
        resultados.forEach((asignatura)=>{
            if (asignatura.nombre===mat){
                asignatura.alumnos+=1
                asignatura.totalNotas+=parseInt(not)
                asignatura.promedio=(asignatura.totalNotas/asignatura.alumnos)
            }
        })
    }

    function handleSubmit(e){

        const materiaValida= validarMateria(materia);
        const notaValida= validarNota(nota);
        
        if (!materiaValida || !notaValida){
            alert ('Alguno de los campos ingresados no es válido')
        } else {
            alert ('Nota guardada')
            calcularPromedio(materia, nota)
            console.log(resultados)
        }

        e.preventDefault();
    }

    function handleChangeMateria(e){
        setMateria(e.target.value)
    }

    function handleChangeNota(e){
        setNota(e.target.value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor='materia'>Seleccione una materia</label>
                    <input name="materia" placeholder="Materia" type="text" onChange={handleChangeMateria} value={materia}></input>
                </section>
                <section>
                    <label htmlFor='nota'>Inserte la nota</label>
                    <input name="nota" placeholder="Nota" type="number" onChange={handleChangeNota} value={nota}></input>
                </section>
                <section>
                    <button type="submit">Guardar</button>
                </section>
            </form>
        </div>
    )

}

export {Form}