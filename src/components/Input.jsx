import React from 'react'

const Input = () => {
  return (
    <div>
      <h1>Dungeon Master Helper</h1>
      <form action="">
        <p>Name</p><input type="text" />
        <p>Health</p><input type="text" />
        <p>Initiative</p><input type="text" />
        <button className='text-[#7b81f2] border-2 hover:bg-[#f2ec7b] hover:border-[#f2ec7b] hover:font-bold px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Input