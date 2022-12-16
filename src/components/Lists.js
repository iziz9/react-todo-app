import React from 'react'

const Lists = ({ todoData, setTodoData }) => {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: "pointer",
    float: 'right'
  }

  const listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(newTodoData)
  }

  const handleCompletedChange = (id) => {
    const newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }
  return (
    <div>
      {todoData.map(data => (
        <div style={listStyle(data.completed)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={data.completed}
            onChange={() => handleCompletedChange(data.id)}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>❌</button>
        </div>
      ))}
    </div>
  )
}

export default Lists