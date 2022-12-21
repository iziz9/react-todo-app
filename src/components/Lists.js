import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import List from './List'

const Lists = React.memo(({ todoData, setTodoData }) => {

  console.log('lists is rendering')

  const handleEnd = (result) => {
    console.log(result)

    if (!result.destination) return;

    const newTodoData = [...todoData];

    // 변경시킬 아이템 지우고 return값으로 지워진 아이템을 잡아줌
    const [reorderdItem] = newTodoData.splice(result.source.index, 1)

    // 원하는 자리에 reorderedItem을 넣어줌
    newTodoData.splice(result.destination.index, 0, reorderdItem)
    setTodoData(newTodoData)
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                todoData.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >

                    {(provided, snapshot) => (
                      <List
                        id={data.id}
                        title={data.title}
                        completed={data.completed}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
})

export default Lists