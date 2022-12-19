import React from 'react'

function Form({ value, setValue, handleSubmit }) {
  console.log('form is rendering')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <form className="flex pt-2" onSubmit={e => handleSubmit(e)} >
        <input
          type="text"
          className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
          placeholder="해야 할 일을 입력하세요"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="submit"
          value="입력"
          className="p-2 text-green-200 border-2 border-green-400 rounded hover:text-white hover:bg-green-200"
        />
      </form>
    </div>
  )
}

export default Form