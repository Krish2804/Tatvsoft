// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import { NotFound } from './NotFound';
// import { globalsStyles } from './constants';
import appStyle from "./AppStyle.module.css";
import { ThemeProvider } from '@mui/material';
import { theme } from './styles';
// import Logo from "./images/logo.svg";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import SiteLogo from "../public/logo192.png";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <img src={Logo} alt='App Logo' /> */}
        {/* <img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`} alt='App Logo' /> */}
        <ToastContainer />
        <BrowserRouter>
          <div
            // style={{
            //   ...globalsStyles.navbar
            // }}
            className={appStyle.navbarStyle}
          >
            <Link to="/" style={{
              marginLeft: 5,
            }}>HomePage</Link>
            <Link to="/apple" style={{
              marginLeft: 10,
            }}>Apple</Link>
            <Link to="/applet" style={{
              marginLeft: 10,
            }}>Applet</Link>
          </div>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/apple' element={<Apple />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
