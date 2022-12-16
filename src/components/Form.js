import React from 'react'

function Form({ value, setValue, handleSubmit }) {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={e => handleSubmit(e)} >
        <input type="text" style={{ flex: '10', padding: '5px' }}
          placeholder='오늘의 할 일은?' value={value}
          onChange={(e) => handleChange(e)} />
        <input type="submit" value='입력' className='btn' style={{ flex: '1' }} />
      </form>
    </div>
  )
}

export default Form