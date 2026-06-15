import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Layaut } from "../components/layaut";
import { Task } from "../pages/task";
import { Profile } from "../pages/profile";
import { Statistics } from "../pages/statistic";
import UsersList from "../pages/users";
const RouterPrivadas = () => {
  return (
    <Routes>
      <Route path="/" element={<Layaut />} >
        <Route index element={<Home />} />
        <Route path="/tasks" element={<Task/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/users" element={<UsersList/>} />


      </Route>
    </Routes>
  )
}
export { RouterPrivadas }