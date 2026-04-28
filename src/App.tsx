import { RouterPublic } from "./routers/routerpublic"
import { RouterPrivadas } from "./routers/routerprivadas"

function App() {
  const users = localStorage.getItem('register')


  return (
    <>
      {users ? <RouterPrivadas /> : <RouterPublic />}


    </>


  )
}

export default App
