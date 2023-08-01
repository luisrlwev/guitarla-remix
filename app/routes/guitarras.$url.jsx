import React from 'react'

export async function loader ({request, params}){

  const { guitarraUrl } = params
  console.log(guitarraUrl)

  return {}
}

function Guitarra() {
  return (
    <div>Guitarra</div>
  )
}

export default Guitarra