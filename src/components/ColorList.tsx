import React from 'react'

const colors: string[] = ['purple', 'pink', 'red', 'black']
console.log(colors)


const ColorList: React.FC = () => {
  return (
    <>
    {colors.map((color, index) => (
      <div key={index} style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    ))}
      
    </>
  )
}

export default ColorList
