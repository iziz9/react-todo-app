import React, { useState } from 'react'
import './App.css'
import Lists from './components/Lists'
import Form from './components/Form'

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      title: "공부하기",
      completed: true
    },
    {
      id: '2',
      title: "청소하기",
      completed: false
    },
    {
      id: '3',
      title: "잠 자기",
      completed: true
    }
  ])
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodoData = {
      id: Date.now(),
      title: value,
      completed: false
    }
    setTodoData(previous => [...previous, newTodoData])
    setValue("")
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>

          <Lists todoData={todoData} setTodoData={setTodoData} />

          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}