import React from 'react'

interface IGreetingProps {
    name: string
}

const Greeting = ({name}: IGreetingProps) => {
  return (
    <h3>Hi, {name}</h3>
  )
}

export default Greeting