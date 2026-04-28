import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Layaut } from "../components/layaut";
import { Task } from "../pages/task";
import { Profile } from "../pages/profile";
import { Statistics } from "../pages/statistic";
const RouterPrivadas = () => {
  return (
    <Routes>
      <Route path="/" element={<Layaut />} >
        <Route index element={<Home />} />
        <Route path="/tasks" element={<Task/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/statistics" element={<Statistics/>} />

      </Route>
    </Routes>
  )
}
export { RouterPrivadas }