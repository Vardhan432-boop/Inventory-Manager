import {createBrowserRouter,  RouterProvider } from 'react-router'
import './App.css'
import { List } from './components/List';
import { Add } from './components/Add';
import { Update } from './components/Update';
import { Delete } from './components/Delete';

function App() {
 const router=createBrowserRouter([
  {
    path:"/",
    element:<List/>
  },
  {
    path:"/add/",
    element:<Add/>
  },
  {
    path:"/update/:id",
    element:<Update/>,
  },
  {
    path:"/delete/:id",
    element:<Delete/>
  }
 ]);
 
 return(
  <>
  <RouterProvider router={router}/>
  </>
 )
}

export default App
