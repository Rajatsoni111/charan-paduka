import { useState, createContext } from 'react'

const ContextProvide = createContext();
const ThisContext = (props) => {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState('')

  return (
    <ContextProvide.Provider value={{ search, setSearch, cart, setCart }}>
      {props.children}
    </ContextProvide.Provider>
  )
}

export { ContextProvide }
export default ThisContext