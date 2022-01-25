import './App.css';
import {BrowserRouter as Router, useRoutes} from "react-router-dom";
import Count from './components/Count';
import Login from './components/Login';
import Register from './components/Register';
import Book from './components/Book';

const MyRoutes = () => {

  return useRoutes([
    { path: "/" , element: <Login/>},
    { path: "/count"  , element: <Count />},
    { path: "/login" , element: <Login />},
    { path: "/register" , element: <Register />},
    { path: "/books" , element: <Book /> },
  ])
}

function App() {
  return (
    <Router>
      <MyRoutes />      
    </Router>
  );
}

export default App;
