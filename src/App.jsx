// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Title } from './components/Title.jsx'
import { Form } from './components/Form.jsx'
import { Table } from './components/Table.jsx'
import { TableRow } from './components/TableRow.jsx'
import { useState } from 'react'

const datosMaterias = [
  {id: 1, nombre: "FrontEnd", alumnos: 0, totalNotas: 0, promedio:0},
  {id: 2, nombre: "BackEnd", alumnos: 0, totalNotas: 0, promedio:0},
  {id: 3, nombre: "BD", alumnos: 0, totalNotas: 0, promedio:0}
]

function App() {

  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState(0);
  const [materias, setMaterias] = useState(datosMaterias);

  return (
    <>
      <Title/>
      <Form materia={materia} setMateria={setMateria} nota={nota} setNota={setNota} materias={materias} setMaterias={setMaterias}> 
        <Table>
          {materias.map((materia, index) => (
            <TableRow
            key={index}
            materia={materia.nombre}
            alumnos={materia.alumnos}
            promedio={materia.promedio}
            />
          ))}
        </Table>
      </Form>
    </>
  )
}

export default App
