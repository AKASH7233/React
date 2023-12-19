import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState('')
  const [user,setUser] = useState('')
  const [search,setSearch] = useState(false)
  useEffect(()=>{
    (async ()=>{
      let response = axios.get(`https://api.github.com/users/${user}`)
        .then((response)=>{
          setLoading(true)
          setCount(response.data)
          setLoading(false)
          console.log(count)
        })
        .catch((error)=>{
          setLoading(false)
          seterror(response.status)
          console.log(error)
        })
    })()
  }, [search])

  return (
    <>
      <input 
      type="text" 
      placeholder="Enter your" 
      id="" 
      value={user}
      onChange={(e)=>{setUser(e.target.value)}}
      />
      <button onClick={()=>{setSearch(prev=> !prev)}}>search</button>
      <h2>{count.name}</h2>
      <h2>{count.login}</h2>
      <h2>{count.bio}</h2>
      <h2>{loading ? 'Loading ..' : ''}</h2>
      {user.length==0 ? 'Please Enter your Username' : ``}
      {error ? 'something went wrong  ' : ``}
    </>
  )
}

export default App
