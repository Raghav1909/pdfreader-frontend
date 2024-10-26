import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"

const App = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<BookPage />} path="/:id" />
    </Routes>
  )
}

export default App
