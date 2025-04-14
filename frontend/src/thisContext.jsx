import { useState, createContext } from 'react'

const ContextProvide = createContext();
const ThisContext = (props) => {
  const [search, setSearch] = useState('')
  const [top, setTop] = useState('')

  return (
    <ContextProvide.Provider value={{ search, setSearch, top, setTop }}>
      {props.children}
    </ContextProvide.Provider>
  )
}

export { ContextProvide }
export default ThisContext