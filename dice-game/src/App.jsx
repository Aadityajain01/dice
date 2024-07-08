import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import GamePage from './components/gamepage/GamePage';

import PlayPage from './components/playArea/PlayPage';
import ShowRules from './components/rules/ShowRules';
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <GamePage/>
    },
    {
      path:'/playpage',
      element: <><PlayPage/></>
    }

  ])
  return(
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
