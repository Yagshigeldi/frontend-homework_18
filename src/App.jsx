import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Post from './pages/post/Post'
import Todo from './pages/todo/Todo'
import UserDetail from './pages/home/UserDetail'
import NotFound from './pages/not-found/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/posts' element={<Post/>}/>
          <Route path='/todos' element={<Todo/>}/>
          <Route path='/users/:id' element={<UserDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App