import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { Title } from './components/Title.jsx'
import { Form } from './components/Form.jsx'
import { Table } from './components/Table.jsx'

function App() {

  return (
    <>
      <div className='main-content'>
        <Title/>
        <Form/>
        <Table/>
      </div>
    </>
  )
}

export default App
