import { useState } from 'react'


function App() {
  const [counter, setCount] = useState(15)

  const add = () => {
    return(
      setCount(counter + 1)
    )
  }

  const remove = () => {
      return (
        setCount(counter - 1)
        
      )
  }


  return (
    <>
      <h2>Counter Value : {counter} </h2>
      <button onClick={add}>Add Value</button>      
      <br /> <br />
      <button onClick={remove}>Remove Value</button>
      <h2>Value Changed To : {counter}</h2>
    </>
  )
}

export default App
