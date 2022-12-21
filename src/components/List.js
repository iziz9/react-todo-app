import React, { useState } from 'react'

const List = React.memo(({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
  const [isEditing, setIsEditing] = useState(false); // false를 초기값으로
  const [editedTitle, setEditedTitle] = useState(title); // title을 초기값으로


  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    localStorage.setItem("todoData", JSON.stringify(newTodoData))
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

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  }

  const handleSubmit = () => {
    let newTodoData = todoData.map(data => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);
  }


  if (isEditing) {
    return (
      <div className='flex items-center justify-between w-full px-4'>
        <form>
          <input
            className='w-full px-3 py-2 mr-4 text-gray-500'
            value={editedTitle}
            autoFocus
            onChange={handleEditChange} />
          <div>
            <button
              className='px-4 py-2 float-right'
              onClick={() => setIsEditing(false)}>X</button>
            <button
              className='px-4 py-2 float-right'
              type="submit"
              onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div
        key={id}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center w-full justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompletedChange(id)}
          />{" "}
          <span className={completed ? "line-through" : ""}>{title}</span>
        </div>
        <div className="items-center">
          <button className='float-right px-4 py-2' onClick={() => handleClick(id)}>❌</button>
          <button className='float-right px-4 py-2' onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      </div>
    )
  }
})

export default List