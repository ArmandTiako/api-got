import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Count from "./components/Count";
import Login from "./components/Login";
import Register from "./components/Register";
import Book from "./components/Book";
import { Provider } from "react-redux";
import store from "./redux/store";
const MyRoutes = () => {
    return useRoutes([
        { path: "/", element: <Login /> },
        { path: "/count", element: <Count /> },
        { path: "/register", element: <Register /> },
        { path: "/books", element: <Book /> },
    ]);
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <MyRoutes />
            </Router>
        </Provider>
    );
}

export default App;
