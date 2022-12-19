import React, { useState } from 'react'
import './App.css'
import Lists from './components/Lists'
import Form from './components/Form'

export default function App() {
  console.log('App is rendering')
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

  const handleRemoveClick = () => {
    setTodoData([]);
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-green-900'>
      <div className='w-full p-6 m-4 bg-white rounded shadow md:max-w-lg md:w-3/4 lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>할 일 목록</h1>
        </div>
        <button onClick={handleRemoveClick}>Delete All</button>
        <Lists todoData={todoData} setTodoData={setTodoData} />

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}