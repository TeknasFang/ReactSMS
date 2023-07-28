import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './component/auth/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/home/Home';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  
  return (
    <Provider store={store}>
     <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
       </Routes>
     </BrowserRouter> 
     </div>
    </Provider> 
  );
}

export default App;
